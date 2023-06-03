let likeButton = document.getElementById("likeButton");
let likeIcon = document.getElementById("likeIcon");
let puppyImage = document.getElementById("puppyImage");
let isImage = false;

function onClickLikeButton() {
    if (isImage === false) {
        likeButton.style.backgroundColor = "#0967d2";
        likeButton.style.color = "white";
        likeIcon.style.color = "#0967d2";
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        isImage = true;
    } else {
        likeButton.style.backgroundColor = "#9aa5b1";
        likeButton.style.color = "#cbd2d9";
        likeIcon.style.color = "#9aa5b1";
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        isImage = false;
    }
}