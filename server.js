require('dotenv').config()

const express = require('express')
const cors = require('cors')
const axios = require('axios')
const bodyParser = require('body-parser')

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

const app = express()

app.use(cors())
app.use(bodyParser.json())

// ACCESS TOKEN
app.get('/getAccessToken', async function (req, res) {
  const code = req.query.code
  const params = `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`

  await axios
    .post(
      `https://github.com/login/oauth/access_token${params}`,
      {},
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => console.log('Error getting access token:', error))
})

// USER INFO
app.get('/getUserData', async function (req, res) {
  const token = req.get('Authorization')
  await axios
    .get('https://api.github.com/user', {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => console.log('Error getting user data:', error))
})

// USER REPOS
app.get('/getUserRepos', async function (req, res) {
  const page = req.query.page || 1
  const token = req.get('Authorization')
  await axios
    .get('https://api.github.com/user/repos?page=' + page, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      // res.json(response.data)
      res.json(response.data)
    })
    .catch((error) => console.log('Error getting user repos:', error))
})

// REPO SEARCH
app.get('/searchRepos', async function (req, res) {
  const { page = 1, q } = req.query
  const token = req.get('Authorization')
  await axios
    .get(`https://api.github.com/search/repositories?q=${q}&page=${page}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => console.log('Error getting user repos:', error))
})

// REPO COMMITS
app.get('/getCommits', async function (req, res) {
  const { owner, repo, branch = '', page = 1 } = req.query

  const token = req.get('Authorization')
  await axios
    .get(
      `https://api.github.com/repos/${owner}/${repo}/commits?page=${page}&sha=${branch}`,
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then((response) => {
      // res.json(response.data)
      res.json([])
    })
    .catch((error) => console.log('Error getting commits:', error))
})

// REPO BRANCHES
app.get('/getBranches', async function (req, res) {
  const { owner, repo, page = 1 } = req.query

  const token = req.get('Authorization')
  await axios
    .get(`https://api.github.com/repos/${owner}/${repo}/branches`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => console.log('Error getting branches:', error))
})

app.listen(process.env.PORT, () => {
  console.log('Proxy server running on port:', process.env.PORT)
})
