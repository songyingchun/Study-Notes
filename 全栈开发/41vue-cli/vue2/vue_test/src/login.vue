<template id="" lang="html">
<div>
  <cmpHead/>
  <form class="" action="http://localhost:8081/login" method="post">
    用户： <input type="text" name="" value=""><br>
    密码： <input type="password" name="" value=""><br>
    <input type="submit" name="" value="登录">
    <a href="#/reg">我要注册</a>
  </form>
  <cmpFoot/>
</div>
</template>
<script type="text/javascript">
import cmpHead from '@/components/cmp-head'
import cmpFoot from '@/components/cmp-foot'
export default{
  components:{cmpHead,cmpFoot}
}
</script>
<style media="screen" lang="css">

</style>
