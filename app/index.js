import Vue from 'vue';

let root_tmpl = `
<div>
  Hello World! This Burger Come From Shawn!
</div>
`
let Root = Vue.extend({
  template: root_tmpl
})

new Root().$mount('#app');