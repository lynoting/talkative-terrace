<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <h3 class="duration-demo">襟巻きに灰</h3>
    <p class="duration-demo">underconstruction</p>

    <ul>
      <li>
        <p class="specific-prop-params-demo" style="text-align: center;">
          ＊
        </p>
      </li>

      <li>
        <p class="duration-demo">
          祝祭を雪の原野をゆく馬をなだめつつなおも寝られぬ夜を
        </p>
      </li>

      <li>
        <p class="duration-demo">
          中空にひらく無言のゆきばなを摘みとってゆく指さきに紅
        </p>
      </li>

      <li>
        <p class="duration-demo">
          長々とあくびしている右頬にあわく火の粉を取り憑かせつつ
        </p>
      </li>

      <li>
        <p class="duration-demo">
          篝火を振り回すなよだいじょうぶ代わりに鐘が刻をかぞえる
        </p>
      </li>

      <li>
        <p class="duration-demo">
          Crescendo使いふるしの鍵盤の焚べられたあとに弾け出る音
        </p>
      </li>

      <li>
        <p class="duration-demo">
          はにかんでまだ踊らない子どもらの耳朶に遥かなドラムのふれる
        </p>
      </li>

      <li>
        <p class="duration-demo">
          星月夜乾いた肺にあらかじめいななきを込めて駆ける旅びと
        </p>
      </li>

      <li>
        <p class="duration-demo">
          魘されてねごともいわぬマグノリア灯されるまえの蝋を保って
        </p>
      </li>

      <li>
        <p class="duration-demo">
          光る鳥つばさをたたみ赤熱のくちばしで一度きりの甘噛み
        </p>
      </li>

      <li>
        <p class="duration-demo">
          難解なあいさつをして去りぎわの襟巻きに灰をつもらせている
        </p>
      </li>

      <li>
        <p class="duration-demo">
          陸離たる丘を疾く行けあかねさす光は決してひとを待たない
        </p>
      </li>

      <li>
        <p class="duration-demo">
          まなぶたに緋色の透けて鳴りおえた楽器としての霜に足跡
        </p>
      </li>

      <li>
        <p class="specific-prop-params-demo" style="text-align: center;">
          ＊
        </p>
      </li>
    </ul>
    <div style="height:100px; margin: 0 10px; display: inline-block;"></div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    startRandomizer() {
      anime({
        targets: ".duration-demo",
        // translateX: 250,
        translateY: 50,
        duration: 3000,
      });
      anime({
        targets: ".specific-prop-params-demo",
        translateY: {
          value: 50,
          duration: 800,
        },
        rotate: {
          value: 360,
          duration: 1800,
          easing: "easeInOutSine",
        },
        delay: 250, // All properties except 'scale' inherit 250ms delay
      });
    },
  },
  mounted() {
    this.startRandomizer();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
h3 {
  margin: 40px 0 0;
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 20px;
  padding-top: 50px;
}
a {
  color: #42b983;
}
.square {
  width: 10px;
  height: 10px;
  background: #ffffff;
  margin: 0 10px;
  display: inline-block;
}
</style>
