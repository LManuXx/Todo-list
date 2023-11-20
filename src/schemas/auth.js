const {z} = require('zod');

const registerSchema = z.object({
    username:z.string({
        required_error:'username is required'
    }).min(4,{
        message:'Min 4 characers'
    }),
    password: z.string({
        required_error:'password is required'
    }).min(4,{
        message:'Min 4 characers'
    })
})

module.exports = {
    registerSchema
}