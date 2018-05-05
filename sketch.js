//Suhail's First p5 Project

var myWidth = 600, myHeight = 400;


function setup() {
	//createCanvas(windowWidth, windowHeight);
	//createCanvas(myWidth, myHeight);
	noCanvas();
	const tensorElements = [];
	for(let i=0;i<32;i++)
		 tensorElements[i] = floor(random(10,99));

	const a = tf.tensor4d(tensorElements, [2,2,2,4] , 'int32');
	console.log(a.print());

	for(let i=0;i<32;i++)
		 tensorElements[i] = floor(random(10,99));

	const b = tf.tensor4d(tensorElements, [2,2,2,4] , 'int32');
 	console.log(b.print());

	const c = a.add(b);
	console.log(c.print());
}
//
// function draw() {
//
// }
