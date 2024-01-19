import joi from "joi";

export const tokenSchema = {
    TOKEN: {
        /* headers: joi.object({
            authorization: joi.string().pattern(new RegExp(/^pk_test_[a-zA-Z0-9]{16}$/)),//Joi.string().pattern(/^pk_test_[a-zA-Z0-9]{16}$/),
            }), */
        headers: joi.object({
            authorization: joi.string().allow(null,''),//Joi.string().pattern(/^pk_test_[a-zA-Z0-9]{16}$/),
            'postman-token': joi.string().allow()
            }),
    },
};
