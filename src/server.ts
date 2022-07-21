import { config } from 'dotenv'
import express, {
	Application, Request, Response
} from 'express'
import morgan from 'morgan'

import graphqlClient from './graphql'

config()

const app: Application = express()

app.use(morgan('dev'))
app.use(express.json({
	limit: '50mb',
	extended: false
}))
app.use(express.urlencoded({
	limit: '50mb',
	extended: true
}))

app.post('/', (req: Request, res: Response) => {
	const {
		username,
		password
	} = req.body

	res.json({
		username,
		password
	})
})

app.use('/graphql', graphqlClient)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`
  Server is listening on port http://localhost:${PORT} \n
  graphiql running on http://localhost:${PORT}/graphql
  `)
})
