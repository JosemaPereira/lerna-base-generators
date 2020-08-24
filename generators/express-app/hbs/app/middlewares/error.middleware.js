export const logError = (err, req, res, next) => {
    console.log(err);
    next(err);
};

export const handleError = (err, req, res, next) => {
    res.json({ error: err.message });
    res.status(err.status || 500);
};