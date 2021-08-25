<template>
    <div class="dec">  
              <!--头部 -->
   <div class="header">
           <a href="javascript:;" class="login"></a>
           <span class="name">装修预算</span>
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
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
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
  .name {
    font-size: 20px;
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
</style>


