/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
//startButton.img.src="images/mrt.jpg"
startButton.width=200;
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/background.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			//Retro/classic game music.wav by ZHRØ -- https://freesound.org/s/668879/ -- License: Attribution 4.0
			sounds.play('backMusic',0,true)
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graffic
		startButton.img.src = "images/ButtonHover.png";
		//startButton.color = `yellow`
	}
	else
	{
		//Default Button Graphic
		startButton.img.src = "images/ButtonNormal.png";
		//startButton.color = `red`
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage();
	//startButton.render()
}
	
	
