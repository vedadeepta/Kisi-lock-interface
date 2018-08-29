const express = require('express')

const app = express()
app.set('port', (process.env.PORT || 8080))

app.use(express.static(__dirname + '/dist'))

app.get('*', (req, res) => {
  res.sendStatus(200)
})

app.listen(app.get('port'), () => console.log('Listening on port 8080!'))
