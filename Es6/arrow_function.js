
function testArrow () {
	let a = 100;

	setTimeout( function () {
		console.log(a);
	},100);
	/*setTimeout( () => {
		console.log(a);
	},100);*/
}

testArrow();


console.log("Arrow Function");
  let a = 0;
  this.b = 1000;
  /*function test () {
      console.log('--->' + this.b); 
      
  }*/

  let test = () => {
    console.log(`First level ${this.b}`);
  	// If we do normal then this.b can not be accessed inside settimout
  	setTimeout( () => {
  		console.log(`Second level ${this.b}`);
  	},300)
  }

  test();