// JavaScript Document
window.onload=function()
{
	var canvas=document.getElementById('myCanvas')
	var ctext=canvas.getContext('2d')
	ctext.beginPath();
	ctext.rect(18, 50, 200, 100);
	ctext.fillStyle="orange";
	ctext.fill();
	ctext.lineWidth=5;
	ctext.strokeStyle="black";
	ctext.stroke();
};
function erase()
{
	var canvas=document.getElementById("myCanvas");
	var ctext=canvas.getContext('2d');
	ctext.clearRect(18, 50, 200, 100);
}