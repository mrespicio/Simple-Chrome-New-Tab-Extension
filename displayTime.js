function checkNum(i){
	if(i<10) i = "0"+i;
	return i;
}
function displayTime() { 
	var time = new Date();
	var h = time.getHours() % 12 || 12;
	var m = time.getMinutes();
	var s = time.getSeconds();
	h = checkNum(h);
	m = checkNum(m);
	s = checkNum(s);
	var timeFormat = h + ":" + m + ":" + s;
	document.getElementById("timeOutput").value = timeFormat;
	t = setTimeout(displayTime, 500);
} 
displayTime();