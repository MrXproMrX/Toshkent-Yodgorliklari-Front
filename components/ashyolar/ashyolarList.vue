<template>
  <section>
    <div class="ashyolar_in__list">
      <div v-for="items in ashyolarList" :key="items.id" class="arxiologik__item">
        <div class="arxiologik__img">
          <img :src="items.imgs" :alt="items.title">
        </div>
        <h3 class="arxiologik__title__h3">
          {{ items.title }}
        </h3>

        <nuxt-link :to="localePath(`/ashyolar/` + items.id)" class="arxiologik__item__link">
          {{ $t('everything') }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:{
    ashyolarList:{
      type:Array,
      required: true,
      default: () => []
    }
  }
}
</script>
