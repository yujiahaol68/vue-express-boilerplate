<template>
  <div class="loginmodal">
    <form class="form-horizontal">
      <fieldset>
        <legend>登录</legend>
        <div class="form-group">
          <label for="inputEmail" class="col-lg-2 control-label">邮箱</label>
          <div class="col-lg-10">
            <input type="email" class="form-control" id="inputEmail">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="col-lg-2 control-label">密码</label>
          <div class="col-lg-10">
            <input type="password" class="form-control" id="inputPassword">
            <div class="checkbox">
              <label>
                <input type="checkbox"> 记住我
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

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
