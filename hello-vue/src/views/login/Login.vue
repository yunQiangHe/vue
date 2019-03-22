<template>
  <div class="login-container">
    <el-form ref="form" :model="form" class="login-form">
      <div class="title-container">
        <h3 class="title">二手车</h3>
      </div>

      <el-form-item>
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleLogin" icon="el-icon-search">登录</el-button>
        <el-button type="primary" @click="handleLogin2">登录2</el-button>
        <el-button type="primary" @click="add">++++++</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { loginByUsername, loginByUsername2 } from "@/api/login";
import { mapState } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handleLogin() {
      loginByUsername("admin4", "admin4").then(res => {
        console.log(res.data.user_info);
      });
    },
    handleLogin2() {
      loginByUsername2("1").then(res => {
        console.log(res);
      });
    },
    add() {
      store.commit("increment");
    }
  }
};
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  width: 100%;
  min-height: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 420px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
}
</style>