// JavaScript Document

var square=new Object();
square.length=parseInt("5");
square.cal_area=function() {
	var area=(parseInt(square.length)*parseInt("4"));
	return area;
}
alert("Area: "+square.cal_area());