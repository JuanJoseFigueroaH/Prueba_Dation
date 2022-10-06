import { httpServer } from './app'

const start = async () => {
  const PORT = process.env.PORT || 3015;
  process.env.NODE_ENV = 'dev'
  if (!PORT) {
    throw new Error('Port must be defined')
  }
  try {
    httpServer.listen(PORT, () => {
      console.log(`listen on port: ${PORT} backend test app.`)
      console.log(`Swagger route: http://localhost:${PORT}/swagger`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()
