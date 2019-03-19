<template>
  <div class="test">
    <p>Original message - {{ message }}</p>
    <p>Computed resvered message - {{ resvereMessage }}</p>
    <p>如果你不希望有缓存，请用方法来替代。- {{ resvereMessage2() }}</p>
    <p>
        Ask a yes/no question:
        <input v-model='question'>
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message:"ABC",
            question:"",
            answer:"I cannot give you an answer until you ask a question!"
        }
    },
    computed: {
        resvereMessage(){
            return this.message.split("").reverse().join("");
        },
        now(){
            return Date.now();
        }
    },
    methods: {
        resvereMessage2(){
            return this.message.split("").reverse().join("");
        }
    },
};
</script>

<style scoped>
.test{
    background: darkcyan 
}
</style>