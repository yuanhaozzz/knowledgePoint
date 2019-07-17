import express from 'express';
import { render } from './utils';

const app = express();
let fs = require('fs')
let html = fs.readFileSync('dist/client/index.html', 'utf-8')

app.use(express.static('dist'))

//注意这里要换成*来匹配
app.get('*', function (req, res) {
    console.log(req.path)
    res.send(html.replace('<!-- react-ssr -->', render(req)));
});

app.listen(3001, () => {
    console.log('listen:3001')
});