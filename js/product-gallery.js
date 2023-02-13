const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;
slideImage(imgBtns[0].id);
console.log(imgBtns[0].id);
imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        // console.log(imgId);
        slideImage(imgId);
    });
});

function slideImage(imgId){
    // const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    // document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;

    const imgs = document.querySelectorAll('.painting--info--main-images img');
    // console.log(imgs);
    console.log(imgId);
    imgs.forEach(element => {
        if(element.dataset.id === imgId) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

// window.addEventListener('resize', slideImage);