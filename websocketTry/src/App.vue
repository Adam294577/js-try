<script setup>
import AgoraRTM from 'agora-rtm-sdk';
import { v4 as uuidv4 } from 'uuid';
import { ref, onMounted, nextTick, defineExpose } from 'vue';
const APP_ID = "8af5c4a4081e48a7a39b0a1550e2d961";
const CHANNEL = "wdj";
let client = AgoraRTM.createInstance(APP_ID);
let uid = uuidv4();
let text = ref("");
let messagesRef = ref(null);
let messages = ref([]);
let channel;
onMounted(async () => {
  await client.login({ uid, token: null });
  channel = await client.createChannel(CHANNEL);
  await channel.join();
});
</script>
<template>
  <div>52074</div>
</template>

<style lang="scss" scoped></style>
