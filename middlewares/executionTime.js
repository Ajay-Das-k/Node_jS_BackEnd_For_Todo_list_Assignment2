

function executionTimeMiddleware(req, res, next) {
    const start = Date.now();
    res.on('finish', () => {
        const end = Date.now();
        const executionTime = end - start;
        console.log(`Request to ${req.method} ${req.originalUrl} took ${executionTime} ms`);
        // Optionally, you can set the execution time in response locals for later use
        res.locals.executionTime = executionTime;
    });
    next();
}

module.exports = executionTimeMiddleware;