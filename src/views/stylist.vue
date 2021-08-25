<template>
    <div class="stylist">
         <!--头部 -->
   <div class="header">
           <a href="javascript:;" class="login"></a>
      <p class="pr">
          <span>
             <i class="iconfont icon-user" ></i>
             <span>我的</span>
              
          </span>
          <span>
             <i class="iconfont icon-nav" ></i>
              <span>导航</span>
          </span>
      </p>
   </div>
   <!-- 导航栏 -->
    <section class="filter">
        <ul>
        <li>
            筛选
            <span><i class="iconfont icon-down" ></i></span>
        </li>
        <li>
            风格
            <span><i class="iconfont icon-down" ></i></span>
        </li>
        <li>
            排序
            <span><i class="iconfont icon-down" ></i></span>
        </li>
        <li>
             <span><i class="iconfont icon-search" ></i></span>
        </li>
    </ul>     
    </section>
    <!-- 设计师列表 -->
    <div class="lists">
        <ul  >
            <li v-for="(item,index) in 10" :key="index">
               <div class="list_son">
                    <img src="@/assets/切图/a.jpg" alt="">
                    <div class="list_sons">
                    <div>
                        <p><span>黑虎阿福</span><span>成龙死对头</span></p>
                        <p><span class="on">2115</span><span>人气</span></p>
                    </div>
                    <div>
                        <p>作品：<span>20个</span></p>
                        <p>经验:<span>5年</span></p>
                        <p>评价：<span>0</span></p>
                    </div>
                    <div>
                        <span>擅长风格:</span><span>龙卷风摧毁停车场/欧美/美式/田园/新古代/现代/简约/法师/北欧/后现代</span>
                    </div>
                </div>
               </div>
            </li>
        </ul>
        <div class="div">
          <span>1/3</span>
          <button>下一页</button>
        </div>
    </div>
    </div>    
</template>
<script>
import "@/assets/iconfont/iconfont.css";
export default {
  async created() {
    let list = await this.$axios.get("http://m.sirfang.com/api/home/shejishi");
    console.log(list);
  }
};
</script>
<style lang="scss">
body {
  font-size: 12px;
}
html {
  font-size: 41.4px;
}
a {
  color: black;
  outline: none;
}
.header {
  width: 100%;
  height: 2rem;
  background: #fff;
  padding: 0 0.5rem;
  box-sizing: border-box;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .login {
    width: 3rem;
    height: 1.7rem;
    display: inline-block;
    background: url(../assets/切图/logo.png) no-repeat;
    background-size: contain;
    background-position: center center;
  }
  .pr {
    display: flex;
    span {
      display: flex;
      flex-direction: column;
      margin: 0 0.15rem;
      text-align: center;
      i {
        font-size: 0.5rem;
        color: #999;
      }
      span {
        margin-top: 5px;
        font-size: 0.4rem;
        color: #666;
      }
    }
  }
}
.filter {
  width: 100%;
  overflow: hidden;
  padding: 0;
  border-top: 1px solid #eaeaea;
  border-bottom: 0.3rem solid #eaeaea;
  ul {
    display: flex;
    height: 1.2rem;
    line-height: 1.2rem;
    li {
      width: 25%;
      text-align: center;
      font-size: 16px;
      i {
        font-weight: normal;
        font-size: 0.4rem;
        color: #999;
        margin-left: 0.3rem;
      }
      .icon-search {
        font-size: 0.6rem;
        color: #2bb281;
      }
    }
  }
}
.lists {
  padding: 1% 3% 3% 3%;
  ul {
    li {
      padding: 0.3rem 0;
      .list_son {
        border-bottom: 1px solid #eaeaea;
        display: flex;
        align-items: center;
        img {
          width: 2.2rem;
          height: 2.2rem;
          display: inline-block;
          border-radius: 50%;
          object-fit: cover;
        }
        .list_sons {
          padding-left: 0.2rem;
          width: 73%;
          :nth-child(1) {
            display: flex;
            justify-content: space-between;
            :nth-child(1) {
              display: flex;
              :nth-child(1) {
                color: #333;
                font-size: 18px;
              }
              :nth-child(2) {
                height: 0.4rem;
                padding: 0.1rem 0.2rem;
                margin-left: 0.2rem;
                font-size: 12px;
                border-radius: 4px;
                background: #2bb281;
                color: #fff;
              }
            }
            :nth-child(2) {
              display: flex;
              align-items: center;
              font-size: 14px;
              .on {
                color: #feb505;
              }
              span {
                margin-right: 0.15rem;
              }
            }
          }
          :nth-child(2) {
            display: flex;
            p {
              margin-right: 0.4rem;
              color: #333;
              display: flex;
              font-size: 14px;
              span {
                margin-left: 0.15rem;
                color: #999;
              }
            }
          }
          :nth-child(3) {
            :nth-child(1){
              font-size: 14px;
              color: #333;
              margin-right: .15rem;
            }
            :nth-child(2){
                  color: #999
            }
            span{
              display: inline;
            }
          }
          div {
            margin-bottom: 0.2rem;
            p {
              margin: 0;
              padding: 0;
            }
          }
        }
      }
    }
  }
  .div{
    display: flex;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 16px;
    span{
     flex: 1
    }
    button{
      flex: 1;
      background: #39c894;
      color: #fff;
      border: none;
    }
  }
}
</style>


