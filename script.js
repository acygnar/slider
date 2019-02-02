
const slideImg= document.querySelector('.image');
const nextImg= document.querySelector('.arrow-right');
const previousImg= document.querySelector('.arrow-left');
const imageSource= ['img/img1.JPG','img/img2.JPG','img/img3.JPG'];
let i=0;
function nextSlide(){
    i++;
    if(i==imageSource.length){
        i=0;
    }
slideImg.src=imageSource[i];
}
function previousSlide(){
    i--;
    if(i<0){
        i=imageSource.length-1;
    }
    slideImg.src=imageSource[i];
}
setInterval(nextSlide,5000);
previousImg.addEventListener("click",previousSlide);
nextImg.addEventListener("click",nextSlide);


