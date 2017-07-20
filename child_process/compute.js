
const longComputation = (count) => {
	console.log('I am entering in long computation');
	let sum = 0;
	for (let i=0; i < count; i++) {
		sum += i;
	};
	return sum;
}

process.on('message', (msg) => {
	console.log('I am entering in long computation AAA'+msg);
	console.log(process.memoryUsage());
	let count = 1e9;
	console.log(`This process is pid ${process.pid}`);
	const sum = longComputation(msg);
	process.send(sum);
});