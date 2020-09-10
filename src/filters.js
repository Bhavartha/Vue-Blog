import Vue from 'vue'

Vue.filter('limit50',(val)=>{
    return val.slice(0,50)+"...";
});