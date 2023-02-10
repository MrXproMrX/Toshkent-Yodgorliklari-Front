<template>
   <section>
      <!-- Memoriy start -->

      <div class="memoriy">
         <section class="container">
            <div class="memoriy__cart">
               <h2 class="memoriy__title__h2">{{ $t('contacts') }}</h2>
            </div>
         </section>
      </div>

      <!-- Memoriy end -->


      <!-- Contacts start -->

      <div class="contacts">
         <section class="container">
            <div class="contacts__cart">
               <div class="contacts__list">
                  <ul class="contacts__list__item">
                     <li>
                        <a class="contacts__item__link">
                           <span>{{ $t('address') }}:</span>
                           Узбекистан, г. Ташкент, Ул. Садыка Азимова, 68
                        </a>
                     </li>

                     <li>
                        <a href="tel:+998 93 505 45 05" class="contacts__item__link">
                           <span>{{ $t('phone') }}:</span>
                           +998 93 505 45 05
                        </a>
                     </li>

                     <li>
                        <a href="mailto:info@flykhiva.uz" class="contacts__item__link">
                           <span>{{ $t('email') }}:</span>
                           info@flykhiva.uz
                        </a>
                     </li>
                  </ul>

                  <form action="#!" class="contacts__form">
                     <input type="text" class="contacts__input" :placeholder="$t('full_name')">
                     <input type="email" class="contacts__input" :placeholder="$t('email')">
                     <textarea class="contacts__textarea" :placeholder="$t('message')"></textarea>
                     <button type="submit" class="contacts__button">{{ $t('send') }} <i class="fas fa-chevron-right"></i></button>
                  </form>
               </div>
            </div>
         </section>

         <div class="contacts__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d26917.212366942644!2d69.31639975937678!3d41.29659761794787!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1674727593365!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </div>

      <!-- Contacts end -->


   </section>
</template>

<style scoped>
.memoriy{
   background-image: url(@/assets/foto/memoriy_fon.png);
}
</style>

<script>
export default {

}
</script>
