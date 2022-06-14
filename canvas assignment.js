// JavaScript Document
window.onload=function()
{
	var canvas=document.getElementById("myCanvas")
	var ctext=canvas.getContext("2d")
	ctext.beginPath();
	ctext.rect(18, 50, 200, 100);
	ctext.fillStyle="Blue";
	ctext.fill();
	ctext.lineWidth=5;
	ctext.strokeStyle="black"
	ctext.stroke();
	
	function init(){
	canvas=document.getElementById("myCanvas");
	context=canvas.getContext("2d");
	canvas2=document.getElementById("myCanvas2");
	context2=canvas2.getContext("2d")
}
function clear()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
}
};