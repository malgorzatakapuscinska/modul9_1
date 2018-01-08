var
	variable1,
	variable2,
	variable3;



function getTriangleArea(a, h) {
	
	if (a<=0 || h<=0){
		
		return "nieprawidłowe dane";
	}
	else {
		return a*h/2;
	}
	
}

variable1 = getTriangleArea(16,5);

console.log("Wartość zmiennej variable1 wynosi: " + variable1);

variable2 = getTriangleArea(10,19);

console.log("Wartość zmiennej variable2 wynosi: " + variable2);

variable3 = getTriangleArea(50,0);

console.log("Wartość zmiennej variable3 wynosi: " + variable3);