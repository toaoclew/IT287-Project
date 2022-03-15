// Get img from ID
image = document.getElementById("textbookImg"); //Textbook image from homepage

function onClick(){
	//Create function to enlarge the image when clicked
	image.style.transform = "scale(1.5)"; //Scales image 1.5x
	image.style.transition = "transform 0.25s ease"; //Sets a transition when clicked
}