const imgs = ["imgs/kice3.jpg", "imgs/kice4.jpg", "imgs/kice5.jpg"];
let i = 0, scale = 1;

function toggleZoom() {
  scale = (scale === 1) ? 1.5 : 1;
  main.style.transform = "scale(" + scale + ")";
}
function show(){ 
    main.src = imgs[i]; 
}
function next() {
    i = (i + 1) % imgs.length; show(); 
}
function prev() { 
    i = (i - 1 + imgs.length) % imgs.length; show(); 
}
function zoomIn() { 
    scale += 0.2; main.style.transform = "scale(" + scale + ")"; 
}
function zoomOut() { 
    scale = Math.max(0.5, scale - 0.2); main.style.transform = "scale(" + scale + ")"; 
}