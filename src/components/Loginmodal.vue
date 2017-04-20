<template>
  <div class="loginmodal">
    <form class="form-horizontal">
      <fieldset>
        <legend>登录</legend>
        <div class="form-group" v-bind:class="{ 'has-error': hasError }">
          <label for="inputEmail" class="col-lg-2 control-label">邮箱</label>
          <div class="col-lg-10">
            <label v-if="hasError" class="control-label" for="focusedInput">{{ emailMessage }}</label>
            <input v-model.trim="email" type="email" class="form-control input-lg" id="inputEmail">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="col-lg-2 control-label">密码</label>
          <div class="col-lg-10">
            <input v-model.trim="password" type="password" class="form-control input-lg" id="inputPassword">
            <div class="checkbox">
              <label>
                <input v-model="remember" type="checkbox"> 记住我
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-10 col-lg-offset-2">
            <button type="submit" class="btn btn-primary">登录</button>
            <div class="pull-right">没有账号？<a href="#">注册</a></div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'loginmodal',
  data () {
    return {
      email: '',
      password: '',
      remember: false,
      hasError: false,
      emailMessage: '',
      messages: {
        default: '',
        invalid: '请输入正确格式的邮箱地址',
        incorrect: '用户名或密码错误，请重新输入'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
