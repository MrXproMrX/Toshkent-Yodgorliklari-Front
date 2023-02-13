<template>
  <section>
    <div class="yangiliklar__list">
      <div v-for="items in newsItem" :key="items.id" class="yangiliklar__item">
        <nuxt-link :to="localePath(`/news/` + items.id)">
          <div class="yangiliklar__img">
            <img :src="items.imgs" :alt="items.title">
          </div>

          <h4 class="yangiliklar__data">
            {{ items.data }}
          </h4>

          <h3 class="arxiologik__title__h3">
            {{ items.title }}
          </h3>

          <div class="yangiliklar__text" v-html="items.text" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['newsItem']
}
</script>
