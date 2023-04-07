import { rps, rpsls } from "./lib/rpsls";
//importing modules
import minimist from 'minimist'
import express from 'express'
//Takes an arbitrary port number as a command line argument, default is 5000
var argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

//Check endpoint at /app/ that returns 200 OK
app.get('/app', (req, res) => {
    res.status(200).send('200 OK').end();
});

//Endpoint that return {"player: (rock|paper|scissors)"}
app.get('/app/rps', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.play))).end();
})

//Endpoint that return {"player":"(rock|paper|scissors|lizard|spock)"}
app.get('/app/rpsls', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.play))).end();
})

app.get('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.query.play))).end();
})

app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.query.play))).end();
})

app.post('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.play))).end();
})

app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.play))).end();
})

app.get('/app/rps/play/:play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.params.play))).end();
})

app.get('/app/rpsls/play/:play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.params.play))).end();
})

//Default API endpoint that returns 404 NOT FOUND
app.all('*', (req, res) => {
    res.status(404).send('404 NOT FOUND').end();
})

app.listen(port);