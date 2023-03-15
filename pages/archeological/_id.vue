<template>
  <section>
    <!-- Memoriy start -->

    <MemoriyItem :title="$t('archeological')"></MemoriyItem>

    <!-- Memoriy end -->

    <!-- memoriy_content start -->

    <div class="memoriy_content">
      <section class="container">
        <div class="memoriy_content__cart">
          <div class="memoriy_content__list clearfix">
            <div v-if="arxiologBlog.galleryFoto" class="memoriy_content__slider">
              <VueSlickCarousel
                ref="c1"
                class="memoriy_content__slider__list"
                :arrows="false"
                :fade="true"
                :as-nav-for="c2"
                :focus-on-select="true"
              >
                <div v-for="(items,i) in arxiologBlog.galleryFoto" :key="i" class="memoriy_content__slider__img">
                  <img :src="items.imgs" :alt="arxiologBlog.title">
                </div>
              </VueSlickCarousel>
              <VueSlickCarousel ref="c2" class="memoriy_content__slider__item" :as-nav-for="c1" :focus-on-select="true" v-bind="slikMemoriy">
                <section v-for="(items,i) in arxiologBlog.galleryFoto" :key="i">
                  <div class="memoriy_content__item__img">
                    <img :src="items.imgs" :alt="arxiologBlog.title">
                  </div>
                </section>
              </VueSlickCarousel>
            </div>

            <section v-if="arxiologBlog.slicTextItem">
              <div v-for="(item,i) in arxiologBlog.slicTextItem" :key="i" class="memoriy_content__item">
                <h2 class="toshkent_maps__title__h2">
                  {{ item.title }}
                </h2>
                <div class="memoriy_content__text" v-html="item.text" />
              </div>
            </section>
          </div>

          <div class="memoriy_content__cart__item">
            <nuxt-link :to="localePath('#!')" class="memoriy_content__item__link">
              Arxeologik yodgorlik pasporti
            </nuxt-link>
          </div>
        </div>
      </section>
    </div>

    <!-- memoriy_content end -->

    <!-- memoriy_video start -->

    <div v-if="arxiologBlog.link" class="memoriy_video">
      <section class="container">
        <div class="memoriy_video__cart">
          <div class="memoriy_video__list__item" @click="videoPlay = true">
            <section class="memoriy_video__img__item" :class="{active__video:videoPlay}">
              <template v-if="videoPlay">
                <div v-html="arxiologBlog.link" />
              </template>
              <template v-else-if="videoPlay == false">
                <img class="videoItem" :src="arxiologBlog.imgs" :alt="arxiologBlog.title">
                <!-- play start -->
                <div class="button__min is-play">
                  <div class="button-outer-circle has-scale-animation" />
                  <div class="button-outer-circle has-scale-animation has-delay-short" />
                  <div class="button-icon is-play">
                    <img class="about_contint_in__video__img__play" alt="All" src="@/assets/foto/pley.svg">
                  </div>
                </div>
                <!-- play end -->
              </template>
            </section>
          </div>
        </div>
      </section>
    </div>

    <!-- memoriy_video end -->

    <!-- memoriy_carousel start -->

    <div v-if="arxiologBlog.carouselFoto" class="memoriy_carousel">
      <section class="container">
        <div class="memoriy_carousel__cart">
          <div class="memoriy_carousel__list clearfix">
            <div class="memoriy_carousel__item">
              <h2 class="toshkent_maps__title__h2">
                Belgilangan davdagi yodgorlik ko'rinishi
              </h2>
              <ul class="memoriy_carousel__menu">
                <li v-for="item in arxiologBlog.carouselFoto" :key="item.id" @click="carouselId = item.id">
                  <h3 class="memoriy_carousel__link">
                    {{ item.title }}
                  </h3>
                </li>
              </ul>
            </div>

            <section class="memoriy_carousel__cart__list">
              <section v-for="item in arxiologBlog.carouselFoto" :key="item.id">
                <div v-if="carouselId == item.id" class="memoriy_carousel__cart__item">
                  <img :src="item.imgs" :alt="item.title">
                </div>
              </section>
            </section>
          </div>

          <div class="memoriy_carousel__cart__likes">
            <button class="memoriy_carousel__botton" :class="{active:likesCart}" @click="likes">
              <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.219 14.4123L16 27.6667L28.781 14.4123C30.2018 12.9388 31 10.9405 31 8.85675C31 4.51758 27.608 1 23.4238 1C21.4145 1 19.4875 1.82777 18.0667 3.30118L16 5.44445L13.9333 3.30118C12.5125 1.82777 10.5855 1 8.57615 1C4.39195 1 1 4.51758 1 8.85675C1 10.9405 1.7982 12.9388 3.219 14.4123Z" stroke="#3A8DDA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>

            <h4 class="memoriy_carousel__counter">
              {{ likesCounter }}
            </h4>
          </div>
        </div>
      </section>
    </div>

    <!-- memoriy_carousel end -->
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import arxiologikApi from '~/data/arxiologikApi'
import MemoriyItem from '~/components/memoriy/MemoriyItem.vue'
export default {

  components: {
    VueSlickCarousel,
    MemoriyItem
  },

  data () {
    return {
      arxiologikApi,
      videoPlay: false,
      likesCart: false,
      likesCounter: 960,
      carouselId: 1,
      c1: undefined,
      c2: undefined,
      slikMemoriy: {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },

  head () {
    return {
      title: this.arxiologBlog.title,
      meta: [
        {
          hid: this.arxiologBlog.title,
          name: this.arxiologBlog.title,
          content: this.arxiologBlog.text
        }
      ]
    }
  },

  computed: {
    arxiologBlog () {
      return arxiologikApi.find(arxiologBlog => arxiologBlog.id === +this.$route.params.id)
    }
  },

  mounted () {
    this.c1 = this.$refs.c1
    this.c2 = this.$refs.c2
  },

  methods: {
    likes () {
      this.likesCart = !this.likesCart
      if (this.likesCart) {
        this.likesCounter++
      } else {
        this.likesCounter--
      }
    }
  }
}
</script>
