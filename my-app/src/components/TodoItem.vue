<template>
    <li class="item">
         <!-- {{ item }} -->
         <input type="checkbox" v-model="checked">
         <slot name="item" v-bind="{checked}"></slot>  <!-- 插槽 -->
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
}
</script>

<style scoped>
.item{
    color: red;
}
</style>

