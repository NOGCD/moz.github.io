var myButton = document.querySelector('button');
var myP = document.querySelector('p');
function setUserName(){
	var myName = prompt("Please enter your name.");
	localStorage.setItem('name', myName);
	myP.textContent = 'THIS IS AE86, ' + myName;
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myP.textContent = 'THIS IS AE86, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}

var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/ae86.jpg') {
		myImage.setAttribute('src','images/ae862.jpg');
	} else {
		myImage.setAttribute('src','images/ae86.jpg');
	}
}

