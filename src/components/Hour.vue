<template>
    <div class="hour">
        <ul :style="{transform:`rotate(${(rotates-1)* -30}deg)`}">
            <li v-for="(item,index) in hourList" :key="index" :class="{hover:index== rotates - 1}">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'hour',
        props:['hour'],
        data(){
            return {
                rotates:''
            }
        },
        computed:{
            hourList:{
                get(){
                    console.log(this.$t('hour'));
                    return this.$t('hour')
                }
            }
        },
        watch:{
            hour(val){
                console.log(val);
                this.rotates=val;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul{
    z-index: 7;
    @for $i from 1 through 12{
        li:nth-child(#{$i}){
            transform: rotate(#{($i - 1)*30deg}) translateX(160px);
        }
    }
}
</style>
