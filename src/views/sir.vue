<template>
<div class="sir">
   <!-- 导航栏 -->
   <div class="nav">
       <p>
           <img src="../assets/切图/logo.png" alt="">
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
   
   <!-- 轮播图 -->
    <div class="banner">
         <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item >
            <img class="img" src="../assets/切图/img/banner1.jpg" alt="">
        </van-swipe-item>
          <van-swipe-item >
            <img class="img" src="../assets/切图/img/banner2.jpg" alt="">
        </van-swipe-item>
          <van-swipe-item >
            <img class="img" src="../assets/切图/img/banner3.jpg" alt="">
        </van-swipe-item>
       </van-swipe>
    </div>

    <!-- 九宫格 -->
    <div class="grid">
          <div class="grid-item" v-for="(item,index) in grid" :key="index" :style="{background:item.color}">
               <p>
                     {{item.title}}
              </p>
              <i class="i" :class="item.icon"></i>
          </div>
    </div>

    <!-- 全屋装修 -->
    <div class="all">
        <div class="creat">
            <span class="span">全屋装修</span> 包设计、包主材、包水电、包施工
        </div>
        <!-- 轮播 -->
        <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item >
                    <img class="img" src="../assets/切图/img1.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item >
                    <img class="img" src="../assets/切图/img/banner2.jpg" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <ul>
            <li>
                <i class="iconfont icon-zero"></i>
                增项，标准施工
            </li>
            <li>
                    <i class="iconfont icon-protection-fill"></i>
                杜绝项目外包
            </li>
            <li>
                <i class="iconfont icon-price"></i>
                装修贷款
            </li>
        </ul>
    </div>

     <!-- 装修预约 -->
     <!-- 全屋装修 -->
    <div class="book">
        <div class="creat">
            <span class="span">预约装修</span> 免费上门量房，设计方案满意为止
        </div>
       <div class="inp">
           <p>
               <input class="input" type="text" placeholder="小区名" name="" id="">
           </p>
           <p>
               <input class="input" type="text" placeholder="手机号" name="" id="">
           </p>
           <p>
               <input class="input" type="text" placeholder="建筑面积" name="" id="">
           </p>
           <p>
               <button class="btn">
                   立即申请
               </button>
           </p>
       </div>
    </div>



</div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";

export default {
  components: {},
  data() {
    return {
      grid: [
        {
          title: "装修方案",
          color: "#39c894",
          icon: "iconfont icon-case"
        },
        {
          title: "效果图",
          color: "#feb505",
          icon: "iconfont icon-pics"
        },
        {
          title: "设计师",
          color: "#eed215",
          icon: "iconfont icon-design"
        },
        {
          title: "装修工地",
          color: "#00b2b2",
          icon: "iconfont icon-construction-site"
        },
        {
          title: "装修攻略",
          color: "#1b9af7",
          icon: "iconfont icon-decorate"
        },
        {
          title: "装修贷款",
          color: "#7b72e9",
          icon: "iconfont icon-loans"
        },
        {
          title: "免费预约",
          icon: "iconfont icon-pencle",
          color: "#ff4351"
        } ,
        {
          title: "十秒报价",
          color: "#fe8864",
          icon: "iconfont icon-ten"
        }
      ],
    };
  },

  methods: {},

  mounted() {}
};
</script> 

<style scoped lang='scss'>
//全屋装修
.all{
    width: 100%;
    background: #fff;
    .creat{
        width: 100%;
        height: 64px;
        line-height: 64px;
        font-size: 18px;
        color: #999;
        .span{
            font-size: 26px !important;
            color: #000;
            margin-right: 10px;
            &:before{
                content: "|";
                font-weight:700;
                color: #2bb281;
                 font-size: 28px;
                 margin-right: 5px;
            }

        }
    }
     ul{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
        li{
            margin-right: 20px;
            height: 70px;
             font-size: 16px;
            .iconfont{
                display: inline-block;
               font-size: 24px;
                text-align: center;
                color: #2bb281;
                vertical-align: middle;
            }
        }
    }
}
.banner{
    width: 100%;
    background: #fff;
    margin-bottom:18px; 
    .img{
        width: 100%;
        height: 220px;
    }
}
//轮播图
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 180px;
  text-align: center;
  background-color: #39a9ed;
}
.grid {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 18px;
  background: #fff;
  margin-bottom: 18px;
}
.grid-item {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
  margin-bottom: 40px;
  text-align: center;
  line-height: 80px;
  position: relative;
  .i{
      font-size: 34px;
      color:#fff;
  }
  p{
      position: absolute;
      top: 40px;
      left: 10px;
  }
}
.img {
  width: 100%;
  height: 180px;
}
.sir {
  width: 100%;
  background: #eaeaea;
  overflow: hidden;
  padding-bottom: 80px;
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
</style>