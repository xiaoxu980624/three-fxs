<template>
    <div class="yezhu">
        <!-- 头部 -->
        <div class="head">
            <div class="img">
                <img src="../assets/切图/logo.png" alt="">
            </div>
            <p>业主评价</p>
            <div class="head-r">
                <i class="iconfont icon-nav f2" ></i><br>
                导航
            </div>
        </div>

        <!-- 业主评价 -->
        <div class="ping">
            <!-- 用户信息 -->
            <div class="ping-top">
              <div class="ping-l">
                  <div class="ping-tuo"> 
                      <i class="iconfont icon-user f1" ></i>
                      <span>x*h</span>
                  </div>
              </div>
              <div class="ping-r">
                  2016-05-19
              </div>
            </div>
            <!-- 评价内容 -->
            <div class="ping-txt">
                <p>这篇文章很实用，正在装修，刚好可以用来参考一下。</p>
            </div>
        </div>
        <!-- CV -->
        <div class="ping">
            <!-- 用户信息 -->
            <div class="ping-top">
              <div class="ping-l">
                  <div class="ping-tuo"> 
                      <i class="iconfont icon-user f1" ></i>
                      <span>z*o</span>
                  </div>
              </div>
              <div class="ping-r">
                  2016-04-11
              </div>
            </div>
            <!-- 评价内容 -->
            <div class="ping-txt">
                <p>喜欢这篇文章很实用。</p>
            </div>
        </div>
        <!-- cv -->
        <div class="ping">
            <!-- 用户信息 -->
            <div class="ping-top">
              <div class="ping-l">
                  <div class="ping-tuo"> 
                      <i class="iconfont icon-user f1" ></i>
                      <span>h*5</span>
                  </div>
              </div>
              <div class="ping-r">
                  2016-05-19
              </div>
            </div>
            <!-- 评价内容 -->
            <div class="ping-txt">
                <p>这个设计师为人很随和，很喜欢他。画图也很仔细，暂时就这些。</p>
            </div>
        </div>

        <div class="ping">
            <!-- 用户信息 -->
            <div class="ping-top">
              <div class="ping-l">
                  <div class="ping-tuo"> 
                      <i class="iconfont icon-user f1" ></i>
                      <span>x*n</span>
                  </div>
              </div>
              <div class="ping-r">
                  2016-02-19
              </div>
            </div>
            <!-- 评价内容 -->
            <div class="ping-txt">
                <p>设计风格简约大气，人很热情，沟通很耐心，极力推荐。</p>
            </div>
        </div>

        <div class="ping">
            <!-- 用户信息 -->
            <div class="ping-top">
              <div class="ping-l">
                  <div class="ping-tuo"> 
                      <i class="iconfont icon-user f1" ></i>
                      <span>z*o</span>
                  </div>
              </div>
              <div class="ping-r">
                  2016-01-10
              </div>
            </div>
            <!-- 评价内容 -->
            <div class="ping-txt">
                <p>空间利用合理，设计风格很喜欢。</p>
            </div>
        </div>

        <div class="ping">
            <!-- 用户信息 -->
            <div class="ping-top">
              <div class="ping-l">
                  <div class="ping-tuo"> 
                      <i class="iconfont icon-user f1" ></i>
                      <span>h*5</span>
                  </div>
              </div>
              <div class="ping-r">
                  2015-12-02
              </div>
            </div>
            <!-- 评价内容 -->
            <div class="ping-txt">
                <p>这个设计师为人很随和，很喜欢他。画图也很仔细，暂时就这些。</p>
            </div>
        </div>

        <!-- 上一页/下一页 -->
        <div class="shang">
            <div class="shang-a">上一页</div>
            <div class="shang-b">2/30</div>
            <div class="shang-c">下一页</div>
        </div>
        <!-- 线 -->
        <div class="xian"></div>
        <!-- 详细介绍 -->
        <div class="jie">
            <p>
                方先森互联网家装有别于传统装修公司与其他装修中介平台，一自营迷失整合
                设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，
                通过直播间环节，提供装修套餐 + 个性化定制服务。
            </p>
        </div>

        <!-- 线 -->
        <div class="xian"></div>

        <div class="foot">
            <p><i class="iconfont icon-hot-line" ></i>服务热线：400-9977-658</p>
            <ul>
                <li style="color:#39c894">触屏版</li>
                <li>电脑版</li>
                <li>关于我们</li>
                <li>联系我们</li>
            </ul>
        </div>
    </div>
</template>
<script>
import "@/assets/iconfont/iconfont.css";
export default {
    
}
</script>
<style lang="scss">
.yezhu{
    width: 100%;
    height: 100%;
    // 头部样式
    .head{
        height: 50px;
        width: 100%;
        display: flex;
        border-bottom: 1px solid #999;
        .img{
            padding-left: 9px;
            padding-top: 8px;
            padding-bottom: 8px;
            box-sizing: border-box;
            img{
            height:34px;
            width: 100px;
            }
        }
        p{
            height: 100%;;
            margin-left: 45px;
        }
        .head-r{
            height: 100%;
            margin-left: 130px;
            margin-top: 8px;
            color: #999;
            font-size: 12px;
            i{
                font-size: 22px;
            }
        }
    }

    .ping{
        width: 100%;
        // height: 150px;
        border-bottom: 1px solid #999;
        padding-top: 18px;
        padding-left: 20px;
        box-sizing: border-box;
        .ping-top{
            display: flex;
            justify-content: space-between;
            .ping-l{
                .ping-tuo{
                    width: 40px;
                    height: 40px;
                    border-radius:50%;
                    background: #dcdcdc;
                    i{
                        color: white;
                        line-height: 40px;
                        margin-left: 9px;
                        font-size:25px;
                    }
                    span{
                        margin-left: 15px;
                        font-size: 25px;
                        color: #39c894;
                    }
                }
            }
            .ping-r{
                margin-right: 10px;
                color: #999;
                line-height: 40px;
            }
        }
        .ping-txt{
            margin-bottom: 20px;
            font-size: 18px;
        }
    }

    .shang{
        padding-top: 20px;
        padding-left: 10px;
        box-sizing: border-box;
        display: flex;
        .shang-a{
            background: #39c894;
            height: 50px;
            width: 130px;
            text-align: center;
            line-height: 50px;
            color: white;
        }
        .shang-b{
            height: 50px;
            width: 130px;
            text-align: center;
            line-height: 50px;
        }
        .shang-c{
            background: #39c894;
            height: 50px;
            width: 130px;
            text-align: center;
            line-height: 50px;
            color: white;
        }
    }
    .xian{
        width: 100%;
        height: 5px;
        background: #ddd;
        margin-top: 10px
    }
    .jie{
        width: 100%;
        padding-top: 10px;
        padding-left: 5px;
        padding-right: 5px;
        box-sizing: border-box;
        p{
            text-indent: 2em;
        }
    }
    .foot{
        width: 100%;
        p{
            height: 50px;
            margin-left: 20px;
            text-align: center;
            line-height: 50px;
            i{
                font-size: 20px;
                color: #39c894;
            }
        }
        ul{
            list-style: none;
            display: flex;
            display: flex;
            justify-content: space-around;
        }
    }
}
</style>

