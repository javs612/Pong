
let ball
let p1
let p2

function setup() 
{
  createCanvas(windowWidth-10, windowHeight-25);
  p1 = new Paddle(1,color('white'))
  p2 = new Paddle(2,color('white'))
  ball = new Ball()
}

function draw(){
	background("#0A0909")
	drawLine()
	ball.draw()
	ball.move()
	p1.draw()
	p2.draw()

	if(keyPressed){

		if(keyIsDown(87))
			p1.move(-1)
		else if(keyIsDown(83))
			p1.move(1)
		else if(keyIsDown(UP_ARROW))
			p2.move(-1)
		else if(keyIsDown(DOWN_ARROW))
			p2.move(1)


	}

	
}

 function keyPressed(){
		
		switch(keyCode){

			case 87:

			p1.move(-1)

			break

			case 83:

			p1.move(1)

			break

			case UP_ARROW:

			p2.move(-1)

			break

			case DOWN_ARROW:

			p2.move(1)

			break

		}

	} 



const drawLine=function(){


	stroke('white')
	strokeWeight(4)
	line(width/2,0,width/2,height)
}



