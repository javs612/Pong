const Paddle = function (player,color){

	const c = color
	const w = 30
	const h = 200
	const p = player
	//si es verdadero se hace lo que esta despues del signo? y si no lo que esta despues del :
	const x = p === 1 ? Math.round(w/2): width-Math.round(w/2)
	const speed = 8
	let y = Math.floor(height/2)
	let score = 0

	const draw = function(){
		rectMode(CENTER)
		noStroke()
		fill(c)
		rect(x,y,w,h)

	}

	const move = function(dir){

		y +=(speed*dir)

	} 

	return{

		draw,
		move,
	}


}