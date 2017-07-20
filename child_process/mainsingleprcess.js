const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
  	console.log(`This process is pid ${process.pid}`);
   	
    let totalLoop = 1e9;
    let sum = 0;
	for (let i=0; i < totalLoop; i++) {
		sum += i;
	};
    res.end(`Sum is ${sum}`);
    
    
  }/* else {
    res.end('Ok')
  }*/


  else if (req.url === '/compute1') {
  	//console.log(`This process is pid ${process.pid}`);
   	res.end(`This process is pid ${process.pid}`);
  }   else {
    res.end('Ok')
  }

});

server.listen(3000);

