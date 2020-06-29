'use strict';
// banner计数器变量，用来清除鼠标点击事件
var timer;
// banner超时时间
var timeout = 3000;
// banner轮播计数器
var index = 0;
// banner上次计数器

// 获取banner背景图片
var bannerImg = document.getElementsByClassName('banner-img');
// 获取prev,next按钮
var prevBtn = document.getElementsByClassName('slide-btn-prev');
var nextBtn = document.getElementsByClassName('slide-btn-next');
// 获取指示点对象
var indicator = document.getElementsByClassName('slide-indicator-box');

function indicatorChange(index) {
  for (let i = 0; i <= indicator.length - 1; i++) {
    if (i != index) {
      indicator[i].classList.remove('slide-box-active');
      //   indicator[i].style.border = '#b0b0b0 2px solid';
      //   indicator[i].style.background = '#6f6d6d';
    } else {
      indicator[i].classList.add('slide-box-active');
      //   indicator[i].style.border = 'rgba(0,0,0,.4)';
      //   indicator[i].style.background = 'rgba(255,255,255,.4)';
    }
  }
}

function bannerSlide() {
  timer = setInterval(
    function () {
      // 调试信息
      console.log('---- banner img: ' + index);
      // 方法1：控制图片切换
      bannerImg[0].setAttribute('src', 'assets/static/banner' + index + '.jpg');
      // 控制indicator显示效果
      indicatorChange(index);
      index++;

      if (index % 5 == 0) {
        index = 0;
      }
    },

    timeout
  );
}

bannerSlide();

// 鼠标点击slide-btn-prev
prevBtn[0].addEventListener('click', function () {
  if (index - 1 < 0) {
    index = 4 - index;
  } else {
    index = index - 1;
  }

  console.log('|== prevBtn: ' + index);
  clearInterval(timer);
  bannerImg[0].setAttribute('src', 'assets/static/banner' + index + '.jpg');
  bannerSlide();
});

// 鼠标点击slide-btn-next
nextBtn[0].addEventListener('click', function () {
  if (index + 1 > 4) {
    index = 0;
  } else {
    index = index + 1;
  }

  console.log('|== nextBtn: ' + index);
  clearInterval(timer);
  bannerImg[0].setAttribute('src', 'assets/static/banner' + index + '.jpg');
  bannerSlide();
});

// 指示盒子点击事件
// indicator[index].addEventListener("click", indicatorChange(i));
