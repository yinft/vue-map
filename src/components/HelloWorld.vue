<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

<div class="amap-page-container">
      <el-amap vid="amapDemo"  class="amap-demo">
        
        <!-- <el-amap-marker   :position="marker1.position"  :events="marker1.events" :visible="marker1.visible" :draggable="marker1.draggable" :vid='marker1.vid' ></el-amap-marker> -->
      </el-amap>
</div>
  <div v-show="show">测试div</div>
  </div>






</template>

<script>
import { lazyAMapApiLoaderInstance } from "vue-amap";
import { WSAESHUTDOWN } from "constants";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },

  data() {
    return {
      show: false
    };
  },

  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      //初始化地图
      this.map = new AMap.Map("amapDemo", {
        resizeEnable: true,

        zoom: 17,
        center: [119.331132, 32.146321],
        layers: [
          //使用卫星图层
          new AMap.TileLayer.Satellite()
        ]
      });

      // 构造点标记
      var marker1 = new AMap.Marker({
        icon:
          "	https://img-1255851908.cos.ap-shanghai.myqcloud.com/lALPDgQ9quAXipM3Nw_55_55.png_620x10000q90g.png",
        position: [119.33252, 32.14781]
      });
      marker1.on("click", showInfo);
      function showInfo() {
        this.show = true;
        console.log(this.show);
      }

      var marker2 = new AMap.Marker({
        icon:
          "	https://img-1255851908.cos.ap-shanghai.myqcloud.com/lALPDgQ9quAXipM3Nw_55_55.png_620x10000q90g.png",
        position: [119.33392, 32.14801]
      });

      var marker3 = new AMap.Marker({
        icon:
          "	https://img-1255851908.cos.ap-shanghai.myqcloud.com/lALPDgQ9quAXipM3Nw_55_55.png_620x10000q90g.png",
        position: [119.32812, 32.14571]
      });

      var marker4 = new AMap.Marker({
        icon:
          "	https://img-1255851908.cos.ap-shanghai.myqcloud.com/lALPDgQ9quAV8XU3Nw_55_55.png_620x10000q90g.png",
        position: [119.33152, 32.14581]
      });

      var marker5 = new AMap.Marker({
        icon:
          "	https://img-1255851908.cos.ap-shanghai.myqcloud.com/lALPDgQ9quAV8XU3Nw_55_55.png_620x10000q90g.png",
        position: [119.33252, 32.14601]
      });

      var marker6 = new AMap.Marker({
        icon:
          "	https://img-1255851908.cos.ap-shanghai.myqcloud.com/lALPDgQ9quAV8XU3Nw_55_55.png_620x10000q90g.png",
        position: [119.33352, 32.14611]
      });

      this.map.add([marker1, marker2, marker3, marker4, marker5, marker6]);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.amap-demo {
  height: 600px;
}
</style>
