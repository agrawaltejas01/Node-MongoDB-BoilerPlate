module.exports = {
    response: {
        internalServerError: {
            data: 'INTERNAL_SERVER_ERROR',
            status: 500,
        },
        invalidInput: {
            data: 'INVALID_INPUT',
            status: 422,
        },
        success: {
            status: 200,
        },
    },

    errors: {
        duplicateKey: {
            code: 11000,
            error: new Error('DUPLICATE_KEY'),
        },
    },
};
