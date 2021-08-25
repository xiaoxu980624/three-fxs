<template>
<div class="gongdi">
     <!-- 导航栏 -->
   <div class="nav">
       <p>
           <img style="height:45px;" src="../assets/切图/logo.png" alt="">
       </p>
       <p>
           工地直播
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

   <!--筛选  -->
   <ul class="ul">
       <li>筛选   <i class="iconfont icon-down " ></i></li>
       <li>阶段   <i class="iconfont icon-down " ></i></li>
       <li>排序   <i class="iconfont icon-down " ></i></li>
       <li>       <i class="iconfont icon-search search " ></i></li>
   </ul>

   <!-- 公寓 -->
   <div class="gongyu">
       <ul>
           <li v-for="(item,index) in size" :key="index">
               <div class="tu"><img :src="item.img" alt=""></div>
               <div class="zi">
                   <p>{{item.title}}</p>
                   <p class="stage">{{item.now_stage}}工程</p>
                   <p class="des"><span>三室</span>  <span>60-90m²</span> <span>10Km</span></p>
               </div>
           </li>
       </ul>
   </div>

   <!-- 分页 -->
   <div class="page">
       <button>上一页</button>
       <p>2/30</p>
       <button>下一页</button>
   </div>

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
</div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
import size from "@/assets/size.json"; //工地直播
console.log(size.data.list);
export default {
  components: {},
  data () {
    return {
    size:size.data.list
}
  },

  methods: {},

  mounted () {
  },
}
</script> 

<style scoped lang='scss'>
//工地直播列表
.gongdi{
  width: 100%;
  background: #eaeaea;
  overflow: hidden;
  padding-bottom: 80px;
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
  //.分页
  .page{
      width: 100%;
      margin-top: 10px;
      background: #fff;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      button{
          width: 30%;
          height: 45px;
          text-align: center;
          border: 0px;
          color: #fff;
          background: #2bb281;
      }
      p{
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          width: 30%;
          height: 45px;
          text-align: center;
          line-height: 45px;
      }
  }
  //公寓
  .gongyu{
      width: 100%;
      background: #fff;
      ul{
          width: 100%;
          display: flex;
          flex-direction: column;
          li{
              width: 100%;
              margin-top: 10px;
              height: 120px;
              display: flex;
              .tu{
                  width: 180px;
                  height: 120px;
                  img{
                      width: 160px;
                      height: 100px;
                      margin-top: 5px;
                  }
              }
              .zi{
                 width: 100%;
                 height: 80px;
                 margin-left: 25px;
                .stage{
                    width: 75px;
                    height: 25px;
                    background: #2bb281;
                    color: #fff;
                    border-radius: 5px;
                }
                .des{
                    color: #999;
                    span{
                        margin-right: 20px;
                    }
                }
              }
          }
    }
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
  //筛选
  .ul{
      width: 100%;
      height: 50px;
      background: #fff;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      li{
          width: 25%;
          margin-top: 5px;
          font-size: 18px;
          text-align: center;
          color: #999;
          .search{
              color: #2bb281;
              font-size: 18px;
          }
      }
  }
}
</style>