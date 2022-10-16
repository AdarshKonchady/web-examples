import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('Client connected');
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Access-Control-Allow-Origin', '*');

    const intervalId = setInterval(() => {
        const date = new Date().toLocaleDateString();
        res.write(`data: ${date}\n\n`);
    }, 1000);

    res.on('close', () => {
        console.log('Client closed connection');
        clearInterval(intervalId);
        res.end();
    })
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log
})