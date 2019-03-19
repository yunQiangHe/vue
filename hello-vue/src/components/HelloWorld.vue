<template>
  <div class="hello">
    <h1>{{ sonMsg }}</h1>
    <button class="btn" @click="reverseMsg">reverseMsg</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      sonMsg: this.msg
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
   reverseMsg(){
     this.sonMsg = this.sonMsg.split("").reverse().join("");
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  padding: 5px 8px;
  margin:5px 2px;
}
</style>
