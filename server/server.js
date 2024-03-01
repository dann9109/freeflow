const express = require('express')
const cookieParser = require('cookie-parser')

require('dotenv').config()
const db = require('./config/connection')
const path = require('path')

const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')

const app = express()
const PORT = process.env.PORT || 3000

const { typeDefs, resolvers } = require('./schema')

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    await server.start()

    //MiddleWare
    app.use(express.json())

    //Open Cookie Middle 
    app.use(cookieParser())

    // Apollo/GraphQL Middleware
    app.use('/graphql', expressMiddleware(server, {
        context(data) {
            return {
                req: data.req,
                res: data.res
            }
        }
    }))

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('../client/dist'))

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'))
        })
    }


    // Confirm DB connection
    db.on('open', () => {

        //Start the server
        app.listen(PORT, () => HTMLFormControlsCollection.log('Server started on port', PORT))
    })

    startServer()
}

