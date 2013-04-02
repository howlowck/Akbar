
var mainStyle = "max-width:100px; margin: 0; padding: 5px; background-color: #abc; position: fixed; top: 0; z-index: 50000;";
var orig = document.body.style.cssText;

function filter(text) {
	var output = "-webkit-filter:"+text+";";
	output+="-moz-filter:"+text+";";
	output+="-ms-filter:"+text+";";
	output+="filter:"+text+";";
	return output;
}

function transform(text) {
	var output = "-webkit-transform:"+ text + ";";
    output += "-moz-transform:"+ text + ";";
    output += "-o-transform:"+ text + ";";
    output += "transform:"+ text + ";";
    return output;
}

function lowvis() {
	reset();
	document.body.style.cssText += filter('blur(3px)');
}

function colorblind(){
	reset();
	//document.querySelector("#akbar-filter").style.cssText = filter('grayscale(100%)');
	document.documentElement.style.cssText += filter('grayscale(100%)');// + "background-color:"+toGray(window.getComputedStyle(document.body).backgroundColor)+";";
}

function blind(){
	reset();
	document.querySelector("#akbar-filter").style.cssText = "left:0; top:0;position:fixed; width:100%; height:100%; z-index: 45000; background-color:black";
}

function nomouse(){
	reset();
	document.querySelector("#akbar-filter").style.cssText= "left:0; top:0;position:fixed; width:100%; height:100%; z-index: 45000; ";
}
function reset(){
	document.documentElement.style.cssText = "";
	document.body.style.cssText = orig;
	document.querySelector("#akbar-filter").style.cssText = "";
}


var buttons = "<button onclick='lowvis();'>Low Vision</button>";
buttons+= "<button onclick='colorblind();'>Color Blind</button>";
buttons+= "<button onclick='blind();'>Blind</button>";
buttons+= "<button onclick='nomouse();'>Keyboard Only</button>";
buttons+= "<button onclick='reset();'>Reset</button>";


document.body.innerHTML += "<div id='akbar' role='presentation' style='"+mainStyle+"'><p><strong>Akbar</strong></p>"+buttons+"</div><div role='presentation' id='akbar-filter'></div>";
