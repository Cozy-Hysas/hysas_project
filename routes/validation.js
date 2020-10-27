const Joi = require('@hapi/joi');

const loginValidation = data => {
    const validation = Joi.object({
        email:Joi.string().required().email(),
        password:Joi.string().min(6).required()
    })
    return validation.validate(data)
}

module.exports.loginValidation = loginValidation ;