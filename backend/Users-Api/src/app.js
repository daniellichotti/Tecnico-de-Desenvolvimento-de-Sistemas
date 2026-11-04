import Fastify from 'fastify'
import { usersRoutes } from './routes/users-routes.js'

export function buildApp() {

    const app = Fastify({ logger: true })

    app.register(usersRoutes, { prefix: '/users' })

    return app
}