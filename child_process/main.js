const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
  	console.log(`This process is pid ${process.pid}`);
   	console.log(process.memoryUsage());
    const compute = fork('compute.js');
    let totalLoop = 1e9;
    compute.send(totalLoop);
    
    compute.on('message', sum => {
      res.end(`Sum is ${sum}`);
    });
  }/* else {
    res.end('Ok')
  }*/


  else if (req.url === '/compute1') {
  	console.log(`This process is pid ${process.pid}`);
   	res.end(`This process is pid ${process.pid}`);
  }   else {
    res.end('Ok')
  }

});

server.listen(3000);