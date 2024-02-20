
window.onload = () =>{

    const {createApp, ref, reactive, computed, watch, onMounted , onUpdated} = Vue
    const App = {
        setup(){
            const days = ref(31)

           
            const daysRender = computed(()=>{
                let result = []
                let firstDay = 0
                let d = days.value
                let d_count = 0
                let row = Math.floor((d + firstDay - 1) / 7 + 1) 
                for (let i = 0; i < row * 7; i++) {
                    if(i < firstDay || d_count === d){
                        result.push({idx:i,msg:''})
                    }
                    if(i >= firstDay && d_count !== d){
                        d_count++;
                        result.push({idx:i,msg:d_count})
                        
                    }
                }
                console.log(result);
                return result

            })
            return{
                daysRender
            }   
        },
    }
    createApp(App).mount("#app")  
    let test_y = dayjs().get('y')
    let test_M = 1
    let setTime = dayjs().set('M', test_M).set('y', test_y)
    console.log(setTime.format('YYYY-MM'));
    console.log('該日期是星期幾:',setTime.date(19).day());
    

}


