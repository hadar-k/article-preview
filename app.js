function share(){
    var sharePopup = document.getElementById("share-popup");
    var shareButton = document.getElementById("share-button");
    var shareIcon = document.getElementById("share-icon");

    if (sharePopup.classList.contains("hide")) {
        //sharePopup.style.opacity = 1;
        sharePopup.classList.add("show");
        sharePopup.classList.remove("hide");
        shareButton.style.background = "rgb(109, 127, 151)"; //$DesaturatedDarkBlue
        shareIcon.classList.add("share-icon-active");
        shareIcon.classList.remove("share-icon-idle");
    } 
    else{
        //sharePopup.style.opacity = 0;
        sharePopup.classList.add("hide");
        sharePopup.classList.remove("show");
        shareButton.style.background = "rgb(236, 242, 248)"; //$LightGrayishBlue
        shareIcon.classList.add("share-icon-idle");
        shareIcon.classList.remove("share-icon-active");
    }
}

function main(){
    
    window.addEventListener("DOMContentLoaded", function() {
        var sharePopup = document.getElementById("share-popup");
        var shareButton = document.getElementById("share-button");
        var shareIcon = document.getElementById("share-icon");

        //Hide share popup when clicking anywhere outside of popup:
        document.onclick = function(e){
            if (sharePopup.classList.contains("show")){
                if (e.target != shareIcon && e.target != shareButton && e.target != sharePopup &&
                    !(e.target.classList.contains("share-title") || e.target.classList.contains("facebook")
                        || e.target.classList.contains("twitter")
                        || e.target.classList.contains("pinterest"))){
                    //sharePopup.style.opacity == "0";
                    sharePopup.classList.add("hide");
                    sharePopup.classList.remove("show");
                    shareButton.style.background = "rgb(236, 242, 248)"; //$LightGrayishBlue
                    shareIcon.classList.add("share-icon-idle");
                    shareIcon.classList.remove("share-icon-active");
                }
            }
        }
    }, false);
}

main();

  

  