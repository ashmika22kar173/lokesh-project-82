var mouseevent="empty";
var last_x_position ,last_y_position ;

canvas=document.getElementById("mycanvas");

ctx=canvas.getContext("2d");
color="red";
lokesh=1;

canvas.addEventListener("mousedown",mousedown);

function mousedown(e)
{
    mouseevent="mousedown";
}

canvas.addEventListener("mouseup",mouseup);

function mouseup(e)
{
    mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",mouseleave);

function mouseleave(e)
{
    mouseevent="mouseleave";
}

canvas.addEventListener("mousemove",mousemove);

function mousemove(e)
{
    mouseevent="mousemove";
current_mouse_x = e.clientX -canvas.offsetLeft;

current_mouse_y = e.clientY -canvas.offsetTop;

if(mouseevent =="mousedown") {
ctx.beginPath();
ctx.storkeStyle=color;
ctx.lineWidth=lokesh;

console.log("x =" + last_x_position + "y ="+ last_y_position);
ctx.moveTo(last_x_position, last_y_position);


console.log("x =" + current_mouse_x + "y ="+ current_mouse_y);
ctx.lineTo(current_mouse_x, current_mouse_y);
ctx.stroke();

}

last_x_position = current_mouse_x;
last_y_position = current_mouse_y;

}