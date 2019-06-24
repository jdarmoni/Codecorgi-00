
function eggs(){
    let number = 0;
    
    if (number < 3 ){
        number+=1
    } else {
        number = 0;
    }
    document.getElementById('image').style=`background-image: url(./images/hero-image-${number}.jpg)`
}
setInterval('eggs()', 1000)