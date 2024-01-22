<template>
  <div>
    <div v-if="stepFlow.length > 0" style="margin-top: 100px; margin-bottom: 100px">
      <div class="stepArea">
        <div class="stepItem" v-for="(flow, index) in stepFlow" :key="index">
          <!-- 流程節點 -->
          <div
            :class="stepCurrentFlow > index || stepCurrentFlow + 1 == stepFlow.length ? 'dotAfter' : stepCurrentFlow == index ? 'dotActive' : 'dot'"
          >
            <span :class="stepCurrentFlow < index || stepCurrentFlow > index || stepCurrentFlow + 1 == stepFlow.length ? 'stepNo' : 'stepNoActive'">{{
              flow.step
            }}</span>
          </div>

          <!-- 連結線 -->
          <div :class="stepCurrentFlow >= index + 1 ? 'lineActive' : 'line'" v-show="index !== stepFlow.length - 1"></div>

          <!-- 流程名稱 -->
          <div class="" style="justify-content: center">
            <p class="mt-3" :class="stepCurrentFlow >= index ? 'stepNameActive' : 'stepName'">{{ flow.label }}</p>
          </div>
        </div>
      </div>
      <div class="btnArea">
        <button v-if="stepCurrentFlow + 1 !== stepFlow.length" class="btnNext" type="button" @click="execute()">下一步</button>
        <button v-if="stepCurrentFlow + 1 > 1" class="btnPre" type="button" @click="rollback()">上一步</button>
      </div>
    </div>
    <div v-else style="margin-top: 100px; margin-bottom: 100px">
      <p style="font-size: 20px">Please insert the step process.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueStepProcessBar",
  props: ["inputStepFlow", "currentFlow", "beforeColor", "mainColor", "dotSize", "stepNoPx", "stepNamePx"],
  data() {
    return {
      stepFlow: "",
      stepCurrentFlow: "",
    };
  },

  watch: {
    inputStepFlow() {
      this.stepFlow = this.inputStepFlow;
    },

    currentFlow() {
      this.stepCurrentFlow = this.currentFlow - 1;
    },

    // 未完成底色
    beforeColor() {
      console.log(this.beforeColor);
      this.setBarStyle();
    },

    // 進度條主色
    mainColor() {
      console.log(this.mainColor);
      this.setBarStyle();
    },

    // 流程節點-寬
    dotWidth() {
      console.log(this.dotWidth);
      this.setBarStyle();
    },

    // 流程節點-高
    dotHeight() {
      console.log(this.dotHeight);
      this.setBarStyle();
    },

    // 流程序數
    stepNoPx() {
      console.log(this.stepNoPx);
      this.setBarStyle();
    },

    // 流程名稱
    stepNamePx() {
      console.log(this.stepNamePx);
      this.setBarStyle();
    },
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.setFlow();
      this.setBarStyle();
    },

    setFlow() {
      this.stepFlow = this.inputStepFlow;
      this.stepCurrentFlow = this.currentFlow - 1;
    },

    setBarStyle() {
      // 未完成底色
      if (this.beforeColor) {
        document.getElementsByTagName("body")[0].style.setProperty("--beforeColor", this.beforeColor);
      } else {
        document.getElementsByTagName("body")[0].style.setProperty("--beforeColor", "#bebebe");
      }

      // 進度條主色
      if (this.mainColor) {
        document.getElementsByTagName("body")[0].style.setProperty("--mainColor", this.mainColor);
      } else {
        document.getElementsByTagName("body")[0].style.setProperty("--mainColor", "#009100");
      }

      // 流程節點大小
      if (this.dotSize) {
        // 寬
        let dotWidth = this.dotSize + "px";
        // 高
        let dotHeight = dotWidth;
        // 768 的 高
        let dotWidthForMax768 = parseInt(dotWidth) - 15;
        dotWidthForMax768 = dotWidthForMax768.toString() + "px";
        // 768 的 寬
        let dotHeightForMax768 = dotWidthForMax768;

        document.getElementsByTagName("body")[0].style.setProperty("--dotWidth", dotWidth);
        document.getElementsByTagName("body")[0].style.setProperty("--dotHeight", dotHeight);
        document.getElementsByTagName("body")[0].style.setProperty("--dotWidthForMax768", dotWidthForMax768);
        document.getElementsByTagName("body")[0].style.setProperty("--dotHeightForMax768", dotHeightForMax768);
      } else {
        document.getElementsByTagName("body")[0].style.setProperty("--dotWidth", "70px");
        document.getElementsByTagName("body")[0].style.setProperty("--dotHeight", "70px");
        document.getElementsByTagName("body")[0].style.setProperty("--dotWidthForMax768", "55px");
        document.getElementsByTagName("body")[0].style.setProperty("--dotHeightForMax768", "55px");
      }

      // 流程序數
      if (this.stepNoPx) {
        let stepNoPx = this.stepNoPx + "px";
        document.getElementsByTagName("body")[0].style.setProperty("--stepNoPx", stepNoPx);
        let stepNoPxForMax768 = parseInt(this.stepNoPx) - 15;
        stepNoPxForMax768 = stepNoPxForMax768.toString() + "px";
        document.getElementsByTagName("body")[0].style.setProperty("--stepNoPxForMax768", stepNoPxForMax768);
      } else {
        document.getElementsByTagName("body")[0].style.setProperty("--stepNoPx", "60px");
        document.getElementsByTagName("body")[0].style.setProperty("--stepNoPxForMax768", "45px");
      }

      // 流程名稱
      if (this.stepNamePx) {
        let stepNamePx = this.stepNamePx + "px";
        document.getElementsByTagName("body")[0].style.setProperty("--stepNamePx", stepNamePx);
        let stepNamePxForMax768 = stepNamePx;
        document.getElementsByTagName("body")[0].style.setProperty("--stepNamePxForMax768", stepNamePxForMax768);
      } else {
        document.getElementsByTagName("body")[0].style.setProperty("--stepNamePx", "20px");
        document.getElementsByTagName("body")[0].style.setProperty("--stepNamePxForMax768", "20px");
      }
    },

    execute() {
      this.stepCurrentFlow = this.stepCurrentFlow + 1;
    },

    rollback() {
      this.stepCurrentFlow = this.stepCurrentFlow - 1;
    },
  },
};
</script>

<style lang="scss" scoped>
// 未完成底色
$beforeColor: var(--beforeColor, #bebebe);
// 進度條主色
$mainColor: var(--mainColor, #009100);
// 流程節點
$dotWidth: var(--dotWidth, 70px);
$dotHeight: var(--dotHeight, 70px);
// 流程序數
$stepNoPx: var(--stepNoPx, 60px);
// 流程名稱
$stepNamePx: var(--stepNamePx, 20px);

// 縮放後的Style
$dotWidthForMax768: var(--dotWidthForMax768, 55px);
$dotHeightForMax768: var(--dotHeightForMax768, 55px);
$stepNoPxForMax768: var(--stepNoPxForMax768, 45px);
$stepNamePxForMax768: var(--stepNamePxForMax768, 20px);

.stepArea {
  width: 90%;
  height: 22vh;
  margin-left: 5%;
  display: flex;
  justify-content: center;
}

.stepItem {
  width: 180px;
  height: 55px;
  float: left;
  text-align: center;
  position: relative;
  margin-bottom: 0;
  margin-top: 2vh;
}

/* 流程節點：未完成 */
.dot {
  width: $dotWidth;
  height: $dotHeight;
  border-radius: 50%;
  border: 5px $beforeColor solid;
  background: $beforeColor;
  margin: 0 auto;
  padding-top: 5px;
  position: relative;
  z-index: 1000;
  transition: 0.5s;
}

/* 流程節點：當前流程 */
.dotActive {
  width: $dotWidth;
  height: $dotHeight;
  border-radius: 50%;
  border: 5px $mainColor solid;
  background: #ffffff;
  margin: 0 auto;
  padding-top: 5px;
  position: relative;
  z-index: 1000;
  transition: 0.5s;
}

/* 流程節點：已完成 */
.dotAfter {
  width: $dotWidth;
  height: $dotHeight;
  border-radius: 50%;
  border: 5px $mainColor solid;
  background: $mainColor;
  margin: 0 auto;
  padding-top: 5px;
  position: relative;
  z-index: 1000;
  transition: 0.5s;
}

/* 連結線：未完成 */
.line {
  position: absolute;
  top: 65%;
  left: 50%;
  border-bottom: 8px solid $beforeColor;
  width: 100%;
  z-index: 999;
  transition: 0.5s;
}

/* 連結線：已完成 */
.lineActive {
  position: absolute;
  top: 65%;
  left: 50%;
  border-bottom: 8px solid $mainColor;
  width: 100%;
  z-index: 999;
  transition: 0.5s;
}

/* 流程序數：未完成 */
.stepNo {
  font-size: $stepNoPx;
  font-weight: bold;
  color: white;
}

/* 流程序數：當前流程 */
.stepNoActive {
  font-size: $stepNoPx;
  font-weight: bold;
  color: $mainColor;
}

/* 流程名稱：未完成 */
.stepName {
  width: 63%;
  margin: 10% auto;
  font-size: $stepNamePx;
  font-weight: 900;
  color: $beforeColor;
  transition: 0.5s;
}

/* 流程名稱：已完成 */
.stepNameActive {
  width: 63%;
  margin: 10% auto;
  font-size: $stepNamePx;
  font-weight: 900;
  color: $mainColor;
  transition: 0.5s;
}

.btnArea {
  margin-top: 6%;
  margin-right: 5%;
  float: right;
}

.btnNext {
  margin-right: 10px;
  width: 75px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  background-color: rgb(0, 0, 255);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.btnNext:focus {
  border: 3px rgb(107, 183, 245) solid;
  transition: 0.1s;
}

.btnPre {
  width: 75px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  background-color: rgba(255, 0, 0, 0.897);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.btnPre:focus {
  border: 3px rgb(253, 118, 118) solid;
  transition: 0.1s;
}

@media (max-width: 768px) {
  .dot,
  .dotAfter,
  .dotActive {
    width: $dotWidthForMax768;
    height: $dotHeightForMax768;
  }

  .line,
  .lineActive {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .stepNo,
  .stepNoActive {
    font-size: $stepNoPxForMax768;
  }

  .stepName,
  .stepNameActive {
    font-size: $stepNamePxForMax768;
    font-weight: 900;
  }
}
</style>
