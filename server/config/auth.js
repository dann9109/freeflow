const { sign, verify } = require('jsonwebtoken')
const {User} = require('../models') 

function createToken(user_id) {
    const token = sign({ user_id }, process.env.JWT_SECRET)

    return token
}

function verifyToken(token) {
    try {
        const { user_id } = verify(token, process.env.JWT_SECRET)

        return user_id
    } catch (err) {
        throw new GraphQLError('Your token is invalid')
    }
}

function protect(resolver) {
    return async function (_, args, { req, res }) {
        const token = req.cookies.token

        if (!token) {
            throw new GraphQLError('You are not authorized to perform that action')
        }

        try {
            const user_id = verifyToken(token)

            return resolver(_, args, { req, res, user_id })
        } catch (err) {
            throw new GraphQLError('Your token is invalid')
        }

    }
}

async function authenticate({req, res}) {
    if(!req.cookies.token)
        return { req, res }

    try {
        const token = req.cookies.token
        const { user_id } = verify(token, process.env.JWT_SECRET)
        const user = await User.findById(user_id)
        console.log(user_id)
        return { req, res, user }
    } catch (err) {
        console.log(err)
        return { req, res }
    }
}

module.exports = { createToken, verifyToken, protect, authenticate }