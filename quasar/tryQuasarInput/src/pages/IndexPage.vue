<template>
  <q-page class="">
    <div class="inputBox">
      <div class="inputItem">
        <span class="writeNoWrap">測試標題</span>
        <q-input class="" borderless  v-model="email"></q-input>
        <span class="writeNoWrap">個</span>
      </div>
      <div class="inputItem">
        <span class="writeNoWrap">測試選單</span>
        <q-select borderless v-model="model" :options="options" label="" />
        <span class="selectIcon">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 0.75C6.23516 0.75 0.75 6.23516 0.75 13C0.75 19.7648 6.23516 25.25 13 25.25C19.7648 25.25 25.25 19.7648 25.25 13C25.25 6.23516 19.7648 0.75 13 0.75ZM13 23.1719C7.38359 23.1719 2.82812 18.6164 2.82812 13C2.82812 7.38359 7.38359 2.82812 13 2.82812C18.6164 2.82812 23.1719 7.38359 23.1719 13C23.1719 18.6164 18.6164 23.1719 13 23.1719Z" fill="#40A9FF"/>
          <path d="M17.8672 10.0742H16.5848C16.3059 10.0742 16.0407 10.2082 15.8766 10.4352L13 14.4109L10.1235 10.4352C9.9594 10.2082 9.6969 10.0742 9.41526 10.0742H8.13284C7.9551 10.0742 7.85119 10.2766 7.9551 10.4215L12.8223 17.148C12.9098 17.2684 13.0875 17.2684 13.175 17.148L18.0422 10.4215C18.1489 10.2766 18.045 10.0742 17.8672 10.0742Z" fill="#40A9FF"/>
          </svg>
        </span>
      </div>
      <div class="inputItem">
        <span class="writeNoWrap">測試date</span>
        <q-input
          @click="OpenDate('timeout')"
         class="" borderless  v-model="formattedString2">
         <template v-slot:append>
          <span class="">
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5625 2.03125H16.9688V0.28125C16.9688 0.160937 16.8703 0.0625 16.75 0.0625H15.2188C15.0984 0.0625 15 0.160937 15 0.28125V2.03125H8V0.28125C8 0.160937 7.90156 0.0625 7.78125 0.0625H6.25C6.12969 0.0625 6.03125 0.160937 6.03125 0.28125V2.03125H1.4375C0.953516 2.03125 0.5625 2.42227 0.5625 2.90625V21.0625C0.5625 21.5465 0.953516 21.9375 1.4375 21.9375H21.5625C22.0465 21.9375 22.4375 21.5465 22.4375 21.0625V2.90625C22.4375 2.42227 22.0465 2.03125 21.5625 2.03125ZM20.4688 19.9688H2.53125V9.57812H20.4688V19.9688ZM20.4688 7.71875H2.53125V4H6.03125V5.3125C6.03125 5.43281 6.12969 5.53125 6.25 5.53125H7.78125C7.90156 5.53125 8 5.43281 8 5.3125V4H15V5.3125C15 5.43281 15.0984 5.53125 15.2188 5.53125H16.75C16.8703 5.53125 16.9688 5.43281 16.9688 5.3125V4H20.4688V7.71875Z" fill="#40A9FF"/>
        </svg>
        </span>
         </template>
        </q-input>
        <q-date
        v-show="DateBool"
        class="dateFn"
        v-model="selectDate"
        minimal
      />

      </div>
      <div class="inputItem">
        <span class="writeNoWrap">測試Date2</span>
        <q-input borderless v-model="formattedString3" mask="date" :rules="['date']">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="formattedString3">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
      <template v-slot:append>
        <div class="testappend">
          <q-icon name="" class="qicon cursor-pointer">
            <span class="selectIcon" style="top: 0; left: -5px;">
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5625 2.03125H16.9688V0.28125C16.9688 0.160937 16.8703 0.0625 16.75 0.0625H15.2188C15.0984 0.0625 15 0.160937 15 0.28125V2.03125H8V0.28125C8 0.160937 7.90156 0.0625 7.78125 0.0625H6.25C6.12969 0.0625 6.03125 0.160937 6.03125 0.28125V2.03125H1.4375C0.953516 2.03125 0.5625 2.42227 0.5625 2.90625V21.0625C0.5625 21.5465 0.953516 21.9375 1.4375 21.9375H21.5625C22.0465 21.9375 22.4375 21.5465 22.4375 21.0625V2.90625C22.4375 2.42227 22.0465 2.03125 21.5625 2.03125ZM20.4688 19.9688H2.53125V9.57812H20.4688V19.9688ZM20.4688 7.71875H2.53125V4H6.03125V5.3125C6.03125 5.43281 6.12969 5.53125 6.25 5.53125H7.78125C7.90156 5.53125 8 5.43281 8 5.3125V4H15V5.3125C15 5.43281 15.0984 5.53125 15.2188 5.53125H16.75C16.8703 5.53125 16.9688 5.43281 16.9688 5.3125V4H20.4688V7.71875Z" fill="#40A9FF"/>
              </svg>
            </span>
          </q-icon>
        </div>
      </template>
    </q-input>
      </div>
    </div>
    <q-input
    v-bind="QInputProps"
      v-model="testInput"
    >

    </q-input>
    <div class="h-[50px] border-2 border-red-600 pt-2">
      <span>item1</span>
      <input type="checkbox" v-model="SelectEditItem[0].statusF" @change="handStatusF('adam')">
      X
      <input type="checkbox" v-model="SelectEditItem[0].statusT" @change="handStatusT('adam')">
      V
      <input
      v-model="InputEditItem.ObjVal1"
      type="text" class=" bg-[#DDD] border-2 border-[#999] disabled:bg-[#222]" :disabled="SelectEditItem[0].statusF">
    </div>
    <div class="h-[50px] border-2 border-red-600 pt-2">
      <span>item2</span>
      <input type="checkbox" v-model="SelectEditItem[1].statusF" @change="handStatusF('adam2')">
      X
      <input type="checkbox" v-model="SelectEditItem[1].statusT" @change="handStatusT('adam2')">
      V
      <input
      v-model="InputEditItem.ObjVal2"
      type="text" class=" bg-[#DDD] border-2 border-[#999] disabled:bg-[#222]" :disabled="SelectEditItem[1].statusF">
    </div>
  </q-page>
</template>

<script setup>
import {ref, watch, computed, reactive} from "vue"
import {
  QTableProps,
  QInputProps,
  QSelectProps,
} from "src/utils/quasar-extends/base-props.js";
const ObjVal = ref("")
const InputEditItem = reactive({
  ObjVal1: 1,
  ObjVal2: 2
})
const SelectEditItem = reactive([
  {idx:0,key:"adam",statusT:true,statusF:false,focusKey:"ObjVal1"},
  {idx:1,key:"adam2",statusT:true,statusF:false,focusKey:"ObjVal2"}
])
const StatusDisabled = ref(false)
const SelectList = ref(["adam","adam2"])
const handStatusT = (key) =>{
  console.log(key);
  SelectEditItem.forEach(item=>{
    if(item.key === key){
      item.statusT = true
      item.statusF = false
      // 指向input預設的focusKey
    }
  })
}
const FocusValEmpty = (FocusVal) =>{
  console.log(FocusVal);
  Object.keys(InputEditItem).forEach(key=>{
    if(key === FocusVal) InputEditItem[key] = ""
  })
}
const handStatusF = (key) =>{
  console.log(key);
  SelectEditItem.forEach(item=>{
    console.log(item);
    if(item.key === key){
      item.statusT = false
      item.statusF = true
      // item.focusKey = ""
      FocusValEmpty(item.focusKey)
    }
  })
}
const selectDate = ref(null)
const testInput = ref(5207)
watch(selectDate,(newVal,oldVal)=>{
  console.log('新日期',newVal);
  console.log('舊日期',oldVal);

  updateDate(newVal,oldVal)
})
const updateDate = (newDate,oldDate)=>{
  DateBool.value = false
  if(newDate === null){
    selectDate.value = oldDate
    return
  }
  formattedString2.value =  newDate
}
const OpenDate = (key) =>{
  if(key=== "timeout"){
    DateBool.value = !DateBool.value
  }
}
const DateBool = ref(false)

const formattedString = ref('hh:mm')
const formattedString2 = ref('YYYY/MM/DD')
const formattedString3 = ref('YYYY/MM/DD')
// setInterval(()=>{
//   console.log(formattedString3.value);
// },1000)

const text = ref("777")
const model = ref("Google")
const options = ref([
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ])
defineOptions({
  name: 'IndexPage'
});
</script>
<style lang="scss">
.testappend{
  // border: 1px solid #F00;
  // width: 100%;
  // position: absolute;
  // top: 0;
  // left: 0;
  // cursor: pointer;
  // height: 100%;
}
.qicon{
  position: relative;
  left: 5px;

}
.dateFn,.ClockFn{
  position: absolute;
  z-index: 999;
  top: 50px;
}
.inputBox{
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid #F00; */
  width: 100%;
  padding-top: 1rem;

}
.q-menu{
  // border: 1px solid #F00;
  // position: relative;
  // position: absolute;
  // margin-top: 100px;
  transform: translateY(120px);
}
.q-date{
  // margin-top: 200px;
  // position: absolute;
  // width: 300px;
}
.q-icon[role="presentation"]{
  // display: none;
  position: relative;
  // top: 10px;
}
.inputItem{
  position: relative;
  display: flex;
  align-items: center;
  width: 20%;
  border: 1px solid #999;
  padding: 1px;
}
.selectIcon{
  position: absolute;
  right: 1rem;
  top: 5px;
}

.q-field {
  height: 36px;
  width: 100%;
  background: #F8FDFF;
  border: 1px solid #096DD9;
  padding: 0 7px 4px;
}
.writeNoWrap{
  text-wrap: nowrap;
  margin: 0 0.5rem;
}
.q-input {
  .q-field__control {
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 20px;
}
}
.q-select__dropdown-icon{
  display: none;
}
.q-select{
  display: flex;
  align-items: center;
  height: 36px;
  overflow: hidden;

.q-field__control {
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 20px;
  position: relative;
  z-index: 3;
  top: -20px;
}
}


</style>
