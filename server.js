import 'dotenv/config'
import express from 'express'
import { PrismaClient } from './generated/prisma/index.js'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({ adapter })

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
  const userCount = await prisma.user.count()
  res.json(
    userCount === 0
      ? 'No users have been added yet.'
      : `There are ${userCount} users in the database.`
  )
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})