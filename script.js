function mouseOver(element){
    element.play();
    element.muted = false;
}

function mouseOut(element){
    element.pause();
    element.muted = true;
}