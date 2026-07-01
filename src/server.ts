import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/', async () => {
  const table = await knex('sqlite_schema').select('*')
  return table
})

app
  .listen({ port: 3000 })
  .then(() => {
    console.log('Server is running on http://localhost:3000')
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
