var btnPromotion = document.getElementById("btnPromotion");
var btnCancel =document.getElementById("btnCancel")
btnPromotion.addEventListener('click',function () {
    document.getElementById("volume").style.display="block";
}, false);
btnCancel.addEventListener('click',function () {
    document.getElementById("volume").style.display="none"
}, false);