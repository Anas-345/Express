import express from 'express'
import { menuRoute } from './src/menu.js'

const app = express()
app.use(express.json())

app.use('/api/menu', menuRoute)


app.listen(3000, () => console.log('I am running'))