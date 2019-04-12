<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <input type="text" v-model="info">
    <button @click="handClick">添加</button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ul>
      <!-- <todo-item v-for="item in lists" :item="item" :key="item">  属性传递参数 -->
      <todo-item v-for="item in lists" :key="item">
          <!-- <span v-slot:item style="font-size:20px;"> {{ item }} </span> 插槽  v-slot can only be used on components or <template>. -->
            <template  v-slot:item='itemProps'>  <!-- 具名插槽 -->
                <!-- <span slot="item" style="font-size:20px;"> {{ item }} </span>  -->
                <span :style="{fontSize:'20px',color: itemProps.checked ? 'red':'blue'}"> {{ item }} </span> <!-- 插槽 -->
            </template>
      </todo-item>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "app",
  components: {
    // HelloWorld,
    TodoItem
  },
  data() {
    return {
      msg:"Hello vue , go on!",
      lists:[],
      info:""
    }
  },
  methods: {
    handClick(){
      this.lists.push(this.info);
      this.info = "";
    }
  },
};
</script>

<style>

</style>
