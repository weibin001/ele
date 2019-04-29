<template>
  <footer class="ele-footer">
    <!--
            	描述：replace 替换当前地址，不是跳转，$router不会记录当前值
            	描述：exact 严格匹配路径，只要当路径只为'/'时才激活，如果不加exact 后缀存在'/'都会激活
            -->
    <router-link
      tag="a"
      to="/"
      :class="{ active: $route.path === '/msite' || $route.path === '/' }"
      replace
    >
      <span class="iconfont">
        &#xe604;
      </span>
      <span class="text">首页</span>
    </router-link>
    <router-link tag="a" to="/discover" activeClass="active" replace>
      <span class="iconfont">
        &#xe603;
      </span>
      <span class="text">发现</span>
    </router-link>
    <router-link tag="a" to="/order" activeClass="active" replace>
      <span class="iconfont">
        &#xe602;
      </span>
      <span class="text">订单</span>
    </router-link>
    <router-link tag="a" to="/user" activeClass="active" replace>
      <span class="iconfont">
        &#xe911;
      </span>
      <span class="text">我的</span>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'tarbar',
  data() {
    return {}
  }
}
</script>

<style scoped>
.ele-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 13.33333vw;
  padding-top: 1.2vw;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, 0.1);
}

.ele-footer a {
  flex: 1;
  display: block;
  text-align: center;
  color: #8e8e93;
}

.ele-footer a.active {
  color: #0089dc;
}
.ele-footer a > .text {
  display: block;
  font-size: 0.266667rem;
}
</style>