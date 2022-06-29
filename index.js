const http = require("http");
const server = http.createServer(function(require,response){
    response.write("<h1>this i nodes js class</h1>")
response.end();
})
server.listen(4000)
