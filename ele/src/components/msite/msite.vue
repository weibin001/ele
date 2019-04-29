<template>
  <section class="msite">
    <index
      :class="[{ unscrollable: search || chose }]"
      @openSearch="openSearch"
    ></index>
    <transition name="slide">
      <SearchCity v-show="search" @close="closeAll"></SearchCity>
    </transition>
  </section>
</template>

<script>
import index from './index/index'
import SearchCity from './index/SearchCity'
export default {
  name: 'msite',
  data() {
    return {
      search: false, //搜索位置
      chose: false //选择城市
    }
  },
  components: {
    index,
    SearchCity
  },
  computed: {},
  methods: {
    closeAll: function(index) {
      this[index] = false
      this.search = index == 'chose' ? true : this.search
    },
    openSearch: function() {
      this.search = true
    },
    openChose: function() {
      this.chose = true
      this.search = false
    }
  }
}
</script>

<style scoped lang="scss">
.msite {
  /*position: fixed;*/
  width: 100%;
  height: 100%;
	min-height: 100vh;
  padding-bottom: 13.333333vh;
  background: #fff;
}
.unscrollable {
  height: 100vh;
  overflow: hidden;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>