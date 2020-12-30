function bgc(xx){
	
	var na0=document.getElementById("navbar0")
	na0.style.backgroundColor="white"
	document.getElementById("img").src="img/logo-2.png"
	document.getElementById("page-one").style.display="none"
	document.getElementById("page-two").style.display="none"
	document.getElementById("page-three").style.display="none"
	document.getElementById("page-four").style.display="none"
	document.getElementById("page-five").style.display="none"
	document.getElementById("page-"+xx).style.display="block"
	
	
}

function changeStyleOne(){
	
	var na0=document.getElementById("navbar0")
	na0.style.backgroundColor="#4852E8"
	document.getElementById("img").src="img/logo-1.png"
	document.getElementById("page-one").style.display="block"
	document.getElementById("page-two").style.display="none"
	document.getElementById("page-three").style.display="none"
	document.getElementById("page-four").style.display="none"
	document.getElementById("page-five").style.display="none"
}


