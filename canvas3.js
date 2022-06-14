// JavaScript Document
window.onload=function() 
{
	var canvas=document.getElementById("myCanvas");
	var ctext=canvas.getContext("2d");
	var x=canvas.width/2;
	var y=canvas.height/2;
	var radius=75;
	var startAngle=1.1 * Math.PI;
	var endAngle=1.9 * Math.PI;
	var ctrClockwise=false;
	ctext.beginPath();
	ctext.arc(x, y, radius, startAngle, endAngle, ctrClockwise);
	ctext.lineWidth=25;
	ctext.strokeStyle="darkgreen";
	ctext.stroke();
};