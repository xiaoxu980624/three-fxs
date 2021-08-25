<template>
    <div class="box">
        <div class="box_list">
             <div class="img">
                 <img src="../assets/切图/logo.png"  class="imgs" alt="">
             </div>
             <div class="wen">
                 <p>装修流程</p>
             </div>
             <div class="daohang">
                 <div class="list1">
                     <i class="iconfont icon-user f1" style="width:200px;height:200px"></i>
                      <p>我的</p>
                 </div>
                 <div class="list2">
                     <i class="iconfont icon-nav f2" id="i1" ></i>
                     <p>导航</p>
                 </div>
             </div>
        </div>
        <div class="banner">
            <img src="../assets/切图/process/process1.jpg" alt="" style="width:100%;height:200px">
        </div>
        <div class="banner_list">
                <img src="../assets/切图/process/process2.jpg" alt="" style="width:100%;height:400px">
                <img src="../assets/切图/process/process3.png" alt="" style="width:100%;height:400px">
                <img src="../assets/切图/process/process4.jpg" alt="" style="width:100%;height:400px">
        </div>
        <div class="foot">
             <p>&nbsp;&nbsp;&nbsp;&nbsp;房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务</p>
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
.box_list{
    display: flex;
    width: 100%;
    height: 80px;
    /* background: red; */
}
.img{
    box-sizing: border-box;
    margin-top: 10px;
    width: 150px;
    height: 80px;
    /* background: yellow; */
}
.imgs{
     width: 100px;
    height: 60px;
    margin-left: 20px；
}
.wen{
    width: 100px;
    height: 80px;
    /* background: yellowgreen;  */
    text-align: center;
    line-height: 80px;
}
.daohang{
    display: flex;
    width: 200px;
    height: 80px;
    /* background: salmon; */
}
.list1{
    width: 80px;
    height: 80px;
    /* background: skyblue; */
    margin-left: 20px;
}
.list2{
    width: 80px;
    height: 80px;
    /* background: slateblue; */
}
#i{
    /* width: 100px; */
   margin-left: 30px;
   margin-top: 30px;
}
#i1{
    /* width: 100px; */
   margin-left: 30px;
  padding-top: 30px;
}
p{
    text-align: center;
}
.banner{
    width: 100%;
    height: 200px;
    /* background: yellowgreen;; */
}
.banner_list{
    width: 100%;
    height: 1200px;
    /* background: red; */
}
.foot{
    width: 100%;
    height: 200px;
    /* background: skyblue; */
    margin-top: 20px;
}
body{
    background: #999999
}
</style>
