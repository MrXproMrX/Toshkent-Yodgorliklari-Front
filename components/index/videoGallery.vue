<template>
  <section>
    <div class="videoGallery__list">
      <div v-if="itemVideo.id" class="videoGallery__list__item" @click="videoPlay = true">
        <section class="videoGallery__img__item" :class="{active__video:videoPlay}">

          <template v-if="videoPlay">
            <div v-html="itemVideo.link" />
          </template>

          <template v-else-if="videoPlay == false">
            <!-- play start -->
            <img class="videoItem" :src="itemVideo.imgs" alt="video">
            <div class="button__min is-play" href="#">
              <div class="button-outer-circle has-scale-animation" />
              <div class="button-outer-circle has-scale-animation has-delay-short" />
              <div class="button-icon is-play">
                <img class="about_contint_in__video__img__play" alt="All" src="@/assets/foto/pley.svg">
              </div>
            </div>
            <!-- play end -->
          </template>

        </section>

        <section class="videoGallery__item__cart">
          <h3 class="videoGallery__list__title">
            {{ itemVideo.title }}
          </h3>
        </section>
      </div>

      <div class="videoGallery__menu__video">
        <div v-for="(items,i) in viteoList" :key="items.id" class="videoGallery__item__video active" @click="videoClick(i)">
          <div class="videoGallery__img__video">
            <img class="videoImg" :src="items.imgs" alt="videoGallery">

            <!-- play start -->

            <div class="button__min is-play">
              <div class="button-outer-circle has-scale-animation" />
              <div class="button-outer-circle has-scale-animation has-delay-short" />
              <div class="button-icon is-play">
                <img class="about_contint_in__video__img__play" alt="All" src="@/assets/foto/pley.svg">
              </div>
            </div>

            <!-- play end -->
          </div>

          <h3 class="videoGallery__title__h3">
            {{ items.title }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    viteoList: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      itemVideo: this.viteoList[0],
      videoPlay: false
    }
  },

  methods: {
    videoClick (id) {
      this.itemVideo = this.viteoList[id]
      this.videoPlay = false
    }
  }
}
</script>
