<?php
$page_title = 'О компании';
$header_style = 'page-header-bg-image';
include_once('header-page.php'); ?>

<section class="section experts">
  <div class="container">
    <div class="experts-content-wrapper">
      <picture  class="experts-photo">
        <source type="image/webp" srcset="img/company/company-logo.webp">
        <source type="image/png" srcset="img/company/company-logo.png">
        <img src="img/company/company-logo.png" alt="experts" width="90%">
      </picture>
      <div class="experts-content">
        <div class="seporator"></div>
        <h2 class="section-title">Мы - эксперты в области производства химии</h2>
        <p class="experts-text">
          Разнообразный и богатый опыт говорит нам, что перспективное планирование однозначно фиксирует необходимость поставленных обществом задач! Есть над чем задуматься: ключевые особенности структуры проекта могут быть объединены в целые кластеры себе подобных. Интерактивные прототипы, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут описаны максимально подробно. Значимость этих проблем настолько очевидна, что перспективное планирование играет важную роль в формировании системы массового участия.
        </p>
      </div>
  </div>
  <div class="swiper features-slider">
    <!-- обертка слайдера -->
    <ul class="swiper-wrapper header-features">
      <!-- слайды -->
      <li class="swiper-slide header-features-item"><svg width="36" height="36">
        <use href="img/sprite.svg#time"></use>
      </svg>
      <p class="experts-features-text">Непрерывная работа c 2017 года</p></li>
      <li class="swiper-slide header-features-item"><svg width="36" height="36">
        <use href="img/sprite.svg#certificate"></use>
      </svg>
      <p class="experts-features-text">Вся продукция сертифицирована</p></li>
      <li class="swiper-slide header-features-item"><svg width="36" height="36">
        <use href="img/sprite.svg#control"></use>
      </svg>
      <p class="experts-features-text">Контроль качества на всех этапах</p></li>
      <li class="swiper-slide header-features-item"><svg width="36" height="36">
        <use href="img/sprite.svg#delivery"></use>
      </svg>
      <p class="experts-features-text">Возможны поставки по всей России</p></li>
      <li class="swiper-slide header-features-item"><svg width="36" height="36">
        <use href="img/sprite.svg#speed"></use>
      </svg>
      <p class="experts-features-text">Оперативное производство</p></li>
    </ul>
    <!-- кнопки навигации вперед/назад -->
    <div class="slider-buttons">
      <div class="slider-button-prev">
        <svg width="36" height="24">
          <use href="img/sprite.svg#arrow-prew"></use>
        </svg>
      </div>
      <div class="slider-button-next">
        <svg width="36" height="24">
          <use href="img/sprite.svg#arrow-next"></use>
        </svg>
      </div>
    </div>
  </div>
</section>
<section class="section production">
      <div class="container">
        <div class="seporator"></div>
        <div class="production-wrapper">
          <div class="production-content">
            <h2 class="section-title">Наше производство</h2>
            <p class="production-text">Предварительные выводы неутешительны: разбавленное изрядной долей эмпатии, рациональное мышление обеспечивает широкому кругу (специалистов) участие в формировании глубокомысленных рассуждений. Но граница обучения кадров создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса кластеризации усилий.</p>
            <p class="production-text">Реализация намеченных плановых заданий, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для соответствующих условий активизации. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня требует анализа анализа существующих паттернов поведения.</p>
            <ul class="production-list">
              <li class="production-list-item">
                <svg width="30" height="30" class="production-list-icon">
                  <use href="img/sprite.svg#car"></use>
                </svg>
                Автомобильная химия
              </li>
              <li class="production-list-item">
                <svg width="30" height="30" class="production-list-icon">
                  <use href="img/sprite.svg#home"></use>
                </svg>
                Бытовая химия
              </li>
              <li class="production-list-item">
                <svg width="30" height="30" class="production-list-icon">
                  <use href="img/sprite.svg#diz"></use>
                </svg>
                Дезинфицирующие средства
              </li>
              <li class="production-list-item">
                <svg width="30" height="30" class="production-list-icon">
                  <use href="img/sprite.svg#speed"></use>
                </svg>
                Пищевые аэрозоли
              </li>
              <li class="production-list-item">
                <svg width="30" height="30" class="production-list-icon">
                  <use href="img/sprite.svg#shield"></use>
                </svg>
                Косметические средства
              </li>
              <li class="production-list-item">
                <svg width="30" height="30" class="production-list-icon">
                  <use href="img/sprite.svg#car-cosm"></use>
                </svg>
                Краски аэрозольные
              </li>
            </ul>
          </div>
          <!-- /.production-content -->
          <div class="production-logo">
            <picture  class="production-photo">
              <source type="image/webp" srcset="img/company/production-logo.webp">
              <source type="image/png" srcset="img/company/production-logo.png">
              <img src="img/company/production-logo.png" alt="production" width="100%"  height="100%" >
            </picture>
          </div>
        </div>
        <!-- /.clients-wrapper -->
      </div>
    </section>
    <?php include_once('./template-parts//founder.php')?>
  

    <?php include_once('./template-parts/clients.php')?>
<?php include_once('cta.php'); ?>