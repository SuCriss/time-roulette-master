<template>
  <div class="home">
    <Second :second="second" />
    <Minute :minute="minute" />
    <Hour :hour="hour" />
    <Name :name="name" />
  </div>
</template>

<script>
// @ is an alias to /src
import Second from '@/components/Second.vue'
import Minute from '@/components/Minute.vue'
import Hour from '@/components/Hour.vue'
import Name from '@/components/Name.vue'
import Setting from '@/components/Setting.vue'

export default {
  name: 'home',
  components: {
      Second,
      Minute,
      Hour,
      Name,
      Setting
  },
  data(){
      return {
          second:'',
          minute:'',
          hour:'',
          name:''
      }
  },
    methods:{
      start(){
          setInterval(()=>{
              let date = new Date();
              this.second = date.getSeconds();
              this.minute = date.getMinutes();
              console.log(this.hour);
              this.hour = date.getHours();
          },1000)
      }
    },
    created(){
      this.$Modal.prompt({ title: '温馨提示', content: '请填写您的姓氏：',cancelText:'取消',okText:'确定',maskClosable:false})
          .then((data)=>{
              this.name = data.value;
          }).catch(()=>{
          console.log(this.$t('name'));
          let nameList = this.$t('name');
          let idx = Math.ceil(Math.random()*509)
          this.name= nameList[idx];
      })
      this.start()
    }
}
</script>
<style lang="scss">
    ul{
        list-style-type: none;
        padding: 0!important;
        position: absolute;
        top: 0px;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto!important;
        height: 60px;
        width: 60px;
        transition: 0.1s 0.1s ease-in;
        li{
            position: absolute;
            height: 60px;
            width: 60px;
            color: #fff;
            text-align: center;
            font-size: 14px;
            line-height: 60px;
            &.hover{
                text-shadow: rgb(255,255,255) 0 0 10px,
            rgb(255,255,255) 0 0 20px,rgb(255,0,222) 0 0 30px,
            rgb(255, 0, 222) 0px 0px 40px, rgb(255, 0, 222) 0px 0px 70px,
            rgb(255, 0, 222) 0px 0px 80px, rgb(255, 0, 222) 0px 0px 100px;
            }
        }
    }
</style>
