let express = require('express');
let app = express();
let axios = require('axios');
const bodyParser = require('body-parser');
const DEFAULT_COLORS = ['RED', 'GREEN', 'BLUE'];

app.use(bodyParser.json({
    limit: '100k'
}))

app.get('/user', (req, res) => {
    let user = {name: 'BillyBop'};
    res.json({user})
})

app.post('/user', (req, res) => {
    console.log('hit post route', req.body)
    res.status(201).json({isSuccess: true, message: 'user created'})
})

app.listen(8080, () => {
    console.log('listinening on port 8080')
})

module.exports = app;