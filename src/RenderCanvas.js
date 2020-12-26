function fillCanvas(){
  var titleCanvas = document.getElementById("titleCanvas");
  titleCanvas.width = titleCanvas.offsetWidth;
  titleCanvas.height = titleCanvas.offsetHeight;
  var ctx = titleCanvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  console.log("hi");
}