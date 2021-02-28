const Joi = require('joi');
const { handleError } = require('../helpers/error');
const schema = Joi.object({
  startDate: Joi.date().required(),
  endDate: Joi.date().min(Joi.ref('startDate')).required(),
  minCount: Joi.number().required(),
  maxCount: Joi.number().min(Joi.ref('minCount')).required(),

});
module.exports = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  }
  catch (err) {
    let error = new Error(err);
    error.status = 422;
    handleError(error, res)
  }
}