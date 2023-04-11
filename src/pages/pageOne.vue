<template>
  <h1>vue3 子应用</h1>
  <h2>主应用中的信息 -> 姓名: {{ state.name }} count：{{ state.count }}</h2>

  <el-card>
    <el-form :model="form" inline label-width="120px">
      <el-form-item label="姓名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="位置">
        <el-select v-model="form.position" placeholder="请选择位置信息">
          <el-option label="上海" value="shanghai" />
          <el-option label="北京" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>

  <el-button-group>
    <el-button type="primary" @click="goMainApp">回到主系统</el-button>
    <el-button type="info" @click="goPageTwo">vue3 页面2</el-button>
    <el-button type="danger" @click="commitGlobalVuexCount">更改主应用vuex数据</el-button>
  </el-button-group>
</template>

<script setup name="pageOne">
import actions from "@/qiankun/actions.js"
import { useRouter } from "vue-router"
import { reactive, ref } from "vue"

const router = useRouter()

const form = reactive({
  name: "",
  position: ""
})

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

const goPageTwo = () => {
  router.push({
    path: "pageTwo"
  })
}
</script>