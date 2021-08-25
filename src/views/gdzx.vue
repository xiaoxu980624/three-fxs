<template>
    <div class="box">
        <!-- 头 -->
      <div class="box1">
         <div class="left">
             <img src="../assets/切图/logo.png" alt="">
         </div>
         <div class="center">
             <b>装修方案</b>
         </div>
         <div class="right">
           <div class="z" >
               <i class="iconfont icon-user"></i>
               <p>我的</p>
           </div>
           &emsp;
           <div class="y">
               <i class="iconfont icon-nav"></i>
               <p>导航</p>
           </div>
               
         </div>

      </div>
      <!-- 图 -->
      <div class="box2">
          <div class="top">
             <img src="../assets/切图/case/case.jpg" alt="">
          </div>
          <div class="down">
              <div class="z">
                  <h3>339元/m²半包装修套餐</h3>
                  <p><span>特惠</span><b style="color:red;">可选300元/m²品牌主材包</b></p>
              </div>
              <div class="y">
                  <p>已预约295套</p>
              </div>
          </div>
      </div>
       <!-- 图 -->
      <div class="box3">
          <div class="top">
             <img src="../assets/切图/case/case1.jpg" alt="">
          </div>
          <div class="down">
              <div class="z">
                  <h3>699元/m²半包装修套餐</h3>
                  <p><span>正在发售</span><b style="color:red;">全包套餐火爆预约中</b></p>
              </div>
              <div class="y">
                  <p>已预约221套</p>
              </div>
          </div>
      </div>
      <div class="box4">
         房先森房先森房先森房先森房先森房先森房先森房先森房先森房先森
         房先森房先森房先森房先森房先森房先森房先森房先森房先森房先森

         房先森房先森房先森房先森房先森房先森房先森房先森房先森房先森
         房先森房先森房先森房先森房先森房先森房先森房先森房先森房先森
         房先森房先森房先森房先森房先森房先森房先森房先森房先森房先森
         房先森房先森房先森房先森房先森房先森房先森房先森房先森房先森

      </div>
      <!-- 返回顶部 -->
      <div class="top1">
         <van-icon name="back-top"></van-icon>
      </div>
    </div>
</template>

<script>
import '@/assets/iconfont/iconfont.css'//iconfont
    export default {
        
    }
</script>

<style lang="scss" scoped>
.box{
  width: 100%;
  margin: auto;
  background: #f0f0f0;
  .box1{
      width: 100%;
      height: 3.2rem;
      line-height: 2rem;
      display: flex;
      margin-top: 10px;
      margin-bottom: 20px;
      background: white;
      .left{
         flex: 30%;
         img{
             width: 8rem;
             height: 3rem;
             margin-left: 1rem;
         }
      }
      .center{
          flex: 40%;
          b{
              display: inline-block;
              font-size: 23px;
              margin:10px 0 10px 15px;
              color: gray;
          }
      }
      .right{
          flex: 30%;
          display: flex;
         i{
             font-size: 30px;
         }
         p{
             margin-top: -10px;
         }
      }
  }
  .box2{
      width: 100%;
      .top{
          width: 90%;
          margin:auto;
          img{
              width: 100%;
              height: 100%;
          }
      }
      .down{
           width: 90%;
          margin:auto;
          background: white;
          display: flex;
         .z{
             flex: 40%;
             h3{
                
                 margin-left: 10px;
                 box-sizing: border-box;
             }
             p{
                 margin-top: -10px;
                 margin-left: 10px;
                 margin-bottom: 10px;
             }
         }
         .y{
             flex: 1;
             p{
                 font-size: 18px;
                 background: red;
                 padding: 4px;
                 border-top-left-radius: 23px;
                 border-bottom-left-radius: 23px;

             }
         }
      }
  }
   .box3{
       margin-top: 10px;
      width: 100%;
      .top{
          width: 90%;
          margin:auto;
          img{
              width: 100%;
              height: 100%;
          }
      }
      .down{
           width: 90%;
          margin:auto;
          background: white;
          display: flex;
         .z{
             flex: 40%;
             h3{
                
                 margin-left: 10px;
                 box-sizing: border-box;
             }
             p{
                 margin-top: -10px;
                 margin-left: 10px;
                 margin-bottom: 10px;
             }
         }
         .y{
             flex: 1;
             p{
                 font-size: 18px;
                 background: red;
                 padding: 4px;
                 border-top-left-radius: 23px;
                 border-bottom-left-radius: 23px;

             }
         }
      }
  }
  .box4{
      width: 90%;;
      margin: auto;
      margin-top: 10px;
     background: white;
  }
  .top1{
      padding: 20px;
      position: fixed;
      bottom: 50px;
      right: 20px;
      border-radius: 50%;
      background: rgba(0,0,0,.4);
      color: white;
  }
}
</style>