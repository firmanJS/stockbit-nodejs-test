'use strict';
exports.Handler404 = (req,res) => {
    const err = process.env.APP_ENV == 'development' ? new Error() : {};
    res.status(404).json({
        error: err.stack,
        status: 404,
        msg: `Route : ${req.url} Not found.`
    });
}

exports.Handler500 = (req,res) => {
    const err = process.env.APP_ENV == 'development' ? new Error() : {};
    res.status(500).json({
        error: err.stack,
        status: 500
    });
};