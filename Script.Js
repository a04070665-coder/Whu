const API_KEY = "XyLdR6aXVWDgZSkE4AKjEKm2";

async function removeBG(){

let file = document.getElementById("imageInput").files[0];

if(!file){
alert("Please select image");
return;
}

let formData = new FormData();
formData.append("image_file", file);
formData.append("size", "auto");

let response = await fetch("https://api.remove.bg/v1.0/removebg",{

method:"POST",

headers:{
"X-Api-Key":API_KEY
},

body:formData

});

if(!response.ok){

alert("Background remove failed");

return;

}

let blob = await response.blob();

let img = new Image();

img.onload = function(){

let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.drawImage(img,50,20,200,300);

}

img.src = URL.createObjectURL(blob);

}

function downloadPhoto(){

let canvas = document.getElementById("canvas");

let link = document.createElement("a");

link.download = "passport-photo.png";

link.href = canvas.toDataURL();

link.click();

}
