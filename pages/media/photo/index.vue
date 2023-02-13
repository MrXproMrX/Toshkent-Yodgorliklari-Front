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
            <li class="active">
              <nuxt-link :to="localePath('/media/photo')" class="media__menu__link">
                {{ $t('foto') }}
              </nuxt-link>
            </li>

            <li>
              <nuxt-link :to="localePath('/media/video')" class="media__menu__link">
                {{ $t('video') }}
              </nuxt-link>
            </li>
          </ul>

          <photoGalleryListVue :photo-gallery="photoGallery" />
        </div>
      </section>
    </div>

    <!-- media end -->
  </section>
</template>

<script>
import photoGalleryListVue from '~/components/media/photoGalleryList.vue'
import fotoGalleryApi from '~/data/fotoGalleryApi'
import MemoriyItem from '~/components/memoriy/MemoriyItem.vue'
export default {

  components: {
    photoGalleryListVue,
    MemoriyItem
  },

  data () {
    return {
      photoGallery: fotoGalleryApi
    }
  }
}
</script>
