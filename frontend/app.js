import express from 'express'
import cookieParser from 'cookie-parser'
const app = express()
const PORT = 3000
const COOKIE_SECRET = 'cookiesecret'
app.use('/', express.static('./www'))
app.use(cookieParser(COOKIE_SECRET))

app.listen(PORT, () => console.log(`Servidor de frontend escuchando en puerto ${PORT}`))