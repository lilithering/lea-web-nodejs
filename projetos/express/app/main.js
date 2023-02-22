// definição > conteúdos
function pageHelloWorld(req, res) {
    res.send('<h1>Hello World!</h1>');
};
function pageJsonSample(req, res) {
    res.json({ id: 1, data: "a" });
};

// construção > interface:express(npm)
const EXPRESS = require('express');

// construção > objeto:express
let express = EXPRESS();
express.get('/', pageHelloWorld);
express.get('/api/notes', pageJsonSample);

// inicialização > express
const PORT = 8080;
express.listen(PORT, () => {
    console.log(`Executando pela porta ${PORT}`);
})