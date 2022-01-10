const constants = require('./constants');

function createRes(success, errorMessage, data) {
    return {
        success,
        error: errorMessage,
        data,
    };
}
module.exports = {
    massageData: function (text) {
        if (!text) return 'NA';
        else return text.replace(/[^\x00-\x7F]/g, '');
    },

    tryCatch: async function (promise) {
        try {
            let data = await promise;
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },

    response: {
        internalServerError: (res, errorMessage) => {
            return res
                .status(constants.response.internalServerError.status)
                .json(
                    createRes(
                        false,
                        errorMessage,
                        constants.response.internalServerError.data
                    )
                );
        },

        invalidInput: (res, errorMessage) => {
            return res
                .status(constants.response.invalidInput.status)
                .json(
                    createRes(
                        false,
                        errorMessage,
                        constants.response.invalidInput.data
                    )
                );
        },

        success: (res, data) => {
            if (!data) data = true;
            return res
                .status(constants.response.success.status)
                .json(createRes(true, null, data));
        },
    },

    handleError: {
        duplicateKey: function (error) {
            if (error && error.code === constants.errors.duplicateKey.code)
                throw constants.errors.duplicateKey.error;
        },
    },
};
