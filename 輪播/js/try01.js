window.onload = ()=>{

  


  const NextBtn = document.getElementById('next');
  const PrevBtn = document.getElementById('prev');

  const swiperEl = document.getElementById('swipercontainer1');
  NextBtn.addEventListener('click', () => {
    swiperEl.swiper.slideNext();
  });    
  PrevBtn.addEventListener('click', () => {
    swiperEl.swiper.slidePrev();
  });    

  const swiperParams = {
    virtual: {
      // virtual slides
      slides: ['Slide 1', 'Slide 2', 'Slide 3'],
    },
  };

  // assign all parameters to Swiper element
  Object.assign(swiperEl, swiperParams);

  // and now initialize it
  swiperEl.initialize();

}