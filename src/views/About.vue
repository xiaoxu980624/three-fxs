<template>
  <div style="padding-bottom:44px;">
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />

    <!-- 轮播图 -->
    <van-swipe  :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in bannerList" :key="index">
        <img :src="item.picUrl" style="width:100%;height:350px"/>
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图 -->

    <van-tabs>
      <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>

    <van-grid :border="true" :center="false" :gutter="5" :column-num="2">
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
        <p>好图</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
         <p>好图</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
           <p>好图</p>
      </van-grid-item>
    </van-grid>

    <!-- tabbar底部菜单栏 -->
    <van-tabbar v-model="active" active-color="#A00000">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o">个人</van-tabbar-item>
    </van-tabbar>
    <!-- tabbar底部菜单栏 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      active: 1,
      bannerList:[],
    };
  },

  mounted(){
    this.$axios.get("https://api.it120.cc/small4/banner/list").then(res=>{
      console.log(res.data);
      this.bannerList = res.data;
    })
  }
};
</script>
<style scoped lang="scss">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
