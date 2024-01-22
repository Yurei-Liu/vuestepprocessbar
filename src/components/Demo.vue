<template>
  <div>
    <VueStepProcessBar
      :currentFlow="currentFlow"
      :inputStepFlow="inputStepFlow"
      :beforeColor="beforeColor"
      :mainColor="mainColor"
      :dotSize="dotSize"
      :stepNoPx="stepNoPx"
      :stepNamePx="stepNamePx"
    />

    <p style="margin-top: 15%; font-weight: bold">Customized Step Process Items</p>
    <div style="width: 90%; margin-left: 5vw; border: 1px #bebebe solid; border-radius: 5px">
      <div style="margin-top: 5vh; justify-content: center">
        <label>Step Number :</label>
        <input style="margin-left: 1vw" v-model="inputStepNo" />
        <label style="margin-left: 2vw">Step Name :</label>
        <input style="margin-left: 1vw" v-model="inputStepName" />
      </div>
      <div style="margin-top: 3vh; margin-bottom: 5vh; justify-content: center">
        <label style="margin-left: 1vw">Current Flow：</label>
        <input style="margin-left: 1vw" v-model="currentFlow" />
      </div>
    </div>

    <p style="margin-top: 8vh; font-weight: bold">Customized Style</p>
    <div style="width: 90%; margin-left: 5vw; border: 1px #bebebe solid; border-radius: 5px">
      <div style="justify-content: center; margin-top: 5vh">
        <label>Process Bar Main Color :</label>
        <input style="margin-left: 1vw" v-model="mainColor" />
        <label style="margin-left: 2vw">Incomplete Step Color :</label>
        <input style="margin-left: 1vw" v-model="beforeColor" />
      </div>
      <div style="justify-content: center; margin-top: 3vh">
        <label>Step Dot Size :</label>
        <input style="margin-left: 1vw" v-model="dotSize" />
      </div>
      <div style="justify-content: center; margin-top: 3vh">
        <label>Step Name Font Size(px) :</label>
        <input style="margin-left: 1vw" v-model="stepNamePx" />
      </div>
      <div style="justify-content: center; margin-top: 3vh; margin-bottom: 5vh">
        <label>Step Number Font Size(px) :</label>
        <input style="margin-left: 1vw" v-model="stepNoPx" />
      </div>
    </div>
    <div class="domeBtnArea">
      <button style="margin-left: 2vw" type="button" @click="submit()">Submit</button>
      <button style="margin-left: 2vw; cursor: pointer" type="button" @click="reset()">Reset</button>
    </div>
  </div>
</template>

<script>
import VueStepProcessBar from "./VueStepProcessBar.vue";

export default {
  name: "Demo",
  data() {
    return {
      currentFlow: "",
      inputStepFlow: [
        { step: 1, label: "第一步驟", role: null, msg: "" },
        { step: 2, label: "第二步驟", role: null, msg: "" },
        { step: 3, label: "第三步驟", role: null, msg: "" },
        { step: 4, label: "第四步驟", role: null, msg: "" },
        { step: 5, label: "第五步驟", role: null, msg: "" },
      ],
      inputStepNo: "",
      inputStepName: "",

      // Customized style
      beforeColor: "",
      mainColor: "",
      dotSize: "",
      stepNoPx: "",
      stepNamePx: "",
    };
  },

  components: {
    VueStepProcessBar,
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {},

    submit() {
      console.log(parseInt(this.inputStepNo));
      if (this.inputStepNo && this.inputStepName) {
        let flowObj = {
          step: parseInt(this.inputStepNo),
          label: this.inputStepName,
        };
        this.inputStepFlow.push(flowObj);
      }

      if (!this.currentFlow) this.currentFlow = 0;
    },

    reset() {
      this.inputStepFlow = [];
      this.currentFlow = 1;
      this.inputStepNo = "";
      this.inputStepName = "";
    },
  },
};
</script>

<style scoped>
.domeBtnArea {
  margin-top: 7vh;
  justify-content: center;
  cursor: pointer;
}
</style>
