<template>
  <section>
    <!-- Memoriy start -->

    <MemoriyItem :title="$t('items')"></MemoriyItem>

    <!-- Memoriy end -->

    <!-- ashyolar start -->

    <div class="ashyolar_in">
      <section class="container">
        <div class="ashyolar_in__cart">
          <ashyolarListVue :ashyolar-list="ashyolarList" />
        </div>
      </section>
    </div>

    <!-- ashyolar end -->
  </section>
</template>

<script>
import ashyolarListVue from '~/components/ashyolar/ashyolarList.vue'
import ashyolarApi from '~/data/ashyolarApi'
import MemoriyItem from '~/components/memoriy/MemoriyItem.vue'
export default {

  components: {
    ashyolarListVue,
    MemoriyItem
  },
  data () {
    return {
      ashyolarList: ashyolarApi
    }
  }
}
</script>
