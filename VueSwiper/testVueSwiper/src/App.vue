<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './style.css';
import { FreeMode, Pagination } from 'swiper/modules';
import { ref, watchEffect } from 'vue';

const swiperData = ref(["test1","test2","test3","test4",5,6,7,8,9,10]);
const logVal = (val) => {
 console.log(val);
}

// 定義一個計算屬性來動態設置 slidesPerView
const slidesPerView = ref(2); // 預設值

// 監視視窗寬度並更新 slidesPerView
watchEffect(() => {
 if (window.innerWidth <= 768) {
    slidesPerView.value = 2;
 } else {
    slidesPerView.value = 3;
 }
});

// 為了讓監視器在視窗大小變化時重新計算，我們需要綁定到 window 的 resize 事件
window.addEventListener('resize', () => {
 if (window.innerWidth <= 768) {
    slidesPerView.value = 2;
 } else {
    slidesPerView.value = 3;
 }
});
</script>

<template>
 <swiper
    :slidesPerView="slidesPerView"
    :spaceBetween="20"
    :freeMode="true"
    :modules="modules"
    class="mySwiper"
 >
    <swiper-slide v-for="list in swiperData" :key="list" @click="logVal(list)">
      {{ list }}
    </swiper-slide>
 </swiper>
</template>

<style scoped>
.mySwiper{
   border: 1px solid #F00;
   height: 500px;
}
.swiper-slide{
 cursor: pointer;
 border: 1px solid #999;
 display: flex;
 justify-content: center;
 align-items: center;
}
</style>