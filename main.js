var mouseEvent="empty";
var last_position_of_x, last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mouse_down);

function my_mouse_down(e){
    mouseEvent="mousedown";
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
}

canvas.addEventListener("mouseup",my_mouse_up);

function my_mouse_up(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouse_leave);

function my_mouse_leave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mouse_move);

function my_mouse_move(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;

if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("last_position_of_x" + last_position_of_x);
    console.log("last_position_of_y" + last_position_of_y);

    ctx.moveTo(last_position_of_x , last_position_of_y);

    console.log("current_position_of_mouse_x" + current_position_of_mouse_x);
    console.log("current_position_of_mouse_y" + current_position_of_mouse_y);

    ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
    ctx.stroke();
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;
}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}