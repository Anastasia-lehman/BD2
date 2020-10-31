//node http позволяет создать и запустить сервер ( создать серверную часть)
//для построения используются фреймворки, которые позволяют улучшить структуру кода
//

const http = require('http')
//req(request) - то, что отправляет пользователь
//res() -
const server = http.createServer((req,res) =>
{
    console.log(req.headers)
    res.writeHead(200, {
        'Content-Type': 'text/plain'  })
    res.end('hello')
})
server.listen(8080)
