
/*      1
     1 1
    1 1 1
   1 1 1 1
  1 1 1 1 1
 1 1 1 1 1 1*/
 
 let startPosition = (10/2);
 for (let i=0; i<startPosition + 1; i++) {
 	for(let j=1; j<=startPosition; j++) {
 		if (j == startPosition) {
 			let display = display + "1";
 		} else {
 			let display = display + " ";	
 		}
 	}
 	startPosition = startPosition -1; 	
 }

  
