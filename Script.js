//Basic Calculator

function Basic_Calculator_Open(){
	document.getElementById("Basic_Calculator_M").style.display = "block";
}
function Basic_Calculator_Close(){
	document.getElementById("Basic_Calculator_M").style.display = "none";
}

var Op = 0;

function Calculate_Basic_Op(Oe){
	Op = Oe;
	if(Op == 1){
		document.getElementById("A").style.background = "#0000FF";
		document.getElementById("A").style.color = "#D5FFAB";
		document.getElementById("B").style.background = "transparent";
		document.getElementById("B").style.color = "#008026";
		document.getElementById("C").style.background = "transparent";
		document.getElementById("C").style.color = "#008026";
		document.getElementById("D").style.background = "transparent";
		document.getElementById("D").style.color = "#008026";
	}else if(Op == 2){
		document.getElementById("B").style.background = "#0000FF";
		document.getElementById("B").style.color = "#D5FFAB";
		document.getElementById("A").style.background = "transparent";
		document.getElementById("A").style.color = "#008026";
		document.getElementById("C").style.background = "transparent";
		document.getElementById("C").style.color = "#008026";
		document.getElementById("D").style.background = "transparent";
		document.getElementById("D").style.color = "#008026";
	}else if(Op == 3){
		document.getElementById("C").style.background = "#0000FF";
		document.getElementById("C").style.color = "#D5FFAB";
		document.getElementById("B").style.background = "transparent";
		document.getElementById("B").style.color = "#008026";
		document.getElementById("A").style.background = "transparent";
		document.getElementById("A").style.color = "#008026";
		document.getElementById("D").style.background = "transparent";
		document.getElementById("D").style.color = "#008026";
	}else if(Op == 4){
		document.getElementById("D").style.background = "#0000FF";
		document.getElementById("D").style.color = "#D5FFAB";
		document.getElementById("B").style.background = "transparent";
		document.getElementById("B").style.color = "#008026";
		document.getElementById("C").style.background = "transparent";
		document.getElementById("C").style.color = "#008026";
		document.getElementById("A").style.background = "transparent";
		document.getElementById("A").style.color = "#008026";
	}
}

function Calculate_Basic(){
	var InputA = document.getElementById("Basic_InputA");
	var InputB = document.getElementById("Basic_InputB");
	var Output = document.getElementById("Basic_Output");
		
	if(Op == 1){
		Output.innerHTML =Number(InputA.value) + Number(InputB.value);
	}else if(Op == 2){
		Output.innerHTML =Number(InputA.value) - Number(InputB.value);
	}else if(Op == 3){
		Output.innerHTML =Number(InputA.value) * Number(InputB.value);
	}else if(Op == 4){
		Output.innerHTML =Number(InputA.value) / Number(InputB.value);
	}
}

function Clear_Basic(){
	document.getElementById("Basic_InputA").value = "";
	document.getElementById("Basic_InputB").value = "";
	document.getElementById("Basic_Output").innerHTML = "OUTPUT";
	document.getElementById("A").style.background = "transparent";
	document.getElementById("A").style.color = "#008026";
	document.getElementById("B").style.background = "transparent";
	document.getElementById("B").style.color = "#008026";
	document.getElementById("C").style.background = "transparent";
	document.getElementById("C").style.color = "#008026";
	document.getElementById("D").style.background = "transparent";
	document.getElementById("D").style.color = "#008026";
}


//Area Calculator

function Area_Calculator_Open(){
	document.getElementById("Area_Calculator_M").style.display = "block";
}
function Area_Calculator_Close(){
	document.getElementById("Area_Calculator_M").style.display = "none";
}

function Area_Calculate(){
	var InputA = document.getElementById("AreaC_InputA");
	var InputB = document.getElementById("AreaC_InputB");
	var InputC = document.getElementById("AreaC_InputC");
	var InputD = document.getElementById("AreaC_InputD");
	var OutputA = document.getElementById("AreaC_OutputA");
	var OutputB = document.getElementById("AreaC_OutputB");
	
	var x = Number(InputA.value) + Number(InputC.value);
	var y = Number(InputB.value) + Number(InputD.value);
	
	var Zx = x/2;
	var Zy = y/2;
	
	var z = Zx * Zy;
	
	var TotalA = z;
	var TotalB = z/27225;
	
	TotalA = TotalA.toString();
	TotalA = TotalA.substr(0, 12);
	TotalA = Number(TotalA);
	
	TotalB = TotalB.toString();
	TotalB = TotalB.substr(0, 8);
	TotalB = Number(TotalB);
	
	OutputA.innerHTML = TotalA.toFixed() + " feet";
	OutputB.innerHTML = TotalB.toFixed(2) + " Biga";
}

function Area_Clear(){
	var InputA = document.getElementById("AreaC_InputA").value = "";
	var InputB = document.getElementById("AreaC_InputB").value = "";
	var InputC = document.getElementById("AreaC_InputC").value = "";
	var InputD = document.getElementById("AreaC_InputD").value = "";
	var OutputA = document.getElementById("AreaC_OutputA").innerHTML = "Output in feet";
	var OutputB = document.getElementById("AreaC_OutputB").innerHTML = "Output in Biga";
}



















function About(What){
	var About = document.getElementById("About");
	
	if(What == 1){
		About.style.display = "block";
	}else if(What == 2){
		About.style.display = "none";
	}
}








