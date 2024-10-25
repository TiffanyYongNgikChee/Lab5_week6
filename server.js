const express = require('express');
const app = express();
const port = 3000;

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});

app.get('/whatever',(req,res)=>{
    res.send('whatever');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});