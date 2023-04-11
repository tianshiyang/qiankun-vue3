<template>
  <div>this is vue3</div>
  <h1>主应用中的信息 -> 姓名: {{ state.name }} count：{{ state.count }}</h1>
  <el-button-group>
    <el-button type="primary" @click="goMainApp">回到主系统</el-button>
    <el-button type="danger" @click="commitGlobalVuexCount">更改主应用vuex数据</el-button>
  </el-button-group>
</template>

<script setup>
import actions from "@/qiankun/actions.js"
import { ref } from "vue"

const state = ref()
actions.getGlobalState((parentState) => {
  state.value = parentState
})


actions.onGlobalStateChange(parentState => {
  state.value = parentState
})

const goMainApp = () => {
  actions.parentRouter.go(-1)
}


const commitGlobalVuexCount = () => {
  actions.setGlobalState({
    name: "张三",
    count: state.value.count + 1
  })
}
</script>