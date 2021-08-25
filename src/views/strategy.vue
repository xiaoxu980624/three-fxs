<template>
    <div class="strategy">
        <div class="code"></div>
        <!---->
        <div class="ipt">
            <input class="ip" type="text" placeholder="请输入关键字">
            <button class="bt">搜索</button>
        </div>
        <!---->
        <div class="zhuangx">
            <ul class="qhz">
                <li>
                    <a>装修前</a>
                </li>
                <li>
                    <a>装修中</a>
                </li>
                <li>
                    <a>装修后</a>
                </li>
            </ul>
            <!---->
            <div class="si">
                <div class="sig">
                    <div class="yuan">
                        <i class="iconfont icon-house"></i>
                    </div>
                    <p class="tit">收房验房</p>
                </div>
                <div class="sig">
                    <div class="yuan">
                        <i class="iconfont icon-budget"></i>
                    </div>
                    <p class="tit">装修预算</p>
                </div>
                <div class="sig">
                    <div class="yuan">
                        <i class="iconfont icon-taiji"></i>
                    </div>
                    <p class="tit">装修风水</p>
                </div>
                <div class="sig">
                    <div class="yuan">
                        <i class="iconfont icon-designer"></i>
                    </div>
                    <p class="tit">装修设计</p>
                </div>
            </div>
            <!---->
            <div class="liuc">了解装修流程</div>
        </div>
        <!---->
        <div class="di">
          <p class="di-p">为您推荐</p>
          <div class="he" v-for="(item,index) in 10" :key="index">
           <div class="left"></div>
           <div class="right"></div>
          </div>
        </div>
    </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss" >
.left{
    width: 30%;
    height: 100%;
    background: #2bb281;
}
.right{
    flex: 1;
    background:hotpink;
    margin-left: 10px;
}
.he{
    width: 100%;
    height: 125px;
    background: red;
    display: flex;
    padding: 10px 5px;
    border-bottom: 1px solid #eaeaea;
}
.di{
    width: 100%;
    height: 100%;
    background: white;
    margin-top: 10px;
}
.di-p{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0px 10px;
}
.si {
  width: 100%;
  display: flex;
  margin-top: 10px;
}
.sig {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.tit {
  width: 90%;
  height: 30px;
  display: inline-block;
  text-align: center;
  line-height: 30px;
  margin: 10px 0px;
}
.yuan {
  width: 80%;
  height: 80px;
  border: 3px solid #39c894;
  border-radius: 50%;
  display: flex;
  justify-content: space-around;
  i {
    font-size: 40px;
    line-height: 75px;
    color: #39c894;
  }
}
.liuc {
  width: 100%;
  height: 40px;
  border: 1px solid #39c894;
  color: #39c894;
  text-align: center;
  line-height: 40px;
}
.qhz {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.zhuangx {
  width: 100%;
  height: 250px;
  background: white;
  margin-top: 10px;
  padding: 0 10px;
}
.bt {
  width: 30%;
  height: 50px;
  background: #2bb281;
  color: white;
  border: none;
}
.ip {
  width: 70%;
  height: 50px;
  border: 1px solid #2bb281;
  padding: 0 10px;
}
.ipt {
  width: 100%;
  height: 80px;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.strategy {
  width: 100%;
  height: 100%;
  background: #eaeaea;
}
.code {
  width: 100%;
  height: 80px;
  background: #2bb281;
}
</style>
