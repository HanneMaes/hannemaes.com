/* remove cables.gl iframe */
// console.log('remove bg before');
// document.getElementById("cables_gl").contentWindow.document.querySelector('footer').style.display = "none";
// console.log('remove bg after');

/* ***************** */
/* 3D card transform */
/* ***************** */

let constrain = 20;
let mouseOverContainer = document.getElementById("ex1"); // document.getElementsByTagName('body')[0]; 
let ex1Layer = document.getElementById("ex1-layer");

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer, position);
  });
};

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "perspective(1000px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}
