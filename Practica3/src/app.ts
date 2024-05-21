import server from 'express'
import { personajeRouter, serieRouter, asignacionRouter} from './routes'


const app = server()

app.use(server.json())


app.use('/personaje', personajeRouter)
app.use('/serie', serieRouter)
app.use('/asignacionRouter', asignacionRouter)

app.listen(3000, () => {
    console.log('Server on port 3000')
})