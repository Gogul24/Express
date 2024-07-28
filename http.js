var http = require('http');
http.createServer(function(req,res)
{
    res.write('Server is working')
    res.end()
}).listen(8000)

console.log('Server is running at the port-number :8000');