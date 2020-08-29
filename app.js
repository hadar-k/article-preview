function share(){
    var sharePopup = document.getElementById("share-popup");
    if (sharePopup.style.opacity == 0) {
        sharePopup.style.opacity = 1;
    } 
    else {
        sharePopup.style.opacity = 0;
    }
}