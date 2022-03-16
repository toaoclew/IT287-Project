let navbar = document.getElementById("navItems");
let item = navbar.getElementsByTagName("li");

for(let i = 0; i < item.length; i++){
	item[i].addEventListener("mouseenter", function(event){
	//Adds background color
	event.target.style.backgroundColor = "black";	
	})
	item[i].addEventListener("mouseout", function(){
	//Removes background color
	item[i].removeAttribute("style");
	})
}
