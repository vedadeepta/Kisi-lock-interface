const express = require('express')
const path = require('path')
const app = express()
app.set('port', (process.env.PORT || 8080))

app.use(express.static(path.join(__dirname, '../../dist')))

app.get('*', (req, res) => {

  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

app.listen(app.get('port'), () => console.log('Listening on port 8080!'))
