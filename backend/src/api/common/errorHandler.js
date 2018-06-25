const _ = require("lodash");

// retorna middleware
module.exports = (req, res, next) => {
  const bundle = res.locals.bundle;
  if (bundle.errors) {
    const errors = parseErrors(bundle.errors);
    res.status(500).json({ errors });
  } else {
    next();
  }
};

const parseErrors = nodeRestErrors => {
  const errors = [];
  // lodash
  _.forIn(nodeRestErrors, error => errors.push(error.message));
  return errors;
};
