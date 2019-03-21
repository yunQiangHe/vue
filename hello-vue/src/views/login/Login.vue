<template>
  <div class="login-container">
    <el-form ref="form" :model="form" class="login-form">
      <div class="title-container">
        <h3 class="title">二手车</h3>
      </div>

      <el-form-item label="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item label="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { loginByUsername } from "@/api/login";

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
      loginByUsername("", "").then(res => {
        console.log(res.data.user_info);
      });
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
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
    .title-container {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>