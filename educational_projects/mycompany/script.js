menu.onclick = function myFunction() {
	var a = document.getElementById('myTopnav');

	if (a.className === "topnav") {
		a.className += " responsive";
	} else {
		a.className = "topnav";
	}
}