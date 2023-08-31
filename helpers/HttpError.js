const defaultMessages = {
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
};

const HttpError = (status, message = defaultMessages[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
