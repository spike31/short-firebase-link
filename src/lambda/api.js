require('dotenv').config();

const express = require('express')
const cors = require('cors')

const serverless = require('serverless-http');

const app = express();

app.use(cors());

const router = express.Router();

router.get('/hello', function (req, res) {
    res.send({
        message: 'Coucou laurent !'
    })
})

app.use(process.env.API_BASE_PATH, router);

module.exports.handler = serverless(app);