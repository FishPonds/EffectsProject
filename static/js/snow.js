'use strict';
var canvas = document.querySelector("#mycanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var particle = 1000;
var particleArrays = [];
initSnow();
var id = setInterval(draw, 1000 / 60);
function initSnow(){
    particleArrays = [];
    for(var i = 0; i < particle; i++){
        var obj = {
            radius : Math.floor(Math.random() * 3),
            x : Math.floor(Math.random() * window.innerWidth),
            y : Math.floor(Math.random() * window.innerHeight),
            speedX : Math.random() * 3,
            speedY : Math.random()
        }
        particleArrays.push(obj);
    }      
}
function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    update();
    ctx.fillStyle = "white";
    for(var i = 0; i < particleArrays.length; i++){
        ctx.beginPath();
        ctx.arc(particleArrays[i].x, particleArrays[i].y, particleArrays[i].radius, 0, Math.PI * 2, true);
        ctx.fill();
    }
}
function update(){
    for(var i = 0; i < particleArrays.length; i++){
        particleArrays[i].y += particleArrays[i].speedY * 2;
        particleArrays[i].x += Math.sin(Math.PI * particleArrays[i].speedX);
        if(particleArrays[i].x > window.innerWidth){
            particleArrays[i].x = 0;
        }else if(particleArrays[i].x < 0){
            particleArrays[i].x = window.innerWidth;
        }else if(particleArrays[i].y > window.innerHeight){
            particleArrays[i].y = 0;
        }
    }
}
window.onresize = function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initSnow();
    clearInterval(id);
    id = setInterval(draw, 1000 / 60);
};