<template>
    <div class="box">
        <div class="header">
            <div class="img">
                 <img src="../assets/切图/logo.png" alt="" class="img">
            </div>
            <div class="we">
                <h2>关于我们</h2>
            </div>
              <div class="icon1">
                      <van-icon name="contact" size="33px"/>
                      <br>
                      <span>我的</span>
                 </div>
                 <div class="icon2">
                      <van-icon name="wap-nav" size="33px"/>
                      <br>
                      <span>导航</span>
                 </div>
        </div>
         <div class="img_box">
           <img src="../assets/切图/10quoted.jpg" alt="" class="imgs">
         </div>
         <div class="fxs">
             <p>房先森简介</p>
             <div class="fxs_list">
                <p class="p1">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;房先森互联网装修平台由杭州
		房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐 + 个性化定制服务。房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐 + 个性化定制服务。
	</p>
             </div>
         </div>
         <div class="we_list">
             <h1>我们是谁，我们如何与众不同？</h1>
             <img src="../assets/切图/2.png" class="img_we"  alt="">
         </div>
    </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
export default {
    data() {
        return {

        };
    },
    mounted() {

    },
    methods: {

    },
};
</script>

<style>
.box{
    width: 100%;
    height: 100%;
}
.header{
    width: 100%;
    height: 80px;
    /* background: rebeccapurple; */
    display: flex;
}
.img{
    width: 120px;
    height: 60px;
    margin-top: 10px;
}
h2{
    /* text-align: center; */
    margin-top: 40px;
  line-height: 20px;
    /* margin-left: 20px; */
    /* line-height: 80px; */

}
.icon1{
    width: 50px;
    height: 80px;
    /* display: flex; */
    /* background: yellow; */
    padding-left: 80px;
    padding-top: 20px;
}
.icon2{
    width: 50px;
    height: 80px;
    /* background: pink; */
    padding-top: 20px;
    padding-left: 40px;
}
.we{
    width: 150px;
    height: 80px;
    /* background: red; */
}
.img_box{
    width: 100%;
    height: 200px;
    /* background: red; */
}
.imgs{
     width: 100%;
    height: 200px;
}
.fxs{
    width: 100%;
    height: 200px;
    /* background: darkorange; */
}
p{
    text-align: center;
    font-size: 24px;
}
.fxs_list{
    width: 100%;
    height: 200px;
    /* background: red; */
}
.p1{
    font-size: 16px;
}
.we_list{
    margin-top: 40px;
    width: 100%;
    height: 200px;
    /* background: blue; */
}
h1{
    font-size: 20px;
    text-align: center;
}
.img_we{
    width: 100%;
    height: 400px;
}
</style>
