
window.onload = () =>{

    const {createApp, ref, reactive, computed, watch, onMounted , onUpdated} = Vue
    const App = {

        
        setup(){
            const acticleNavEl = ref(null)
            const acticleNavPosY = ref(0)
            const fixedBool = ref(false)

            onMounted(()=>{
                acticleNavPosY.value = acticleNavEl.value.offsetTop

                console.log('nav高度',acticleNavPosY.value);



                let lastScrollTop = 0;

                

                // 监听滚轮事件
                window.addEventListener('scroll', function(event) {
                    event.preventDefault();
                    var scrollY = window.scrollY 
                    if( scrollY < acticleNavPosY.value){
                        fixedBool.value = false
                    }else{
                        fixedBool.value = true
                    }
                    // console.log('滚轮位移: ' + scrollY);

                    


                    


                  // 获取当前滚动位置
                  let currentScrollTop = window.scrollY;
                  console.log(currentScrollTop);
                
                  // 计算滚动的距离
                  let scrollDelta = currentScrollTop - lastScrollTop;
                  if (scrollDelta > 0) {
                    // 向下滚动
                    console.log('向下滚动');
                    return
                    // 在这里执行你的逻辑
                  } 
                  else if (scrollDelta < 0){
                    // 向上滚动
                    console.log('向上滚动');
                    return
                    // 在这里执行你的逻辑
                  }
                  

                });                

                

            })
            

            return{
                acticleNavEl,
                fixedBool,
                acticleNavPosY,
            }   
        },

    }
    createApp(App).mount("#app")     
  
}


