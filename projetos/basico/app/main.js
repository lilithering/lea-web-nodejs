// definição > conteúdo básico página/protocolo
function basic(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Conteudo da Pagina');
};

// construção > interface:http
const http = require('node:http');

// construção > objeto:servidor
const server = http.createServer(basic);

// inicialização > servidor
const PORT = 8080;
server.listen(PORT);
console.log(`Servidor executando pela porta ${PORT}`);