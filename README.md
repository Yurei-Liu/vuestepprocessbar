# vuestepprocessbar

## 目的

    在Vue框架中，提供可操作進度步驟的模組，步驟數量、樣式與字體可供使用者調整。

## 安裝

    npm install vuestepprocessbar

## 用法

#### 簡易範例

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
        </div>
    </template>

    <script>
    import VueStepProcessBar from "./VueStepProcessBar.vue";

    export default {
        data() {
          return {
            // 當前步驟
            currentFlow: "",
            // 客製化步驟陣列
            inputStepFlow: [
                { step: 1, label: "第一步驟", role: null, msg: "" },
                { step: 2, label: "第二步驟", role: null, msg: "" },
                { step: 3, label: "第三步驟", role: null, msg: "" },
                { step: 4, label: "第四步驟", role: null, msg: "" },
                { step: 5, label: "第五步驟", role: null, msg: "" },
            ],

            // 客製化樣式
            beforeColor: "",
            mainColor: "",
            dotSize: "",
            stepNoPx: "",
            stepNamePx: "",
          };
        },

        components:{
            VueStepProcessBar,
        },
    }
    </script>

#### 變數用途

| 變 數 名 稱   |      用 途       |
| ------------- | :--------------: |
| currentFlow   |   當前步驟序數   |
| inputStepFlow |    進度條陣列    |
| mainColor     |   進度條主題色   |
| beforeColor   | 未完成步驟的顏色 |
| dotSize       |   步驟圓圈大小   |
| stepNoPx      |  步驟序數字體大  |
| stepNamePx    | 步驟名稱字體大小 |

See [Configuration Reference](https://cli.vuejs.org/config/).
