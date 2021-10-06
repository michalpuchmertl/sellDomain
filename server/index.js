const http = require('http')
const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const needle = require('needle')
const config = require('dotenv').config()
const TOKEN = process.env.TWITTER_BEARER_TOKEN
const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static('client/build'))



const rulesURL = 'https://api.twitter.com/2/tweets/search/stream/rules'
const streamURL = 'https://api.twitter.com/2/tweets/search/stream?expansions=author_id'

 
const rules = [{ value: 'pandorapapers lang:en' }]

// Get stream rules
async function getRules() {
    const response = await needle('get', rulesURL, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })

    return response.body
}

async function setRules() {

    const data = {
        add: rules
    }

    const response = await needle('post', rulesURL, data, {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        }
    })

    return response.body
}

async function deleteRules(rules) {

    if(!Array.isArray(rules.data)) {
        return null
    }

    const ids = rules.data.map(rule => rule.id)

    const data = {
        delete: {
            ids: ids
        }
    }

    const response = await needle('post', rulesURL, data, {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        }
    })
    return response.body
}

function streamTweets(socket) {
    const stream = needle.get(streamURL, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
    stream.on('data', (data) => {
        try {
            const json = JSON.parse(data)
            console.log(json.includes.users[0])
            socket.emit('tweet', json)
        } catch (error) {}
    })
}

io.on('connection', async () => {
    console.log('Client connected...')

    let currentRules

    try {
        currentRules = await getRules()
        await deleteRules(currentRules)
        await setRules()
    } catch (error) {
        console.error(error)
    }

    streamTweets(io)
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}...`))