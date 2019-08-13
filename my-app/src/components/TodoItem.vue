<template>
    <li class="item">
         <!-- {{ item }} -->
         <input type="checkbox" v-model="checked">
         <slot name="item" v-bind="{checked}"></slot>  <!-- 插槽 -->
         <button @click="handleClickDel">删除</button>
    </li>
<!-- 补充知识点 插槽 -->
</template>

<script>
export default {
    props:[ 'item' ],
    data() {
        return {
            checked: false
        }
    },
    methods: {
        handleClickDel(){
            // 我们需要把点击事件告诉父组件
            this.$emit("delete", this.item);
        }
    },
}
</script>

<style scoped>
.item{
    color: red;
}
</style>

