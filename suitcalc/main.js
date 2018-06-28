//
// Main .js for suit calc
// (C) Martin Østergaard.
// This code is not yet implimentated, you need to make a canava
// 
// Part class partical done
// Cursor movements visual is done, need to be converted to a class.
//
var canvas = null;
var ctx = null;
var curPosX=0;
var curPosY=0;
var originY= 100;
var originX= 200;
var fontWidth=null; // ctx.measureText("0").width;
var fontSpace=null; // ctx.measureText(" ").width;
var fontHeight=32;
var curWidth=0; //fontWidth;
var curHeight=0; //fontHeight-2;
var suit = [];
var minXCurPos=0;
var maxXCurPos=0;
var minYCurPos=0;
var maxYCurPos=0;




function init () {

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.font = "bold 32px Zebri";
ctx.fillStyle="black";
fontWidth=ctx.measureText("0").width;
fontSpace=ctx.measureText(" ").width;
curWidth=fontWidth;
curHeight=fontHeight-2;  
// suit = [];
let partName = ["CAP","GORGET","SLEEVES","TUNIC","GLOVES","LEGGINGS","RING","BRACLET","APRON","SHIELD"]

// init armor parts.
for (let c=0;c<partName.length;c++) 
{
    suit.push (new Part (partName[c],originY+(c*fontHeight)));
}



//Window.ctx.fillRect(drawX, drawY, Window.curWidth, Window.curHeight);
//ctx.fillRect(200, 100, 20, 20);
DrawAll();

document.getElementById('myCanvas').addEventListener('keypress', MoveCursor);
    // function handleKeyPress(e) { ... }

}




function DrawAll () 
{
  
  


ctx.clearRect(0, 0, canvas.width, canvas.height);


  DrawCursor (); //window.ctx,"darkred",window.originX+1, window.originY+1, window.curWidth, window.curHeight,window.curPosX,window.curPosY);
//this.DrawSuit();

  for (let c=0;c<suit.length;c++) {
    suit[c].DrawAttrib();
    suit[c].DrawName();
  }
}

function DrawCursor () {
  let drawX = 0;
  let drawY =0;
  let curSpace=11;
  let spaceX=0;
//  curPosX=1;
//  curPosY=0;
  //var canvas = document.getElementById("myCanvas");
  //var ctx = canvas.getContext("2d");
   

  spaceX = Math.trunc (window.curPosX/2)*(window.curWidth+window.curWidth+curSpace);
  if ((window.curPosX&1)==0) { //even
    drawX=window.originX+spaceX;  
  }else { // odd
    drawX=window.originX+spaceX+window.curWidth;
  }
  drawY = (window.originY+(window.curPosY*window.curHeight)-window.curHeight);
  drawY+=(curPosY*2)+4;

  
  window.ctx.fillStyle="black";
  
  window.ctx.fillRect(drawX, drawY, window.curWidth, window.curHeight);
  
  //  window.ctx.fillRect(120, 100, 20, 20);
  

}

function Part (name,y) 
{
  this.name=name;
  
  this.Attrib =      ["00",   "00",   "00",   "00",   "00"];
  this.AttribColors= ["grey","orange","lightblue","green","purple"];
  //this.xCoord = x;
  this.yCoord = y;  

  this.DrawAttrib = function ()
  {
    ctx.fillStyle = "black";
    ctx.font = "bold 32px Zebri";
    for (let c=0;c<this.Attrib.length;c++) 
    {
      ctx.fillStyle=this.AttribColors[c];  
      ctx.fillText (this.Attrib[c],originX+(c*(fontWidth+fontWidth+fontSpace)),this.yCoord);
      
    
    }
  }
  this.DrawName = function () {
    ctx.font = "32px Zebri bold";
    ctx.fillStyle="black";
    ctx.fillText(name,originX-200,this.yCoord);

  }

}


function MoveCursor (e) {
    let code = e.keyCode;
    
    switch (code) {
        case 37: curPosX--; break; //Left key
        case 38: curPosY--; break; //Up key
        case 39: curPosX++; break; //Right key
        case 40: curPosY++; break; //Down key
        default: alert("Not implimented yet kid !!"); //Everything else
    }
    
  

  DrawAll();
  
}



