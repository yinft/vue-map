import Vue from 'vue'
import App from './App.vue'
import VueAMap from 'vue-amap';


Vue.config.productionTip = false


Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'dd708576aac75e02e2ad604296d60b6b',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
