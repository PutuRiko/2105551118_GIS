const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello !')
})

app.get('/mapmarker', (req, res) => {
    res.sendFile('./map_and_marker.html', {root: __dirname});
  });

app.get('/moremarker', (req, res) => {
    res.sendFile('./more_marker.html', {root: __dirname});
  });

app.get('/markercluster', (req, res) => {
    res.sendFile('./marker_cluster.html', {root: __dirname});
  });

app.get('/polyline', (req, res) => {
    res.sendFile('./polyline.html', {root: __dirname});
  });

app.get('/routing', (req, res) => {
    res.sendFile('./routing.html', {root: __dirname});
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
