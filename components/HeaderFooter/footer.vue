<template>
  <section>
    <!-- footer start -->

    <footer>
      <div class="footer">
        <section class="container">
          <div class="footer__cart">
            <div class="footer__list">
              <div class="footer__list__item">
                <div class="footer__logo">
                  <nuxt-link :to="localePath('/')">
                    Toshkent<br>
                    <span>
                      Arxeologik<br>
                      Yodgorliklari
                    </span>
                  </nuxt-link>
                </div>

                <ul class="footer__icons__menu">
                  <li>
                    <a href="#!" class="footer__icons__link">
                      <i class="fab fa-instagram" />
                    </a>
                  </li>

                  <li>
                    <a href="#!" class="footer__icons__link">
                      <i class="fab fa-facebook-f" />
                    </a>
                  </li>

                  <li>
                    <a href="#!" class="footer__icons__link">
                      <i class="fab fa-telegram-plane" />
                    </a>
                  </li>
                </ul>
              </div>

              <div class="footer__item">
                <ul class="footer__menu">
                  <li>
                    <nuxt-link :to="localePath('/about')" class="footer__menu__link">
                      {{ $t('aboutUs') }}
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link :to="localePath('/archeological')" class="footer__menu__link">
                      {{ $t('archeological') }}
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link :to="localePath('/ashyolar')" class="footer__menu__link">
                      {{ $t('items') }}
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link :to="localePath('/scientists')" class="footer__menu__link">
                      {{ $t('scientists') }}
                    </nuxt-link>
                  </li>
                </ul>

                <ul class="footer__menu">
                  <li>
                    <nuxt-link :to="localePath('/media/photo')" class="footer__menu__link">
                      {{ $t('media') }}
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link :to="localePath('/news')" class="footer__menu__link">
                      {{ $t('news') }}
                    </nuxt-link>
                  </li>

                  <li>
                    <nuxt-link :to="localePath('/contacts')" class="footer__menu__link">
                      {{ $t('contacts') }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div class="footer__bottom">
          <section class="container">
            <div class="footer__bottom__list">
              <h4 class="footer__bottom__title">
                «Toshkent Yodgorliklari» {{ $t('footer_text1') }}
              </h4>

              <h4 class="footer__bottom__title">
                © Copyright 2023 - {{ $t('webBeveloped') }} <a href="https://sos.uz/" target="_blank">SOS Group</a>
              </h4>
            </div>
          </section>
        </div>
      </div>
    </footer>

    <!-- footer end -->
  </section>
</template>

<script>
export default {

}
</script>
