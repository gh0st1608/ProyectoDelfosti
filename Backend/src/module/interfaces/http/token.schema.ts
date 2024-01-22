import joi from "joi";

export const tokenSchema = {
    TOKEN: {
        body: joi.object({
            tokenCard: joi.string().pattern(/^[a-zA-Z0-9]{16}$/),
            }),
    },
};
