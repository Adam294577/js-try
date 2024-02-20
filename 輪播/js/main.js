
window.onload = () =>{

    const {createApp, ref, reactive, computed, watch, onMounted , onUpdated} = Vue
    const App = {

        setup(){
            const swiperItemWidth = ref(350)
            const swiperRunning = ref(false)
            const swiperData = reactive({data:[
                {status:"prev",   idx:0, url:"./img/c1.png", msg:"happy"},
                {status:"active", idx:1, url:"./img/c2.png", msg:"angry"},
                {status:"next",   idx:2, url:"./img/c3.png", msg:"sleep"},
                {status:"",       idx:3, url:"./img/c3.png", msg:"sleep-1"},
                {status:"",       idx:4, url:"./img/c3.png", msg:"sleep-2"},
            ]})
            const swiperItem = ref([])

            const handnSwiperNavBtn = (el)=>{
                let key = el.currentTarget.dataset.swiper
                // console.log(key);
                let arr = swiperItem.value
                let NextItem = arr.filter(item=>{
                    if(item.classList.contains("next")){
                        return item
                    }
                })
                let ActItem = arr.filter(item=>{
                    if(item.classList.contains("active")){
                        return item
                    }
                })                
                if(key === 'next'){

                    // console.log(NextItem[0]);
                    NextItem[0].style['transform'] = `translateX(-100%)`
                    ActItem[0].style['transform'] = `translateX(-100%)`

                    let newArr = []
                    let prevIdx = 0
                    let Idx = swiperItem.value.length - 1
                    newArr = swiperData.data.map(item=>{
                        item.status = ""
                        if(item.idx === 1){
                            item.status = 'prev'
                        }
                        if(item.idx === 2){
                            item.status = 'active'
                        }
                        if(item.idx === 3){
                            item.status = 'next'
                        }
                       
                        return item
                    })
                   console.log('點選next之後的DOM',swiperItem.value);
                   console.log('點選next之後的DOM長度',swiperItem.value.length);
                }

            }
            const swiperRender = computed(()=>{
                swiperItem.value = []
                let arr = swiperData.data
                console.log(arr);
                return arr
            })

          

            onMounted(()=>{
                // console.log(swiperItem.value[3]);
            })

            return{
                swiperItemWidth,
                swiperRender,
                handnSwiperNavBtn,

                swiperItem,

            }   
        },

    }
    createApp(App).mount("#app")     

}


