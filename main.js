function executeThisCodeAfterFileLoaded(){
	console.log("it worked!!")
}

function executeThisCodeAfterFileFails(){
	console.log("it failed!!")
}


var myRequest = new XMLHttpRequest();
//have line above for each request; var must be different name each time

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();
console.log("myRequest", myRequest);