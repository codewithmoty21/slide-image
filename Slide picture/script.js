const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");
const imgsEl = document.querySelectorAll("img");


const imageContainerEl = document.querySelector(".image-container");
let currentImg = 1;
let Timeout;

nextEl.addEventListener("click",()=>{
currentImg++;
clearTimeout(Timeout);
updateImg();
});
 prevEl.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(Timeout);
    updateImg();
 });
updateImg()

function updateImg(){
    if(currentImg > imgsEl.length){
        currentImg = 1;
    }
    else if (currentImg < 1){
     currentImg = imgsEl.length;
    } 

    
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  Timeout = setTimeout(()=>{
    currentImg++
    updateImg
   }, 3000) 

}