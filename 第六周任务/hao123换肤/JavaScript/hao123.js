function changeSkin(skin) {
	localStorage.setItem("pfColor", skin);
	document.getElementById('tpURL').style.backgroundColor = skin;
	document.getElementById('news').style.backgroundColor = skin;
	document.getElementById('wzURL').style.backgroundColor = skin;
}
function getPfColor(){
	var pfColor = localStorage.getItem("pfColor");
	if(pfColor!=null){
		changeSkin(pfColor);
	}	
}