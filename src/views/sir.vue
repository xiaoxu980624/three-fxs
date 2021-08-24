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

  
  <!-- 设计师 -->
     <div class="set">
        <div class="creat">
            <span class="span">设计师</span>
        </div>
        <div class="man">
          <ul>
            <li v-for="(item,index) in man" :key="index">
              <img class="img"  :src="item.img" alt="">
              <p>{{item.name}}</p>
              <span class="tag">{{item.level_name}}</span>
            </li>
          </ul>
         
        </div>
         <div class="bot">
            <p>换一换  <i class="iconfont icon-change"></i> </p>
            <p>更多设计师  <i class="iconfont icon-more"></i></p>
          </div>
    </div>

    <!-- 效果图 -->
     <div class="res">
        <div class="creat">
            <span class="span">效果图</span>
        </div>
        <div class="heng">
          <img :src="res[0].img" alt="">
          <p class="title">{{res[0].title}}</p>
        </div>
        <ul>
          <li v-for="(item,index) in result" :key="index"> 
            <img :src="item.img" alt="">
            <p class="title">{{item.title}}</p>
          </li>
        </ul>
         <div class="bot">
            <p>换一换  <i class="iconfont icon-change"></i> </p>
            <p>更多效果图  <i class="iconfont icon-more"></i></p>
          </div>
     </div>

     <!-- 工地直播 -->
     <div class="size">
        <div class="creat">
            <span class="span">工地直播</span>
        </div>
        <div class="house" >
          <img :src="size[0].img" alt="">
          <p class="p">
            {{size[0].title}}
            <span>{{size[0].now_stage}}</span>
          </p>
        </div>
        <div class="bot">
            <p>换一换  <i class="iconfont icon-change"></i> </p>
            <p>更多工地直播  <i class="iconfont icon-more"></i></p>
          </div>
     </div>

     <!-- 装修攻略 -->
       <div class="xiu">
          <div class="creat">
              <span class="span">装修攻略</span>
          </div>
          <ul>
            <li v-for="(item,index) in zxiu" :key="index">
              <div class="tu">
                 <img :src="item.img" alt="">
              </div>
              <div class="zi">
                 <p class="p1">{{item.title}}</p>
                 <p class="p2">
                    <i class="iconfont icon-time" >{{item.edit_time}}</i>  &nbsp;&nbsp;&nbsp;
                    <i class="iconfont icon-view">{{item.view_num}}</i>    &nbsp;&nbsp;&nbsp;
                 </p>
              </div>
            </li>
          </ul>
           <div class="bot">
            <p>换一换  <i class="iconfont icon-change"></i> </p>
            <p>更多装修攻略  <i class="iconfont icon-more"></i></p>
          </div>
       </div>

       <!-- foot-tip -->
       <div class="foot-tips">
          
		 房先森互联网家装有别于传统装修公司与其他装修中介平台，
     以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，
     通过去中间环节，提供装修套餐 + 个性化定制服务。
	
       </div>
</div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
import man from "@/assets/main.json"; //设计师
import res from "@/assets/res.json"; //效果图
import xiu from "@/assets/xiu.json"; //装修攻略
import size from "@/assets/size.json"; //工地直播
console.log(size.data.list);
export default {
  components: {},
  data() {
    return {
      //设计师
      man: man.data.list,
      res: res.data.list,
      size: size.data.list,
      xiu: xiu.data.list,
      result: [],
      zxiu: [],
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
        },
        {
          title: "十秒报价",
          color: "#fe8864",
          icon: "iconfont icon-ten"
        }
      ],
      list: []
    };
  },

  methods: {
    getList() {
      this.result = this.res.splice(1, 4);
      console.log(this.result);
      this.zxiu = this.xiu.splice(2, 3);
    }
  },

  mounted() {
    this.getList();
  }
};
</script> 

<style scoped lang='scss'>
.foot-tips {
  width: 100%;
  height: 120px;
  background: #fff;
  padding: 3%;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.6;
  text-indent: 1rem;
  color: #666;
  margin-bottom: 18px;
}
//装修攻略
.xiu {
  width: 100%;
  background: #fff;
  margin-bottom: 18px;
  .creat {
    width: 100%;
    height: 64px;
    line-height: 64px;
    font-size: 18px;
    color: #999;
    .span {
      font-size: 26px !important;
      color: #000;
      margin-right: 10px;
      &:before {
        content: "|";
        font-weight: 700;
        color: #2bb281;
        font-size: 28px;
        margin-right: 5px;
      }
    }
  }
  ul {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      border-bottom: 1px solid #ccc;
      .tu {
        width: 150px;
        height: 150px;
        margin-right: 11px;
        img {
          width: 150px;
          height: 99px;
          margin-top: 15px;
          margin-bottom: 15px;
        }
      }
      .zi {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .p1 {
          width: 220px;
          font-size: 16px;
          color: #000;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .p2 {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
  .bot {
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 18px;

    font-size: 24px;
    p {
      width: 45%;
      line-height: 50px;
      border: 1px solid #ccc;
      text-align: center;
      color: #2bb281;
      font-size: 24px;
    }
  }
}
//工地直播
.size {
  width: 100%;
  background: #fff;
  margin-bottom: 18px;
  .creat {
    width: 100%;
    height: 64px;
    line-height: 64px;
    font-size: 18px;
    color: #999;
    .span {
      font-size: 26px !important;
      color: #000;
      margin-right: 10px;
      &:before {
        content: "|";
        font-weight: 700;
        color: #2bb281;
        font-size: 28px;
        margin-right: 5px;
      }
    }
  }
  .house {
    width: 100%;
    height: 295px;
    img {
      width: 100%;
      height: 250px;
    }
    .p {
      width: 100%;
      height: 35px;
      font-size: 22px;
      span {
        display: inline-block;
        background: #2bb281;
        padding: 3px;
        border-radius: 5px;
        color: #fff;
        font-size: 20px;
      }
    }
  }
  .bot {
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 18px;

    font-size: 24px;
    p {
      width: 45%;
      line-height: 50px;
      border: 1px solid #ccc;
      text-align: center;
      color: #2bb281;
      font-size: 24px;
    }
  }
}
//预约装修
.book {
  width: 100%;
  background: #fff;
  margin-bottom: 18px;
  .creat {
    width: 100%;
    height: 64px;
    line-height: 64px;
    font-size: 18px;
    color: #999;
    .span {
      font-size: 26px !important;
      color: #000;
      margin-right: 10px;
      &:before {
        content: "|";
        font-weight: 700;
        color: #2bb281;
        font-size: 28px;
        margin-right: 5px;
      }
    }
  }
  .inp {
    width: 100%;
    text-align: center;
    .input {
      width: 310px;
      height: 35px;
      font-size: 18px;
      color: #cacaca;
      line-height: 35px;
      border: 1px solid #eaeaea;
      border-radius: 5px;
    }
    .btn {
      margin-bottom: 18px;
      color: #fff;
      width: 310px;
      height: 45px;
      background: #feb505;
      border-radius: 5px;
      border: 0px;
    }
    width: 100%;
    text-align: center;
    .input {
      width: 310px;
      height: 35px;
      border: 1px solid #eaeaea;
      border-radius: 5px;
      font-size: 20px;
      color: #cacaca;
    }
    .btn {
      width: 310px;
      height: 40px;
      border-radius: 5px;
      background: #feb505;
      color: #fff;
      border: 0px;
      margin-bottom: 18px;
    }
  }
}
//设计师
.set {
  width: 100%;
  background: #fff;
  margin-bottom: 18px;
  .creat {
    width: 100%;
    height: 64px;
    line-height: 64px;
    font-size: 18px;
    color: #999;
    .span {
      font-size: 26px !important;
      color: #000;
      margin-right: 10px;
      &:before {
        content: "|";
        font-weight: 700;
        color: #2bb281;
        font-size: 28px;
        margin-right: 5px;
      }
    }
  }
  //
  .man {
    width: 100%;
    overflow-x: scroll;
    padding: 5px;
    box-sizing: border-box;
    ul {
      width: 130%;
      display: flex;
      height: 220px;
      li {
        font-size: 22px;
        margin-right: 10px;
        text-align: center;
        img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          margin-bottom: 12px;
        }
        .tag {
          width: 100px;
          height: 30px;
          line-height: 30px;
          border-radius: 5px;
          font-size: 14px;
          background: #2bb281;
          color: #fff;
          display: inline-block;
        }
      }
    }
  }
  .bot {
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 18px;

    font-size: 24px;
    p {
      width: 45%;
      line-height: 50px;
      border: 1px solid #ccc;
      text-align: center;
      color: #2bb281;
      font-size: 24px;
    }
  }
}
//效果图
.res {
  width: 100%;
  background: #fff;
  margin-bottom: 18px;
  .creat {
    width: 100%;
    height: 64px;
    line-height: 64px;
    font-size: 18px;
    color: #999;
    .span {
      font-size: 26px !important;
      color: #000;
      margin-right: 10px;
      &:before {
        content: "|";
        font-weight: 700;
        color: #2bb281;
        font-size: 28px;
        margin-right: 5px;
      }
    }
  }
  .heng {
    width: 100%;
    height: 250px;
    position: relative;
    img {
      width: 100%;
      height: 250px;
    }
    .title {
      position: absolute;
      bottom: -12px;
      right: 5px;
      background: #333333;
      color: #fff;
    }
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width: 48%;
      height: 125px;
      margin-bottom: 8px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        margin-top: 8px;
      }
      .title {
        position: absolute;
        bottom: -20px;
        right: 5px;
        background: #333333;
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .bot {
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    p {
      width: 45%;
      line-height: 50px;
      border: 1px solid #ccc;
      text-align: center;
      color: #2bb281;
      font-size: 24px;
    }
  }
}
//全屋装修
.all {
  width: 100%;
  background: #fff;
  margin-bottom: 18px;
  .creat {
    width: 100%;
    height: 64px;
    line-height: 64px;
    font-size: 18px;
    color: #999;
    .span {
      font-size: 26px !important;
      color: #000;
      margin-right: 10px;
      &:before {
        content: "|";
        font-weight: 700;
        color: #2bb281;
        font-size: 28px;
        margin-right: 5px;
      }
    }
  }
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    li {
      font-size: 14px;
      margin-right: 20px;
      height: 40px;
      .iconfont {
        display: inline-block;
        font-size: 24px;
        text-align: center;
        color: #2bb281;
        vertical-align: middle;
      }
    }
  }
}
.banner {
  width: 100%;
  background: #fff;
  margin-bottom: 18px;
  .img {
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
//九宫格
.grid {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 18px;
  padding-left: 10px;
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
  .i {
    font-size: 34px;
    color: #fff;
  }
  p {
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