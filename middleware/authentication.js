require("dotenv").config();
const jwt = require("jsonwebtoken");

const { HttpError, ctrlWrapper } = require("../helpers");
const { User } = require("../models/user");
const { SECRET_KEY } = process.env;

const authentication = async (req, __, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    throw HttpError(401);
  }

  const { id } = jwt.verify(token, SECRET_KEY);
  const user = await User.findById(id);

  if (!user || !user.token || user.token !== token) {
    throw HttpError(401);
  }

  req.user = user;
  next();
};

module.exports = ctrlWrapper(authentication);
