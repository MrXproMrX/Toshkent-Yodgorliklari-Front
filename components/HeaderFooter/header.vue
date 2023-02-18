<template>
  <section>
    <!-- header start -->

    <header>
      <div class="header clearfix">
        <!-- language start -->

        <div class="header__ru">
          <ul class="header__locales__cart">
            <li @click="headerLocales = !headerLocales">
              {{ localeTitle.toUpperCase() }} <span><fa :icon="['fas', 'chevron-down']" /></span>

              <ul :class="{header__locales__menu : headerLocales}">
                <li v-for="(locale,index) in availableLocales" :key="index + locale.code">
                  <button :class="{header__locales__active : locale.code === localeTitle}" @click.prevent="handleLangChange(locale.code)">
                    {{ locale.code.toUpperCase() }}
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- language start -->

        <section class="container">
          <div class="header__cart">
            <div class="header__list">
              <div class="header__logo">
                <nuxt-link :to="localePath('/')">
                  Toshkent<br>
                  <span>
                    Arxeologik<br>
                    Yodgorliklari
                  </span>
                </nuxt-link>
              </div>

              <ul class="header__menu" :class="{burger__active:burger}">
                <li>
                  <nuxt-link :to="localePath('/about')" active-class="active" class="header__menu__link">
                    {{ $t('aboutUs') }}
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link :to="localePath('/archeological')" active-class="active" class="header__menu__link">
                    {{ $t('archeological') }}
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link :to="localePath('/ashyolar')" active-class="active" class="header__menu__link">
                    {{ $t('items') }}
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link :to="localePath('/scientists')" active-class="active" class="header__menu__link">
                    {{ $t('scientists') }}
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link :to="localePath('/media/photo')" active-class="active" class="header__menu__link">
                    {{ $t('media') }}
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link :to="localePath('/news')" active-class="active" class="header__menu__link">
                    {{ $t('news') }}
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link :to="localePath('/electronic_literature')" active-class="active" class="header__menu__link">
                    {{ $t('electronicliterature') }}
                  </nuxt-link>
                </li>
              </ul>

              <button class="header__burger__none" @click="burger = !burger">
                <fa :icon="['fas', 'bars']" />
              </button>
            </div>
          </div>

          <section class="sidenav-overlay" :class="{burger__active__fon:burger}" @click="burger = !burger" />
        </section>
      </div>
    </header>

    <!-- header end -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      localeTitle: '',
      headerLocales: false,
      burger: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales
    }
  },
  mounted () {
    this.localeTitle = this.$i18n.loadedLanguages[0]
  },
  methods: {
    handleLangChange (langCode) {
      this.$i18n.setLocale(langCode)
      this.localeTitle = langCode
    }
  }
}
</script>
