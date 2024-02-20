
window.onload = () =>{

    const {createApp, ref, reactive, computed, watch, onMounted , onUpdated} = Vue
    const App = {

        setup(){
            const awardBox = reactive({data:[
                // {name:'咬一口',  ratio:1, url:"" },
                // {name:'林檎',    ratio:1, url:"" },
                // {name:'名月',    ratio:1, url:"" },
                // {name:'紅榮',    ratio:1, url:"" },
            ]})
            const awardRender = computed(()=>{
                let count = 0
                let pos  = 0
                let anglePos = []
                let angleVal = []
                let arr = []
                // console.log(awardBox.data[DataResouseIs.value]);
                if(awardBox.data[DataResouseIs.value] === undefined){
                    arr = []
                }else{
                    arr = awardBox.data[DataResouseIs.value]
                }
                arr.forEach(item=>{
                    count += item.ratio
                })
                let singleRatio = 360 / count
                arr.forEach(item=>{
                    let angle = 0
                    angle = item.ratio * singleRatio
                    angleVal.push(angle)
                    anglePos.push(pos)
                    pos += angle
                })
                // console.log('角度起點',anglePos);
                // console.log('角度區域',angleVal);
                let idx = 0
                let result = arr.map(item=>{
                    item.val = angleVal[idx]
                    item.pos = anglePos[idx]
                    idx++
                    return item
                })
                console.log(result);
    
                return result
            })
            const awardIs = ref('')
            const PlayingBool = ref(false)
            const nowAngle = ref(0)
            const totalAngle = ref(0)
            const stopPos = ref(0)
            const DataResouseIs = ref('case01')
            const CaseBox = reactive({data:[
                {msg:'case01'},
                {msg:'case02'},
                {msg:'case03'},
            ]})
            const handCase = (el)=>{
                if(PlayingBool.value) return
                let key = el.currentTarget.dataset.key
                DataResouseIs.value = key
            }
            
            const pointerRotate = () =>{
                let timer = null
                PlayingBool.value = true
                awardIs.value = ''
                if(nowAngle.value < totalAngle.value){
                    timer = setTimeout(pointerRotate, 3)
                                
                    if(totalAngle.value - nowAngle.value > 360 * 8){
                        nowAngle.value += 3
                    }
                    else if(totalAngle.value - nowAngle.value > 360 * 7){
                        nowAngle.value += 5
                    }
                    else if(totalAngle.value - nowAngle.value > 360 * 6){
                        nowAngle.value += 30
                    }
                    else if(totalAngle.value - nowAngle.value > 360 * 4){
                        nowAngle.value += 20
                    }
                    else if(totalAngle.value - nowAngle.value > 360 * 3){
                        nowAngle.value += 15
                    }
                    else if(totalAngle.value - nowAngle.value > 360 * 2){
                        nowAngle.value += 10
                    }
                    else if(totalAngle.value - nowAngle.value > 360){
                        nowAngle.value += 5
                    }
                    else if(totalAngle.value - nowAngle.value > 180){
                        nowAngle.value += 3
                    }
                    else if(totalAngle.value - nowAngle.value > 90){
                        nowAngle.value += 2
                    }
                    else if(totalAngle.value - nowAngle.value > 30){
                        nowAngle.value += 1
                    }
                    else{
                        nowAngle.value += 0.25
                    }
                    // console.log('總共要轉的度數',totalAngle.value);  
                    // console.log('已旋轉的度數',nowAngle.value);
                }else{
                    nowAngle.value = stopPos.value
                    clearTimeout(timer)
                    let idx = -1
                    awardRender.value.forEach(item=>{
                        if(item.pos < stopPos.value){
                            idx++;
                        }
                    })
                    awardIs.value = awardRender.value[idx].key
                    PlayingBool.value = false

                    // console.log('最後停下的位置',nowAngle.value);
                }           
            }

            const PlayingFn = ()=>{
                console.log('狀態',PlayingBool.value);
                if(PlayingBool.value) return
                let rotateAngle =  ~~(Math.random() * 360 ) + 360 * 8
                totalAngle.value = rotateAngle
                stopPos.value = rotateAngle % 360
                pointerRotate(totalAngle.value, stopPos.value)
                // console.log('總共旋轉的度數為:',totalAngle.value);
                // console.log('旋轉後的餘角',stopPos.value);
                // console.log('抽到的獎品是',awardRender.value[idx].name);
            }
            onMounted(()=>{
                
                async function getAwardData() {
                    let res = await axios.get('./api/awardData.json')
                    awardBox.data = res.data
                }
                getAwardData()

            })
            return{
                awardRender,
                PlayingFn,
                nowAngle,
                awardIs,
                CaseBox,
                handCase,
            }   
        },

    }
    
    
    createApp(App).mount("#app")     

}


