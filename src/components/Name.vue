<template>
    <div class="name">
        <ul>
            <li class="hover" :class="{twoName:name.length==2}">{{name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'name',
        props:['name'],
        data(){
            return {

            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul{
    z-index: 7;
        li{
            transform: translateX(0rem);
            width: 5rem;
            height: 5rem;
            font-size: 5rem;
        }
}
    .twoName{
        transform: translateX(-.5rem);
        top: -2.5rem;
        line-height: 5rem;
    }
</style>
