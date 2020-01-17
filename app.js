const imgSlider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = images[0].clientWidth;

imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextBtn.addEventListener('click',()=>{
    if (counter >= images.length -1) return;
    imgSlider.style.transition = "transform 1s ease-in-out"
    counter++;
    imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click',()=>{
    if (counter <=0) return;
    imgSlider.style.transition = "transform 1s ease-in-out"
    counter--;
    imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

imgSlider.addEventListener('transitionend', () => {
   if (images[counter].id === 'lastClone') {
       imgSlider.style.transition = "none";
       counter = images.length - 2;
       imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
   }
   if (images[counter].id === 'firstClone') {
        imgSlider.style.transition = "none";
        counter = images.length - counter - 1;
        imgSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});




