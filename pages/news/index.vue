<template>
  <section>
    <!-- Memoriy start -->

    <MemoriyItem :title="$t('news')"></MemoriyItem>

    <!-- Memoriy end -->

    <!-- news start -->

    <div class="news">
      <section class="container">
        <div class="news__cart">
          <NewsList :news-item="newsItem" />
          <paginationVue v-model="page" :count="countProducts" :per-page="productsPerPage" />
        </div>
      </section>
    </div>

    <!-- news end -->
  </section>
</template>

<script>
import NewsList from '~/components/news/newsList.vue'
import yangiliklarApi from '~/data/yangiliklarApi'
import paginationVue from '~/components/pagination/pagination.vue'
import MemoriyItem from '~/components/memoriy/MemoriyItem.vue'
export default {

  components: {
    NewsList,
    paginationVue,
    MemoriyItem
  },
  data () {
    return {
      page: 1,
      productsPerPage: 12
    }
  },

  computed: {
    newsItem () {
      const offset = (this.page - 1) * this.productsPerPage
      return yangiliklarApi.slice(offset, offset + this.productsPerPage)
    },
    countProducts () {
      return yangiliklarApi.length
    }
  }
}
</script>
