// By: Megan Respicio
// Date: December 2017
// Github: github.com/mrespicio

function checkNum(i){
	if(i<10) i = "0"+i;
	return i;
}
function displayDate() { 
	var day =  new Date();
	var y = day.getFullYear().toString().substr(-2);
	var m = day.getMonth() + 1;
	var d = day.getDate();
	y = checkNum(y);
	m = checkNum(m);
	d = checkNum(d);
	var dateFormat = m + "|" + d + "|" + y
	t = setTimeout(displayDate, 500);
	document.getElementById("dateOutput").value = dateFormat; 
} 
displayDate();
