

function executionTimeMiddleware(req, res, next) {
    const start = Date.now();
    res.on('finish', () => {
      const end = Date.now();
      const executionTime = end - start;
      console.log(`[${req.method}] ${req.originalUrl} - Execution time: ${executionTime}ms`);
    });
    next();
  }
  
  module.exports = executionTimeMiddleware;
  