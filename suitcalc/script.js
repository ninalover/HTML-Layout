/*
   (C)-2018 Martin Østergaard / martin.ms404@gmail.com
   Released under the MIT License.
    
   Nothing here is ready, have patience my dear padowan !!

*/


function makeGrid() {
    let voresArray = [ "Head","Neck","Tunic","Arms","Leggings","Gloves","Gorget" ];
    let bms = document.getElementById ("voresGrid");
    let gridTxt="";
    gridTxt="<Table class=\"bums\">";

    for (let i=0;i<voresArray.length;i++) {
        gridTxt+="<tr><td id=\"unselectable\">" + voresArray[i] + "</td>" + "<td id=\"physical\">00</td>" + "<td id=\"fire\">00</td>" +"<td id=\"cold\">00</td>" +"<td id=\"poison\">00</td>" +"<td id=\"energy\">00</td>" +"</tr>"
    }
    gridTxt+="</table>"
    bms.innerHTML+=gridTxt;

}
function selected () {
    var oink = document.getElementById("selectID").value;
    
    document.getElementById("headTxt").innerHTML = oink;
}

function hejsaClicked ()
{
    document.getElementById("headTxt").innerHTML ="Oink";
    document.getElementById("demo").innerHTML = "Hello World";
}
