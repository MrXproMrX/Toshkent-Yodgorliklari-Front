<template>
  <section>
    <div class="olimlar_in__list">
      <section v-for="item in olimlarList" :key="item.id" class="olimlar_in__item__list" :class="{active:(item.id == active && activeNone)}">
        <div class="olimlar_in__item__img">
          <img :src="item.imgs" :alt="item.title">
        </div>

        <div class="olimlar_in__item__text">
          <h3 class="olimlar_in__name">
            {{ item.name }}
          </h3>
          <h4 class="olimlar_in__title__h4">
            {{ item.title }}
          </h4>

          <div class="olimlar_in__text clearfix" v-html="item.text" />
        </div>

        <button class="olimlar_in__open" @click="open(item.id)">
          <fa :icon="['fas', 'chevron-down']" />
        </button>
      </section>
    </div>
    {{ nextNone }}
  </section>
</template>

<script>
export default {
  props: {
    olimlarList:{
      type:Array,
      required:true,
      default:() => []
    }
  },

  data(){
    return{
      active:null,
      activeNone:false
    }
  },

  methods:{
    open(id){
      this.active = id
      this.activeNone =!this.activeNone
    }
  },

  computed:{
    nextNone(){
      if(this.active == this.active){
        this.activeNone =!false
      }
    }
  }
}
</script>
