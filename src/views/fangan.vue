<template>
<div class="fangan">
    <!-- 导航栏 -->
   <div class="nav">
       <p>
           <img style="height:45px;" src="../assets/切图/logo.png" alt="">
       </p>
       <p>
           装修方案
       </p>
      <p class="pr">
          <span>
             <i class="iconfont icon-user f1" ></i>
             <br>
              我的
          </span>
          <span>
             <i class="iconfont icon-nav f2" ></i>
              <br>
              导航
          </span>
      </p>
   </div>

   <!-- 套餐 -->
   <div class="backpage">
       <div class="tu">
           <img src="@/assets/切图/case/case/case1.jpg" alt="">
       </div>
       <div class="zi">
           <p class="all">
               699全包精装套餐
           </p>
           <p>
               <span class="s2">价格: </span>  <span class="sp1">￥699/m²</span>
           </p>
           <p>
               <span class="s2">已预约:</span>  <span>221套</span>
           </p>
            <p>
               <span class="s2">正式发售: </span>  <span class="sp1">全包套餐火爆预约中</span>
           </p>
       </div>
      
   </div>
    <div class="jing">
           精装全包套餐，包设计/包主材/包监理。采用知名辅材、一线主材，工厂直供F2C模式
       </div>

       <!-- nav -->
       <ul class="nav">
           <li>套餐详情</li>
           <li>配置清单</li>
           <li>施工工艺</li>
           <li>服务流程</li>
       </ul>


       <!-- 工厂直销 -->
       <div style="width:100%;height:160px;">
           <img style="width:100%;height:160px;" src="@/assets/切图/case/case/case.jpg" alt="">
       </div>
        <div style="width:100%;height:160px;">
           <img style="width:100%;height:160px;" src="@/assets/切图/case/case/case.jpg" alt="">
       </div>
        <div style="width:100%;height:160px;">
           <img style="width:100%;height:160px;" src="@/assets/切图/case/case/case.jpg" alt="">
       </div>
        <div style="width:100%;height:160px;">
           <img style="width:100%;height:160px;" src="@/assets/切图/case/case/case.jpg" alt="">
       </div>
       
        <section class="section foot-tips bg-white">
            <p>
                房先森互联网家装有别于传统装修公司与其他装修中
                <br>
                介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐 + 个性化定制服务。
            </p>
        </section>

           <!-- 脚部 -->
   <div class="footer">
       <p class="serve">
            <i class="iconfont icon-hot-line" ></i>
            服务热线:400-9977-658
       </p>
       <ul>
           <li>触屏版</li>
           <li>电脑版</li>
           <li>关于我们</li>
           <li>联系我们</li>
       </ul>
       <p>
           ©2016 sirfang.com 刚需房装修就找房先森
       </p>
   </div>
       

       <!-- 免费预约 -->
       <div class="free">
           <i class="iconfont icon-pencle"></i>
           马上免费预约
       </div>
</div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
export default {
  components: {},
  data() {
    return {};
  },

  methods: {},

  mounted() {}
};
</script> 

<style scoped lang='scss'>
.fangan {
  width: 100%;
  background: #eaeaea;
  position: relative;
}
//头部导航栏
.nav {
  width: 100%;
  height: 100px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    span {
      font-size: 20px;
      display: inline-block;
      color: #999;
      vertical-align: middle;
      margin-right: 10px;
      &:nth-child(2) {
        font-size: 20px;
      }
      .f1 {
        font-size: 28px;
        color: #9999;
        margin-bottom: 5px;
      }
      .f2 {
        font-size: 28px;
        color: #9999;
      }
    }
  }
}
.backpage {
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
  .tu {
    width: 160px;
    height: 120px;
    margin-top: 10px;
    img {
      width: 160px;
      height: 120px;
    }
  }
  .zi {
    width: 100%;
    margin-top: -18px;
    margin-left: 10px;
    .all {
      font-size: 24px;
    }
    .s2 {
      color: #999;
      font-size: 16px;
    }
    .sp1 {
      font-size: 18px;
      color: red;

      &:nth-child(2) {
        font-size: 16px;
      }
    }
  }
}
.jing {
  background: #fff;
  width: 100%;
  height: 60px;
  line-height: 30px;
}
//导航栏
.nav {
  width: 100%;
  height: 50px;
  background: #fff;
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    width: 25%;
    line-height: 50px;
    text-align: center;
    &:nth-child(1) {
      border-bottom: 1px solid #2bb281;
    }
  }
}
.section{
    width: 100%;
    margin-top: 18px;
    margin-bottom: 18px;
}
.foot-tips {
    padding: 2%;
    box-sizing: border-box;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 1.6;
    text-indent: 1rem;
    color: #666;
}
.bg-white {
    background: #fff;
}

 //脚部
  .footer{
      width: 100%;
      background: #fff;
      padding-bottom: 10px;
      .serve{
          width: 100%;
          height: 30px;
          line-height: 50px;
          text-align: center;
          .iconfont{
              color: #2bb281;
              font-size: 20px;
          }
      }
      p{
          text-align: center;
      }
      ul{
          width: 100%;
          height: 50px;
          line-height: 50px;
          display: flex;
          justify-content: space-between;
          li{
              width: 25%;
              text-align: center;
              &:first-child{
                  color: #2bb281;
              }
          }
      }
  }

  //免费预约
  .free{
      width: 100%;
      height: 50px;
      line-height: 50px;
      background: pink;
      text-align: center;
      color: #fff;
      position: absolute;
      bottom: 0px;
      left: 0px;
  }
</style>