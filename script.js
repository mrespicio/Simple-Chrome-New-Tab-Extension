
function displayDateMD() {
	var day =  new Date();
	var yr = day.getFullYear().toString().substr(-2);
	var mn = day.getMonth() + 1;
	var dy = day.getDate();
	yr = checkNum(yr);
	mn = checkNum(mn);
	dy = checkNum(dy);
	var dateFormat = mn + " " + dy + " " + yr;
	t = setTimeout(displayDateMD, 500);
	return dateFormat;
	//document.getElementById("dateOutput").innerHTML = dateFormat; 
	//document.write(dateFormat)
}

function displayDateDM() { 
	var day =  new Date();
	var y = day.getFullYear().toString().substr(-2);
	var m = day.getMonth() + 1;
	var d = day.getDate();
	y = checkNum(y);
	m = checkNum(m);
	d = checkNum(d);
	var dateFormat = d + "|" + m + "|" + y;
	t = setTimeout(displayDateDM, 500);
	return dateFormat;
	//document.getElementById("dateOutput").value = dateFormat; 

} 
function displayTime12(){
	var time = new Date();
	var hr = time.getHours() % 12 || 12;
	var mi = time.getMinutes();
	var sc = time.getSeconds();
	hr = checkNum(hr);
	mi = checkNum(mi);
	sc = checkNum(sc);
	var timeFormat = hr + ":" + mi + ":" + sc;
	t = setTimeout(displayTime12, 500);
	return timeFormat;
	//document.getElementById("timeOutput").innerHTML = timeFormat;
}

function displayTime24() { 
	var time = new Date();
	var h = time.getHours();
	var m = time.getMinutes();
	var s = time.getSeconds();
	h = checkNum(h);
	m = checkNum(m);
	s = checkNum(s);
	var timeFormat = h + ":" + m + ":" + s;

	//return timeFormat;
	document.getElementById("timeOutput").value = timeFormat;
	t = setTimeout(displayTime24, 500);
} 

function checkNum(i){
	if(i<10) i = "0"+i;
	return i;
}