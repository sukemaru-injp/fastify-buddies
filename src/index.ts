import fastify, { FastifyRequest } from 'fastify'
import cors from '@fastify/cors'

const server = fastify({
  logger: true
})

const options = { port: Number(process.env.PORT) || 8000, host: '0.0.0.0' }

server.register(cors, {})

server.get('/', async (_request, reply) => {
  console.info('GetRoot')
  reply.code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ name: 'suke', age: 25 })
})

interface PostImgReq {}

server.post('/img', (req: FastifyRequest<PostImgReq>, rep) => {
  console.info('PostImage', typeof req)

  rep.code(200)
    .send({ text: 'ok'})
})

const start = async () => {
  console.info('ServerStart', process.env.PORT)
  try {
    await server.listen(options)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
