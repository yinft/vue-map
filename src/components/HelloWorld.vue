<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

<div class="amap-page-container">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
        
        <el-amap-marker  :position="marker1.position"  :events="marker1.events" :visible="marker1.visible" :draggable="marker1.draggable" :vid='marker1.vid' ></el-amap-marker>
      </el-amap>
</div>

  </div>






</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      count: 1,
      slotStyle: {
        padding: "2px 8px",
        background: "#eee",
        color: "#333",
        border: "1px solid #aaa"
      },
      zoom: 17,
      center: [119.330532, 32.146321],
      marker1: {
        vid: "1",

        icon:
          "https://img-1255851908.cos.ap-shanghai.myqcloud.com/lALPDgQ9quAXipM3Nw_55_55.png_620x10000q90g.png",
        position: [119.33252, 32.14781],
        events: {
          click: () => {
            alert("click marker1");
          }
        },

        draggable: false,
        template: "<span>1</span>"
      },
      marker2: {
        position: [119.33392, 32.14801],
        events: {
          click: () => {
            alert("click marker2");
          }
        },
        visible: true,
        draggable: false,
        template: "<span>1</span>"
      },
      marker3: {
        position: [119.32812, 32.14571],
        events: {
          click: () => {
            alert("click marker3");
          }
        },
        visible: true,
        draggable: false,
        template: "<span>1</span>"
      },
      marker4: {
        position: [119.33152, 32.14581],
        events: {
          click: () => {
            alert("click marker4");
          }
        },
        visible: true,
        draggable: false,
        template: "<span>1</span>"
      },
      marker5: {
        position: [119.33252, 32.14601],
        events: {
          click: () => {
            alert("click marker5");
          }
        },
        visible: true,
        draggable: false,
        template: "<span>1</span>"
      },
      marker6: {
        position: [119.33352, 32.14611],
        events: {
          click: () => {
            alert("click marker6");
          }
        },
        visible: true,
        draggable: false,
        template: "<span>1</span>"
      }
    };
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
  height: 500px;
}
</style>
