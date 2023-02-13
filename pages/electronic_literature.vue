<template>
  <section>
    <!-- Memoriy start -->

    <MemoriyItem :title="$t('electronicliterature')"></MemoriyItem>

    <!-- Memoriy end -->

    <!-- Electronic literature start -->

    <div class="electronic">
      <section class="container">
        <div class="electronic__cart">
          <electronicListVue :electronic-list="electronicList" />
        </div>
      </section>
    </div>

    <!-- Electronic literature end -->
  </section>
</template>

<script>
import electronicListVue from '~/components/electronic/electronicList.vue'
import electronicApi from '~/data/electronicApi'
import MemoriyItem from '~/components/memoriy/MemoriyItem.vue'
export default {

  components: {
    electronicListVue,
    MemoriyItem
  },
  data () {
    return {
      electronicList: electronicApi
    }
  }
}
</script>
