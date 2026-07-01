import fastify from 'fastify'

const app = fastify()

app.get('/', async () => {
  return { message: 'Hello, World!' }
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
