
window.onload = () =>{

    const {createApp, ref, reactive, computed, watch, onMounted , onUpdated} = Vue
    const App = {
        setup(){
            const BoxDelay = reactive({data:[
                {act: true, idx:0, time : '0.25s'},
                {act: true, idx:1, time : '0.5s'},
                {act: true, idx:2, time : '0.75s'},
                {act: true, idx:3, time : '1s'},
            ]})
            console.log(BoxDelay.data);
            setTimeout(()=>{
                BoxDelay.data.forEach(item=>{
                    item.act = false
                })
                console.log(BoxDelay.data);
            },3000)
            const rubberBand_Delay = ref('2s')

            const BoxDelayBtnStatus = computed(()=>{
                let data = BoxDelay.data
                console.log(data);
                return data
            })

            const handBoxDelayBtn = (el=null, idx) =>{
                console.log(idx);
                BoxDelay.data.forEach(item=>{
                    if(!item.act && item.idx === idx){
                        item.act = true
                        setTimeout(()=>{
                            item.act = false
                        },1000)
                    }
                })
            }
            // test
            const disabled = ref(false)

            function warnDisabled() {
              disabled.value = true
              setTimeout(() => {
                disabled.value = false
              }, 1500)
            }


            
            return{ 
                disabled,
                warnDisabled,                
                BoxDelay,
                rubberBand_Delay,
                handBoxDelayBtn,
                BoxDelayBtnStatus,
            }   
        },
    }
    createApp(App).mount("#app")  
}


