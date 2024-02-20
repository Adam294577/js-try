
window.onload = () =>{

    const {createApp, ref, reactive, computed, watch, onMounted , onUpdated} = Vue
    const App = {

        setup(){

            // 使用 ref 创建响应式的变量
            const dataArr = reactive({data:[]});

            // const testRender = computed(()=>{
            //     let data = dataArr.data
            //     return data
            // })
            const startAsyncOperation = ()=>{
                console.log(5207);
                fetchData()
               
            }

            async function fetchData() {
                try {
                  // 使用 axios 发起异步请求
                  const response = await axios.get('./api/taiwanAddress.json');
                  // 处理响应数据
                  dataArr.data = response.data.data
                  console.log(dataArr.data);
                } catch (error) {
                  console.error('Error fetching data:');
                }
                console.log('Render完畢');
              }



            return{
                // testRender,
                dataArr,
                startAsyncOperation

            }   
        },

    }
    createApp(App).mount("#app")     

}


