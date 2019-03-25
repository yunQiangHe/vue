<template>
  <div class="home">
    <HelloWorld msg="我是helloworld组件"/>
    <el-button type="primary" @click="test">test</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    test() {
      
    }
  }
};
</script>
