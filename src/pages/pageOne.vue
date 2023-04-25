<template>
  <h1>vue3 子应用</h1>
  <h2 class="parent">主应用中的信息 -> 姓名: {{ state.name }} count：{{ state.count }}</h2>
  <h2>Router 中的信息 姓名{{ route.query.name }}，年龄 {{ route.query.age }}</h2>

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
    <el-button type="success" @click="goMainApp">主系统</el-button>
    <el-button type="info" @click="goVue2">vue2 子应用</el-button>
    <el-button type="danger" @click="commitGlobalVuexCount">更改主应用vuex数据</el-button>
  </el-button-group>
</template>

<script setup name="pageOne">
import actions from "@/qiankun/actions.js"
import { useRoute } from "vue-router"
import { reactive, ref } from "vue"

const route = useRoute()

const form = reactive({
  name: "",
  position: ""
})

const state = ref()
actions.onGlobalStateChange((parentState) => {
  state.value = parentState
}, true)


actions.onGlobalStateChange(parentState => {
  state.value = parentState
})

const goMainApp = () => {
  actions.parentRouter.push({
    path: "qiankun-home"
  })
}


const commitGlobalVuexCount = () => {
  actions.setGlobalState({
    name: "张三",
    count: state.value.count + 1
  })
}

const goVue2 = () => {
  actions.parentRouter.push({
    path: "/vue2/pageOne"
  })
}
</script>

<style scoped>
.parent {
  color: red
}
</style>