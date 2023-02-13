<template>
  <section>
    <ul class="news__pagination">
      <li v-if="page>1" class="pagination__item">
        <a class="news__pagination__next" aria-label="Предыдущая страница" @click.prevent="paginate(page -1)">
          <i class="fas fa-angle-double-left" />
        </a>
      </li>

      <li v-for="pageNumber in pages" :key="pageNumber" class="pagination__item">
        <a href="#!" :class="{active:(page == pageNumber)}" class="news__pagination__link" @click.prevent="paginate(pageNumber)">
          {{ pageNumber }}
        </a>
      </li>

      <li v-if="page<pages" class="pagination__item">
        <a class="news__pagination__next" href="#" aria-label="Следующая страница" @click.prevent="paginate(page+1)">
          <i class="fas fa-angle-double-right" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate'
  },
  props: ['page', 'count', 'perPage'],
  computed: {
    pages () {
      return Math.ceil(this.count / this.perPage)
    }
  },

  methods: {
    paginate (page) {
      this.$emit('paginate', page)
    }
  }
}
</script>
