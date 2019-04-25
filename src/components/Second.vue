<template>
  <div class="hello">
    <ul :style="{transform:`rotate(${rotates * -6}deg)`}">
      <li v-for="(item,index) in secondList" :key="index" :class="{hover:index== rotates}">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'second',
  props:["second"],
    data(){
      return{
          rotates:''
      }
    },
    computed:{
        secondList:{
            get(){
                return this.$t('second')
            }
        }
    },
    watch:{
      second(val){
          this.rotates = val;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul{
  z-index: 9;
  @for $i from 1 through 60{
    li:nth-child(#{$i}){
      transform: rotate(#{(($i) - 1)*6deg}) translateX(300px);
    }
  }
}
</style>
