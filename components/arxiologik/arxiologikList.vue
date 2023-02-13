<template>
  <div class="ashyolar_in__list">
    <div v-for="items in arxiologikList" :key="items.id" class="arxiologik__item">
      <div class="arxiologik__img">
        <img :src="items.imgs" :alt="items.title">
      </div>
      <h3 class="arxiologik__title__h3">
        {{ items.title }}
      </h3>
      <nuxt-link :to="localePath(`/archeological/` + items.id)" class="arxiologik__item__link">
        {{ $t('everything') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['arxiologikList']
}
</script>
