function share(){
    var sharePopup = document.getElementById("share-popup");
    var shareButton = document.getElementById("share-button");
    var shareIcon = document.getElementById("share-icon");

    if (sharePopup.style.opacity == 0) {
        sharePopup.style.opacity = 1;
        shareButton.style.background = "rgb(109, 127, 151)"; //$DesaturatedDarkBlue
        shareIcon.classList.add("share-icon-active");
        shareIcon.classList.remove("share-icon-idle");
    } 
    else{
        sharePopup.style.opacity = 0;
        shareButton.style.background = "rgb(236, 242, 248)"; //$LightGrayishBlue
        shareIcon.classList.add("share-icon-idle");
        shareIcon.classList.remove("share-icon-active");
    }

    /*
        shareIcon.style.background = "url(/images/icon-share-active.svg)";
        shareIcon.style.background = "url(/images/icon-share.svg)";
    }
    */
}