var cost = [
    1000,
    1500,
    2000,
    2500
];

var names = [
    "More 4x4s",
    "4 Colors",
    "2x Time",
    "2x Cash"
];

var boughtPows = [0,0,0,0];

var imageURL = [
	"image/4by4.png",
	"image/4colors.ong",
	"image/doubleTime.png",
	"image/doulbeCash.png"
];


function getBoughtInfo(){
	if( store.get("PowerUps") == undefined ){
		store.set("PowerUps", boughtPows );
	} else {
		boughtPows = store.get("PowerUps");
	}
}

function printPows(){
	for(var i = 0; i<4; i++){
		
	}
}

window.onload = function(){
    getBoughtInfo();
    printPows();
}