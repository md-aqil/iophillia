/*--------------------- Copyright (c) 2022 -----------------------
[Master Javascript]
Project: CryptoCurrency
-------------------------------------------------------------------*/
(function ($) {
  "use strict";
  var Cryptocurrency = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      }
      else {
        return;
      }
      /*-------------- Cryptocurrency Design Functions Calling-------------------*/

      this.cc_counter();
      this.cc_binary_summary();
      this.cc_testimonial_slider();
      this.toggle_menu();
      this.cc_input_selector();
     
      
    },

    /*-------------- Cryptocurrency Design Functions Calling ------------------------*/


    /*--- Counter numbers----*/
    cc_counter:  function () {
      const counters = document.querySelectorAll(".cc-count");
      const speed = 100;
      counters.forEach((counter) => {
        const updateCount =  () => {
          const target = parseInt(+counter.getAttribute("data-target"));
          const count = parseInt(+counter.innerText);
          const increment = Math.trunc(target / speed);    

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
          } 
        };
        updateCount();
      });
    },
    /*--- Counter numbers----*/

   /*--- Binary Summary----*/
    cc_binary_summary: function () {
      const ANIMATEDCLASSNAME = "animated";
      const ELEMENTS = document.querySelectorAll(".HOVER");
      const ELEMENTS_SPAN = [];
      ELEMENTS.forEach((element, index) => {
        let addAnimation = false;
        if (element.classList[1] == "FLASH") {
          element.addEventListener("animationend", e => {
            element.classList.remove(ANIMATEDCLASSNAME);
          });
          addAnimation = true;
        }
        if (!ELEMENTS_SPAN[index])
          ELEMENTS_SPAN[index] = element.querySelector("span");
        element.addEventListener("mouseover", e => {
          ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
          ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
          if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
        });
        element.addEventListener("mouseout", e => {
          ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
          ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
        });
      });
    },
    /*--- Binary Summary----*/

    /*--- Testimonial Slider----*/
    cc_testimonial_slider: function () {
      var swiper = new Swiper(".cc-testimonial-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      });
    },
    /*--- Testimonial Slider----*/

    // toggle menu
	toggle_menu: function(){
		$('.cc-mt-menu-toggle').on('click',function(){
			$('body').toggleClass('menu-open');
		})
	},
	// toggle menu

    /*--- Dropdown Selector----*/
    cc_input_selector: function () {
      $(document).ready(function () {
        $('.js-example-basic-multiple').select2();
      });
    },
    /*--- Dropdown Selector----*/

  };
Cryptocurrency.init();
}(jQuery));










