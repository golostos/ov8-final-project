import express from "express";

const app = express()

app.use(express.json())

app.post('/api/signup', (req, res) => {
    const body = req.body
    console.log(body);
    body.email = body.email.toUpperCase()
    res.send(body)
})

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
})