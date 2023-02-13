<template>
  <section>
    <!-- Memoriy start -->

    <MemoriyItem :title="$t('foto')"></MemoriyItem>

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

          <div v-if="fotoGallerBlog.photoGallery" class="fotogalereya_in">
            <section class="container">
              <div class="fotogalereya_in__cart">
                <VueSlickCarousel
                  ref="c1"
                  class="fotogalereya_in__list1"
                  :arrows="true"
                  :fade="true"
                  :as-nav-for="c2"
                  :focus-on-select="true"
                >
                  <div v-for="(item,i) in fotoGallerBlog.photoGallery" :key="i" class="fotogalereya_in__item1">
                    <img :src="item.imgs" :alt="fotoGallerBlog.title">
                    <h3 class="fotogalereya_in__title__h3">
                      {{ fotoGallerBlog.title }}
                    </h3>
                  </div>
                </VueSlickCarousel>

                <VueSlickCarousel ref="c2" class="fotogalereya_in__list2" :as-nav-for="c1" :focus-on-select="true" v-bind="slikMemoriy">
                  <section v-for="(item,i) in fotoGallerBlog.photoGallery" :key="i">
                    <div class="fotogalereya_in__item2">
                      <img :src="item.imgs" :alt="fotoGallerBlog.title">
                    </div>
                  </section>
                </VueSlickCarousel>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>

    <!-- media end -->
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import fotoGalleryApi from '~/data/fotoGalleryApi'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import MemoriyItem from '~/components/memoriy/MemoriyItem.vue'
export default {

  components: {
    VueSlickCarousel,
    MemoriyItem
  },
  data () {
    return {
      fotoGalleryApi,
      c1: undefined,
      c2: undefined,
      slikMemoriy: {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },

  computed: {
    fotoGallerBlog () {
      return fotoGalleryApi.find(fotoGallerBlog => fotoGallerBlog.id === +this.$route.params.id)
    }
  },

  mounted () {
    this.c1 = this.$refs.c1
    this.c2 = this.$refs.c2
  }
}
</script>
