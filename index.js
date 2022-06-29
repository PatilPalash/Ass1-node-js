const http = require("http");
const server = http.createServer(function(require,response){
    
response.write("This is my First Server")
    
response.write("<h1> This is my First Server</h1>")
    
response.write(JSON.stringify({Name:"This is my First Server",Age:25}))
    
response.end();
})
server.listen(4000)
