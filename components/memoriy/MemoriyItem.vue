<template>

  <div class="memoriy">
    <section class="container">
      <div class="memoriy__cart">
        <h2 class="memoriy__title__h2">
          {{ title }}
        </h2>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  props:['title']
}
</script>

<style scoped>
.memoriy{
   background-image: url(@/assets/foto/memoriy_fon.png);
}
</style>
