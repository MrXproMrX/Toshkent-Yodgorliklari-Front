<template>
  <section>
    <!-- Memoriy start -->

    <MemoriyItem :title="$t('media')"></MemoriyItem>

    <!-- Memoriy end -->

    <!-- media start -->

    <div class="media">
      <section class="container">
        <div class="media__cart">
          <ul class="media__menu">
            <li>
              <nuxt-link :to="localePath('/media/photo')" class="media__menu__link">
                {{ $t('foto') }}
              </nuxt-link>
            </li>

            <li class="active">
              <nuxt-link :to="localePath('/media/video')" class="media__menu__link">
                {{ $t('video') }}
              </nuxt-link>
            </li>
          </ul>

          <videoGalleryListVue :video-list="videoList" />
        </div>
      </section>
    </div>

    <!-- media end -->
  </section>
</template>

<script>
import videoGalleryListVue from '~/components/media/videoGalleryList.vue'
import videoGalleryListApi from '~/data/videoGalleryListApi'
import MemoriyItem from '~/components/memoriy/MemoriyItem.vue'
export default {

  components: {
    videoGalleryListVue,
    MemoriyItem
  },
  data () {
    return {
      videoList: videoGalleryListApi
    }
  }
}
</script>
