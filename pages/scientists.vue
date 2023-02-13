<template>
  <section>
    <!-- Memoriy start -->

    <MemoriyItem :title="$t('scientists')"></MemoriyItem>

    <!-- Memoriy end -->

    <!-- Olimlar start -->

    <div class="olimlar_in">
      <section class="container">
        <div class="olimlar_in__cart">
          <olimlarListVue :olimlar-list="olimlarList" />
        </div>
      </section>
    </div>

    <!-- Olimlar end -->
  </section>
</template>

<script>
import olimlarListVue from '~/components/olimlar/olimlarList.vue'
import olimlarApi from '~/data/olimlarApi'
import MemoriyItem from '~/components/memoriy/MemoriyItem.vue'
export default {

  components: {
    olimlarListVue,
    MemoriyItem
  },
  data () {
    return {
      olimlarList: olimlarApi
    }
  }
}
</script>
