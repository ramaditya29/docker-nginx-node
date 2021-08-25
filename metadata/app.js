const express = require('express');

const app = express();

app.get('/metadata', (req, res) => {
    res.json({cols: ['id', 'name', 'agedocker']});
})

app.listen(3020 , () => console.log('server started'));