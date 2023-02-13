<template>
  <section>
    <!-- Memoriy start -->

    <MemoriyItem :title="$t('archeological')"></MemoriyItem>

    <!-- Memoriy end -->

    <!-- Arxiologik start -->

    <div class="ashyolar_in">
      <section class="container">
        <div class="ashyolar_in__cart">
          <arxiologikListVue :arxiologik-list="arxiologikList" />
        </div>
      </section>
    </div>

    <!-- Arxiologik end -->
  </section>
</template>

<script>
import arxiologikListVue from '~/components/arxiologik/arxiologikList.vue'
import arxiologikApi from '~/data/arxiologikApi'
import MemoriyItem from '~/components/memoriy/MemoriyItem.vue'
export default {
  components: {
    arxiologikListVue,
    MemoriyItem
  },
  data () {
    return {
      arxiologikList: arxiologikApi
    }
  }
}
</script>
