let fs = require('fs')
let path = require('path')
let express = require('express')
let app = express()

let _path = dir => path.resolve(__dirname, dir)

let html = fs.readFileSync(_path('../dist/index.html'), 'utf-8')

app.use(express.static(_path('../dist')))

app.get('*', (req, res) => {
    console.log(req.url)
    console.log(html)
    res.send(html)
})

app.listen(3001, () => {
    console.log('runnig  3001')
})