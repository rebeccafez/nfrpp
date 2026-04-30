import express from 'express';

const app = express()

app.set('view engine', 'ejs')

app.get('/hello', (_req, res) => {
    res.render('pages/index')
})

export default app
