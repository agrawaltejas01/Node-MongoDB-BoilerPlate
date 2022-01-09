const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./lib/config');
const connections = require('./connections/index')();
const itemRoutes = require('./app/routes/items');

connections.init(function (err, connection) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    const app = express();
    app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.on('finish', () => {
            console.log(`${res.statusCode} ${res.statusMessage} ${req.url}`);
        });
        next();
    });

    process.on('uncaughtException', function (err) {
        console.error(err);
    });

    app.use(cors());

    app.use(function (req, res, next) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, PATCH, DELETE'
        );

        // Request headers you wish to allow
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-Requested-With,content-type'
        );

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });

    app.use('/items', itemRoutes);

    app.listen(config.server.port, () => {
        console.info(
            'youtube search API running on port - ' + config.server.port
        );
    });
});
