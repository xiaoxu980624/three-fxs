<template>
    <div class="picture-box">
        <div class="picture">
            <!-- 导航栏 -->
            <div class="nav">
                <p>
                    <img src="../assets/切图/logo.png" alt="">
                </p>
                <p class="pr">
                    <span>
                        <i class="iconfont icon-user f1"></i>
                        <br>我的
                    </span>
                    <span>
                        <i class="iconfont icon-nav f2"></i>
                        <br>导航
                    </span>
                </p>
            </div>
        </div>
        <ul class="inner">
            <li class="filter">
                户型
                <i class="iconfont icon-down"></i>
            </li>
            <li class="filter">
                区域
                <i class="iconfont icon-down"></i>
            </li>
            <li class="filter">
                风格
                <i class="iconfont icon-down"></i>
            </li>
            <li class="filter">
                <a href="">
                    <i class="iconfont icon-search"></i>
                </a>
            </li>
        </ul>
        <div class="di-Gongges">
            <div class="Gongge" v-for="(item,index) in list" :key="index">
                
                    <img class="imgs" :src="item.img" alt="">
                    <p>{{item.title}}</p>
                    <p>{{item.guige}}</p>
                
            </div>
            <article class="page flex">
            <a href="" class="bg-green">上一页</a>
            <a href="" class="bun">2/30</a>
            <a href="" class="bg-green">下一页</a>
            </article>
        </div>
        <div
            class="foot-tips"
        >房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐 + 个性化定制服务。</div>
        <div class="footer-nav">
            <div>
                <i class="iconfont icon-hot-line"></i>服务热线:17757169861
            </div>
            <p class="p1">
                <a>触屏版</a>
                <a>电脑版</a>
                <a>关于我们</a>
                <a>联系我们</a>
            </p>
        </div>
    </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
import good from "@/assets/data.json";
export default {
  data() {
    return {
      list:good
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss" >
.imgs{
  width: 100%;
  height: 100px;
}
.bun{
    background: white
}
.bg-green {
    background: #39c894;
    color: #fff;
}
.page.flex a {
    flex: 1;
    width: 100%;
    text-align: center;
}
.page.flex {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    display: flex;
    margin: 20px 0px;
}
.p1 {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    display: flex;
    justify-content: space-around;
}
.footer-nav {
  padding: 0.3rem;
  margin-top: 0.3rem;
  background: #fff;
  font-size: 14px;
  text-align: center;
  color: #999;
}
.foot-tips {
  padding: 3%;
  margin-bottom: 0;
  font-size: 14px;
  background: white;
  line-height: 1.6;
  text-indent: 1rem;
  color: #666;
}
.di-Gongges {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 12px;
  padding-right: 12px;
  box-sizing: border-box;
}
.Gongge {
  width: 46.1%;
  height: 170px;
  border: 1px solid #eaeaea;
  margin-left: 12px;
  margin-bottom: 12px;
  p{
    margin-left: 10px;
  }
}
.picture-box {
  width: 100%;
  background: #f4f4f4;
}
.picture {
  width: 100%;
  background: #eaeaea;
  overflow: hidden;
  padding-bottom: 1px;
  .nav {
    width: 100%;
    height: 100px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    p {
      span {
        font-size: 22px;
        display: inline-block;
        color: #999;
        vertical-align: middle;
        margin-right: 10px;
        &:nth-child(2) {
          font-size: 20px;
        }
        .f1 {
          font-size: 35px;
          color: #9999;
          margin-bottom: 5px;
        }
        .f2 {
          font-size: 33px;
          color: #9999;
        }
      }
    }
  }
}
.inner {
  display: flex;

  box-sizing: border-box;
  border-bottom: 1px solid #eaeaea;
}
.inner .filter {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-right: 1px solid #f4f4f4;
  color: #000;
  i {
    width: 25px;
    height: 15px;
    color: #999;
  }
}
</style>
