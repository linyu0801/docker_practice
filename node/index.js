const exress = require('express');

const app = exress();

app.get('/', (req, res) => {
    res.send('Hello World!');
}); 

app.listen(8080, () => console.log('Listening on port 8080'));