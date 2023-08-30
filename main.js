const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const countSpan = document.getElementById("count");

let count = 0;

decrementButton.addEventListener("click", () => {
    count--;
    updateCountDisplay( );
} );

incrementButton.addEventListener("click", () => {
    count++;
    updateCountDisplay( );
});

function updateCountDisplay() {
    countSpan.textContent = count;
}

//   доп
let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 260;
    if (offset > 770) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 260;
    if (offset < 0) {
        offset = 770;
    }
    sliderLine.style.left = -offset + 'px';
});
