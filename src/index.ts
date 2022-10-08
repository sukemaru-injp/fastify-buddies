import fastify from 'fastify'
import cors from '@fastify/cors'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { initializeApp, cert } from 'firebase-admin/app'
import { postImgSchema } from './schema/postImgSchma'

const serviceAccount = require('../config/firebase-admin.json')

const app = initializeApp({
  credential: cert(serviceAccount)
})

console.log('firebase', app)


const server = fastify({
  logger: true
}).withTypeProvider<TypeBoxTypeProvider>()

const options = { port: Number(process.env.PORT) || 8000, host: '0.0.0.0' }

server.register(cors, {})

server.get('/', async (_request, reply) => {
  console.info('GetRoot')
  reply.code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ name: 'suke', age: 25 })
})

server.post('/img', postImgSchema, (req, rep) => {
  console.info('PostImage', req.body)
  const { key } = req.body

  if (!key) {
    rep.code(400)
    .send({ message: "keyが入力されていません" })
  }
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
