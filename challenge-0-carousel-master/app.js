let carouselImage = 0;

function eggs() {
    if (carouselImage < 3) {
        carouselImage += 1
    } else {
        carouselImage = 0;
    }
    document.getElementById('image').style = `background-image: url(./images/hero-image-${carouselImage}.jpg)`
}
function callCarousel (){
    setInterval(() => eggs(), 2000)
}