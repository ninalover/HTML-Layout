//
// Main .js for suit calc
// (C) Martin Østergaard.
// This code is not yet implimentated, you need to make a canava
// 
// Part class partical done
// Cursor movements visual is done, need to be converted to a class.
//


function Part (name,gfx,originX,originY,curWidth,curHeight,fontWidth,fontSpace,fontHeight,fontUsed) 
{
  this.name=name;
  this.gfx=gfx;
  this.Attrib =      ["00",   "00",   "00",   "00",   "00"];
  this.AttribColors= ["grey","orange","lightblue","green","purple"];
  this.originX=originX;
  this.originY=originY;
  this.curWidth=curWidth;
  this.curHeight=curHeight;
  this.fontWidth=fontWidth;
  this.fontSpace=fontSpace;
  this.fontHeight=fontHeight;
  this.fontUsed=fontUsed;
  this.DrawAttrib = function ()
  {
    this.gfx.fillStyle = "black";
    for (let c=0;c<this.Attrib.length;c++) {
      gfx.fillStyle=this.AttribColors[c];  
      gfx.fillText (this.Attrib[c],this.originX+(c*(this.fontWidth+this.fontWidth+this.fontSpace)),this.originY);
    }
  }
  this.DrawName = function () {
    //fillStyle="green";
        

  }
  
  
  
}





function testing ()
{
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.font = "32px Zebri";
  let c=32;
  let originY= 100;
  let originX= 200;
  let fontWidth=ctx.measureText("0").width;
  let fontSpace=ctx.measureText(" ").width;
  let fontHeight=32;
  let curWidth=fontWidth;
  let curHeight=fontHeight-2;
  let curPosX=0;
  let curPosY=0;



  var item = new Part ("Gorget",ctx,originX,originY,curWidth,curHeight,fontWidth,fontSpace,fontHeight,"32px Zebri");
  let suit = [];
  let partName = ["Cap","Gorget","Sleeves","Tunic","Gloves","Leggings","ring","brac","Apron","Shield"]
  for (let c=0;c<partName.length;c++) 
  {
    suit.push (new Part (partName[c],ctx,originX,originY+(curHeight*c),curWidth,curHeight,fontWidth,fontSpace,fontHeight,"32px Zebri"));
  }

  DrawCursor (ctx,"blue",originX, originY, curWidth, curHeight,2,1);


  // Draw Suit
  for (let c=0;c<suit.length;c++) {
    suit[c].DrawAttrib();
  }
}


function DrawCursor (gfx,color,originX,originY,curWidth,curHeight,curPosX,curPosY) {
  //console.log (curPosX);
  let drawX = 0;
  let darwY =0;
  let curSpace=10;
  let spaceX=0;
  let spaceY=0;
  //curPosX=9;
  //curPosY=3;
  spaceX = Math.trunc (curPosX/2)*(curWidth+curWidth+curSpace);
  console.log (spaceX);
  console.log ("bums");
  if ((curPosX&1)==0) { //even
    drawX=originX+spaceX;  
  }else { // even
    drawX=originX+spaceX+curWidth;
  }
  drawY = (originY+(curPosY*curHeight)-curHeight+3);

  gfx.fillStyle=color;
  gfx.fillRect(drawX, drawY, curWidth, curHeight);
}

