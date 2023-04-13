const errorHandler = (err, req, res, next) => {
  const title = err.message || "Something went wrong";
  const status = res.statusCode || 500;
  const stack = err.stack || "";
  res.json({ message: title, status, stack });
};

module.exports = errorHandler;
