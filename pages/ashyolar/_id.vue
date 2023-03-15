<template>
  <section>
    <!-- Memoriy start -->

    <MemoriyItem :title="$t('items')"></MemoriyItem>

    <!-- Memoriy end -->

    <!-- ashyolar_content start -->

    <div class="ashyolar_content">
      <section class="container">
        <div class="ashyolar_content__cart">
          <h2 class="toshkent_maps__title__h2">
            {{ ashyolarBlog.title }}
          </h2>

          <div class="ashyolar_content__imgs">
            <img :src="ashyolarBlog.imgs" :alt="ashyolarBlog.title">
          </div>

          <div class="ashyolar_content__text clearfix" v-html="ashyolarBlog.text" />

          <div v-if="ashyolarBlog.link" class="memoriy_video__list__item" @click="videoPlay = true">
            <section class="memoriy_video__img__item" :class="{active__video:videoPlay}">
              <template v-if="videoPlay">
                <div v-html="ashyolarBlog.link" />
              </template>
              <template v-else-if="videoPlay==false">
                <img class="videoItem" :src="ashyolarBlog.imgs" :alt="ashyolarBlog.title">
                <!-- play start -->
                <div class="button__min is-play">
                  <div class="button-outer-circle has-scale-animation" />
                  <div class="button-outer-circle has-scale-animation has-delay-short" />
                  <div class="button-icon is-play">
                    <img class="about_contint_in__video__img__play" alt="All" src="@/assets/foto/pley.svg">
                  </div>
                </div>
                <!-- play end -->
              </template>
            </section>
          </div>
        </div>
      </section>
    </div>

    <!-- ashyolar_content end -->
  </section>
</template>

<script>
import ashyolarApi from '~/data/ashyolarApi'
import MemoriyItem from '~/components/memoriy/MemoriyItem.vue'
export default {

  data () {
    return {
      ashyolarApi,
      videoPlay: false
    }
  },

  head () {
    return {
      title: this.ashyolarBlog.title,
      meta: [
        {
          hid: this.ashyolarBlog.text,
          name: this.ashyolarBlog.title,
          content: this.ashyolarBlog.text
        }
      ]
    }
  },

  computed: {
    ashyolarBlog () {
      return ashyolarApi.find(ashyolarBlog => ashyolarBlog.id === +this.$route.params.id)
    }
  },

  components:{
    MemoriyItem
  }
}
</script>
