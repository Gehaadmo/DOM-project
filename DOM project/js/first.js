var imgs = Array.from(document.querySelectorAll(".item img"));
var boxContainer = document.querySelector(".lightbox-container");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var close = document.getElementById("close");
var imgIndex = 0;

for(var i=0 ; i<imgs.length ; i++)
{
    imgs[i].addEventListener("click", showBox)
}

function showBox(e)
{
    boxContainer.style.transform="scale(1,1)";
    var imgSrc = e.target.src;
    imgIndex = imgs.indexOf(e.target);
    //console.log(imgIndex);
    boxContainer.firstElementChild.style.backgroundImage = "url("+imgSrc+")";
}
function closeImg()
{
    boxContainer.style.transform = "scale(0,0)";
}
function nextImg(e)
{ 
    imgIndex ++;
    if(imgIndex == imgs.length)
    {
        imgIndex=0;
    }
    boxContainer.firstElementChild.style.backgroundImage = "url(" + imgs[imgIndex].src + ")";
}
function prevImg(e) {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = imgs.length-1;
    }
    boxContainer.firstElementChild.style.backgroundImage = "url(" + imgs[imgIndex].src + ")";
}

document.addEventListener("keydown" , function(e)
    {
        if(e.keyCode == 39)
        {
            nextImg();
        }
        else if (e.keyCode == 37) {
            prevImg();
        }
        else if (e.keyCode == 27) {
            closeImg();
        }

    }
)

next.addEventListener("click", nextImg);
prev.addEventListener("click" , prevImg);
close.addEventListener("click" , closeImg);
