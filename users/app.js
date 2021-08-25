const express = require('express');

const app = express();

app.get('/user', (req, res) => {
    res.json({username: 'mikejohn', firstname: 'Mike', lastname: 'Armstrong'});
})

app.listen(3010, () => console.log('server started'));