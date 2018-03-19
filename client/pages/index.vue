<style scoped>

  .stage {
    margin-top: 50px;
    height: 560px;
    background: url("../assets/images/back.jpg") no-repeat center/100% 100%;
    background-attachment: fixed;
  }

  .stage > div h1 {
    font-family: WaltDisneyScript, sans-serif;
    font-size: 270px;
    letter-spacing: 2px;
    margin-top: -70px;
  }

  .stage > div h2 {
    font-size: 45px;
    letter-spacing: 2px;
    margin-top: -170px;
  }

  .stage > div button {
    border: solid 2px white;
    width: 200px;
    height: 50px;
    background: transparent linear-gradient(60deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3), transparent) no-repeat -200px 0/auto auto;
  }

  .circle {
    border: solid 1px #E6E6E6;
    transition: all .1s;
  }

  .circle:hover {
    border: solid 1px #C8C8C8;
  }

</style>

<template>
  <div>
    <div class="stage full-width relative">
      <div class="center text-center">
        <h1 class="block white cursor-default normal">gracly</h1>
        <h2 class="block white normal">PWA渐进式前端框架</h2>
        <button id="download" class="cursor-pointer white font-18 radius-50">立即下载</button>
      </div>
      <canvas></canvas>
    </div>
    <div class="characteristic white-bg text-center flex  justify-center padding-vertical-30">
      <div v-for="i in introduce" class="text-center margin-auto margin-bottom-15">
        <div class="circle margin-auto margin-bottom-10 size-100 margin-top-20 flex flex-center">
          <i :class=i.tag aria-hidden="true" style="font-size: 44px" class="grey-6"></i>
        </div>
        <span class="black-3 block font-17">{{i.text1}}</span>
        <span class="grey-9 block font-14 line-height-15">{{i.text2}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      introduce: [
        {text1: "丰富的基础组件", text2: "常用的组件被", tag: "fa fa-cogs"},
        {text1: "组件化引用", text2: "丰富的web组件轻松引入"},
        {text1: "WebApp支持", text2: "优雅的WebApp构建方案"},
        {text1: "性能提升", text2: "页面更流畅"}
      ]
    }),
    method: {},
    mounted: function () {
      const canvas = (() => {
        const cs = document.getElementsByTagName("canvas")[0];
        const ctx = cs.getContext("2d");
        const width = document.getElementsByClassName("stage")[0].clientWidth;
        const height = mobileDevice ? 360 : 560;
        cs.height = height;
        cs.width = width;

        class Start {
          constructor(x, y, size, spend, length) {
            this.X = x;
            this.Y = y;
            this.Spend = spend;
            this.Size = size;
            this.Length = length;
            this.random = Math.random;
          }

          create() {
            ctx.beginPath();
            ctx.arc(this.X, this.Y, this.Size, 0, 2 * Math.PI);
            ctx.fillStyle = "white";
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#F0F0F0";
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = "rgba(255,255,255,0.8)";
            ctx.moveTo(this.X - this.Size + 1.5, this.Y - this.Size - 0.2);
            ctx.lineTo(this.X + this.Length, this.Y - this.Length);
            ctx.lineTo(this.X, this.Y + this.Size + 0.5);
            ctx.closePath();
            ctx.fill();
          }

          move() {
            this.Y += this.Spend;
            this.X -= this.Spend;
            this.create(this.X, this.Y);
            if (this.Y > height + 10 && this.X < -10) {
              this.Y = this.random() * -60;
              this.X = this.random() * width + 200;
              this.Size = this.random() + 0.5;
              this.Length = this.random() * 35 + 20;
              this.Spend = this.random() + 1;
            }
          }
        }

//1.2-1.5
        if (mobileDevice) {
          const start1 = new Start(70, -15, 1.5, 0.5, 50);
          start1.create();
          const start2 = new Start(170, 0, 1.2, 1.1, 50);
          start2.create();
          const start3 = new Start(600, -43, 1.2, 1.5, 40);
          start3.create();
          const move = () => {
            ctx.clearRect(0, 0, width, 560);
            start1.move();
            start2.move();
            start3.move();
            startTag && setTimeout(move, 20);
          };
          move()
        } else {
          const start1 = new Start(70, -20, 1.5, 0.5, 50);
          start1.create();
          const start2 = new Start(170, -100, 1.2, 1.1, 50);
          start2.create();
          const start3 = new Start(600, -3, 1.2, 1.5, 40);
          start3.create();
          const start4 = new Start(870, -70, 1.2, 1, 50);
          start4.create();
          const start5 = new Start(1270, -55, 1.3, 1, 38);
          start5.create();
          const start6 = new Start(300, -10, 1.2, 1, 46);
          start6.create();
          const move = () => {
            ctx.clearRect(0, 0, width, 560);
            start1.move();
            start2.move();
            start3.move();
            start4.move();
            start5.move();
            start6.move();
            startTag && setTimeout(move, 20);
          };
          move()
        }
      })();
      const button = (() => {
        const obj = getId("download");
        let lock = 0;
        let hover = 0;
        const buttonLight = () => {
          let x = -200;
          return () => {
            if (lock === 0) {
              lock = 1;
              const move = () => {
                if (x < 200) {
                  x += 10;
                  obj.style.background = `linear-gradient(60deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3), transparent) no-repeat ${x}px 0/auto auto`;
                  setTimeout(move, 10);
                }
                else {
                  obj.style.background = `linear-gradient(60deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3), transparent) no-repeat -200px 0/auto auto`;
                  x = -200;
                  lock = 0;
                }
              };
              setTimeout(move, 0)
            }
          }
        };
        setTimeout(buttonLight(), 1000);
        obj.onmousemove = e => hover === 0 && buttonLight()() || (() => hover = 1)();
        obj.onmouseout = e => hover = 0;
      })();
    }
  }
</script>
