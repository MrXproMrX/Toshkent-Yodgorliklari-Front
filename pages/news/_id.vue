<template>
  <section>
    <!-- Memoriy start -->

    <MemoriyItem :title="$t('news')"></MemoriyItem>

    <!-- Memoriy end -->

    <!-- news start -->

    <div v-if="newsBlog" class="news_in">
      <section class="container">
        <div class="news_in__cart">
          <div class="news_in__img">
            <img :src="newsBlog.imgs" alt="newsIn">
          </div>

          <h4 class="news_in__data">
            {{ newsBlog.data }}
          </h4>
          <h2 class="toshkent_maps__title__h2">
            {{ newsBlog.title }}
          </h2>
          <div class="news_in__text clearfix" v-html="newsBlog.text" />
        </div>
      </section>
    </div>

    <!-- news end -->
  </section>
</template>

<script>
import yangiliklarApi from '~/data/yangiliklarApi'
import MemoriyItem from '~/components/memoriy/MemoriyItem.vue'
export default {

  data () {
    return {
      yangiliklarApi
    }
  },

  head () {
    return {
      title: this.newsBlog.title,
      meta: [
        {
          hid: this.newsBlog.text,
          name: this.newsBlog.title,
          content: this.newsBlog.text
        }
      ]
    }
  },

  computed: {
    newsBlog () {
      return yangiliklarApi.find(newsBlog => newsBlog.id === +this.$route.params.id)
    }
  },

  components:{
    MemoriyItem
  }
}
</script>
