<template>
  <section>
    <headerVue />
    <section>
      <nuxt />
    </section>
    <footerVue />
  </section>
</template>

<script>
import headerVue from '~/components/HeaderFooter/header.vue'
import footerVue from '~/components/HeaderFooter/footer.vue'
export default {
  components: {
    headerVue,
    footerVue
  }
}
</script>
