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
  this.Attrib =      ["02",   "03",   "34",   "56",   "78"];
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
      gfx.fillText (this.Attrib[c],this.originX+(c*(this.fontWidth+this.fontWidth+this.fontSpace)),this.originY);
      //gfx.fillText (this.Attrib[c],originX+(c*(this.fontWidth+this.fontWidth+this.fontSpace)),this.originY+32);
    }
  }
  this.DrawName = function () {
    fillStyle="green";
        

  }
  
  
  
}





function testing ()
{
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.font = "32px Zebri";
  let c=32;
  let originY= 100;
  let originX= 40;
  let fontWidth=ctx.measureText("0").width;
  let fontSpace=ctx.measureText(" ").width;
  let fontHeight=32;
  let curWidth=fontWidth;
  let curHeight=fontHeight-2;
  let curPosX=0;
  let curPosY=0;
  console.log (fontWidth);
  console.log (fontSpace);

//ctx = myCanvas.context;
//        ctx.fillStyle = color;
//        ctx.fillRect(this.x, this.y, this.width, this.height);


// function Part (name,gfx,originX,originY,curWidth,curHeight,fontWidth,fontSpace,fontHeight,fontUsed) 
  var item = new Part ("Gorget",ctx,originX,originY,curWidth,curHeight,fontWidth,fontSpace,fontHeight,"32px Zebri");
  let suit = [];
  //item.DrawAttrib();
  let partName = ["Cap","Gorget","Sleeves","Tunic","Gloves","Leggings","ring","brac","Apron","Shield"]
  //suit.push(new Part ("Gorget",ctx,originX,originY,curWidth,curHeight,fontWidth,fontSpace,fontHeight,"32px Zebri"));
  for (let c=0;c<partName.length;c++) 
  {
    suit.push (new Part (partName[c],ctx,originX,originY+(curHeight*c),curWidth,curHeight,fontWidth,fontSpace,fontHeight,"32px Zebri"));
  }

// draw Cursor
//  ctx.fillStyle = "red";
//  ctx.fillRect(originX, originY-curHeight+3, curWidth, curHeight);
DrawCursor (ctx,"red",originX, originY, curWidth, curHeight,1,0);


// Draw Suit
  for (let c=0;c<suit.length;c++) {
    suit[c].DrawAttrib();
}



//let Array = [ "01","23","45","67","89" ];

// draw cursor ting.
  
}




function DrawCursor (gfx,color,originX,originY,curWidth,curHeight,curPosX,curPosY) {
  //console.log (curPosX);
  let drawX = 0;
  let darwY =0;
  let curSpace=10;
  let spaceX=0;
  let spaceY=0;
  curPosX=9;
  curPosY=3;
  spaceX = Math.trunc (curPosX/2)*(curWidth+curWidth+curSpace);
  console.log (spaceX);
  console.log ("bums");
  if ((curPosX&1)==0) { //even
    drawX=originX+spaceX;  
  }else { // even
    drawX=originX+spaceX+curWidth;
  }
  drawY = (originY+(curPosY*curHeight)-curHeight+3);

  gfx.fillStyle="red";
  gfx.fillRect(drawX, drawY, curWidth, curHeight);
}

//let fontWidth=ctx.measureText("0").height;

/*
console.log (ctx.measureText("0").width);
console.log (ctx.measureText("1").width);
console.log (ctx.measureText("2").width);
console.log (ctx.measureText("3").width);
console.log (ctx.measureText("4").width);
console.log (ctx.measureText("5").width);
console.log (ctx.measureText("6").width);
console.log (ctx.measureText("7").width);
console.log (ctx.measureText("8").width);
console.log (ctx.measureText("9").width);
*/


/*ctx.fillText("01 23 45 67 00",x,y);
ctx.fillText("11 22 45 67 11",x,y+=c);
ctx.fillText("22 33 45 67 22",x,y+=c);

ctx.fillText("1",x,y+c);
ctx.fillText("2",x+fontWidth,y+c)
ctx.fillText("3",x+(fontWidth*2)+fontSpace,y+c);
*/

/*ctx.fillText("33 44 45 67 33",x,y+=c);
ctx.fillText("44 55 45 67 44",x,y+=c);
ctx.fillText("55 66 45 67 55",x,y+=c);
ctx.fillText("66 77 45 67 66",x,y+=c);
ctx.fillText("77 88 45 67 78",x,y+=c);
ctx.fillText("88 99 45 67 99",x,y+=c);
*/
//}