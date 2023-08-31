const { HttpError } = require("../helpers");

const bodyValidation = (schema) => {
  return (res, _, next) => {
    const validatedData = schema.validate(res.body, { convert: false });
    const { error } = validatedData;

    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };
};

module.exports = bodyValidation;
