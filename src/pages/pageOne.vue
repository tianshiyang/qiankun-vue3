<template>
  <div>this is vue3</div>
  <h1>主应用中vuex的count：{{ store.state.count1 }}</h1>
  <el-button-group>
    <el-button type="primary" @click="goMainApp">回到主系统</el-button>
    <el-button type="danger" @click="commitGlobalVuexCount">更改主应用vuex数据</el-button>
  </el-button-group>
</template>

<script setup>
import store from "@/store/index"
const mainStore = store.state.mainStore

const goMainApp = () => {
  mainStore.value.$parentRouter.push({
    path: "/qiankun-home"
  })
}

const commitGlobalVuexCount = () => {
  console.log(store.commit("change"))
  // mainStore.commit("changeCount")
}
</script>