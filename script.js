let toggleIcon = document.querySelector('.toggle')

toggleIcon.addEventListener('click', openMenu)

function openMenu() {
    let menu = document.querySelector('.menu-head')

    menu.classList.toggle('open')
}

 $slick_slider = $('.slider');
  settings_slider = {
    arrows: true
    }

  slick_on_mobile( $slick_slider, settings_slider);

// slick on mobile
  function slick_on_mobile(slider, settings){
    $(window).on('load resize', function() {
      if ($(window).width() > 600) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
  };

