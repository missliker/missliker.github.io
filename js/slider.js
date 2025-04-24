var slideIndex = 1;//用于跟踪幻灯片编号
showSlides(slideIndex);//在页面加载时调用showSlides函数，显示初始的幻灯片。

function plusSlides(n) {//用于在幻灯片之间切换
    showSlides(slideIndex += n);
}

function currentSlide(n) {//用于直接跳转到特定的幻灯片
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {//实现循环播放
        slideIndex = 1
    }
    if (n < 1) {//实现循环播放
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {//移除所有指示点的激活状态
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}