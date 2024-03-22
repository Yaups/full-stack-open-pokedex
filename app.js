const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (_req, res) => {
  res.send('chair')
})

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.get('/periodic-health', (_req, res) => {
  const currentMinutes = new Date().getMinutes()
  if (currentMinutes < 30 && currentMinutes >= 0) res.send('ok') //Send response only in the first half of every hour
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
