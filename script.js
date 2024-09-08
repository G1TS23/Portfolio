

function setSwitchDarkModeIcon(root, icon){

	if (getComputedStyle(root).getPropertyValue("--bg-color") === "black"){
    // Dark
		icon.classList.add('fa-moon');
  	} else {
    // Light
		icon.classList.add('fa-sun');
	}
}

function switchDarkMode(){
	const root = document.querySelector('*');
	
	const icon = document.querySelector('#switch');

	if (getComputedStyle(root).getPropertyValue("--bg-color") === "black"){
    // Dark
	    root.style.setProperty('--bg-color', 'white');
		root.style.setProperty('--txt-color', 'black');
		icon.classList.remove('fa-moon');
		icon.classList.add('fa-sun');
  	} else {
    // Light
	    root.style.setProperty('--bg-color', 'black');
		root.style.setProperty('--txt-color', 'white');
		icon.classList.remove('fa-sun');
		icon.classList.add('fa-moon');
  	}
}

window.addEventListener('load', function() {
    console.log("page chargée");
    setSwitchDarkModeIcon(document.querySelector('*'), document.querySelector('#switch'));
});
