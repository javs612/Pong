

const Ball = function (){
	
	const r=20
	let x= Math.floor(width/2)
	let y= Math.floor(height/2)

	let stepX=5
	let stepY=20

	//en caso de que sobre pase en la coordenada x la pelota se vuelve a poner en el centro
	const reset = function(){
	
	 x= Math.floor(width/2)
	 y= Math.floor(height/2)
	 //para generar un movimiento nuevo o diferente  
	 stepX*= Math.round(Math.random())*2-1
	 stepY*= Math.round(Math.random())*2-1

	}

//funcion para que la pelota se resete a su origen o inicio
	const edges = function(){

	if(x-r<=0|| x+r>=width){
		reset()

	} 
//si la pelota esta hasta arriba en y o a bajo en y que cambie su sentido con el if
	if(y-r<=0|| y+r>=height){
		stepY=-stepY

	}

	}
//funcion movimientos de la pelota
	const move = function(){

		x+=stepX
		y+=stepY
		edges()
	}

	const draw = function(){

		ellipseMode(CENTER)
		fill('white')
		ellipse(x,y,r*2,r*2)

	}

	return {

		draw,
		move,
		
	}


}