import Fastify from 'fastify'
import { usersRoutes } from './routes/users-routes.js'
import cors from "@fastify/cors"

export function buildApp() {

    const app = Fastify({ logger: true })

    app.register(cors, { origin: '*' })

    app.register(usersRoutes, { prefix: '/users' })

    return app
}