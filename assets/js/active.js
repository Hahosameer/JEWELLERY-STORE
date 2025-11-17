/*global jQuery */
(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // Slider Carouse JS
        var banner_owl = $('#banner-carousel');
        banner_owl.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            smartSpeed: 1000,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });


        // Slider Caption Animation JS
        var caption = $('.banner-caption *');
        caption.addClass('animated');

        banner_owl.on('translate.owl.carousel', function (event) {
            caption.removeClass('fadeInUp');
            caption.addClass('hide');
        });

        banner_owl.on('translated.owl.carousel', function (event) {
            caption.addClass('fadeInUp');
            caption.removeClass('hide');
        });

        // Product Carousel JS
        $('.products-carousel').owlCarousel({
            items: 3,
            loop: true,
            dots: false,
            nav: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            margin: 30,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                    autoplay: true
                },
                // breakpoint from 576 up
                576: {
                    items: 2,
                    autoplay: true
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                    nav: true
                },
                // breakpoint from 992 up
                992: {
                    items: 3,
                    nav: true
                }
            }
        });

        // New Product Carousel JS
        $('.new-products-carousel').owlCarousel({
            items: 4,
            loop: true,
            dots: false,
            nav: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            margin: 30,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                    margin: 0,
                    autoPlay: true
                },
                // breakpoint from 576 up
                576: {
                    items: 2,
                    autoPlay: true
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                    nav: true
                },
                // breakpoint from 992 up
                992: {
                    items: 3,
                    nav: true
                },
                // breakpoint from 1200 up
                1200: {
                    items: 4,
                    nav: true
                }
            }
        });

        // New Product Two Carousel JS
        $('.new-products-carousel-two').owlCarousel({
            items: 2,
            dots: false,
            nav: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            margin: 30,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                    autoPlay: true
                },
                // breakpoint from 576 up
                576: {
                    items: 2,
                    autoPlay: true
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                    nav: true
                },
                // breakpoint from 992 up
                992: {
                    items: 2,
                    nav: true
                }
            }
        });

        // New Product Gallery Carousel JS
        $('.new-pro-gallery-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
            autoPlay: true
        });

        // Testimonial Carousel JS
        $('#testimonialCarousel').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
            autoPlay: true
        });

        // Image Gallery JS
        $('.imgage-gallery-carousel').owlCarousel({
            items: 4,
            loop: true,
            dots: false,
            nav: false,
            autoPlay: true
        });

        // Sale Product Carousel
        $('.sale-product-carousel').owlCarousel({
            items: 1,
            loop: false,
            dots: false,
            smartSpeed: 500,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        // Home 4 Product Carousel
        $('.products-categories-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            smartSpeed: 500,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        // Single Product  Carousel Js
        $('.product-thumb-carousel').owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            smartSpeed: 500,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            thumbs: true,
            thumbImage: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item'
        });

        // Bootstrap tooltip
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

        // Body Popup Modal
        $('.modal-active').on('click', function () {
            $('.body-popup-modal-area').fadeIn(200);

            return false;
        });

        $('.modal-close').on('click', function () {
            $('.body-popup-modal-area').fadeOut();

            return false;
        });

        $('.menu-open').on('click', function () {
            $('.navigation-area-wrap').fadeIn(200);

            return false;
        });

        $('.menu-close').on('click', function () {
            $('.navigation-area-wrap').fadeOut();

            return false;
        });

        // Responsive Slicknav
        $('#mainmenu').slicknav({
            label: '',
            prependTo: '#header-area',
            closedSymbol: '+',
            openedSymbol: '-'
        });

        // Scroll to top
        $('.scrolltotop').smoothScroll({
            direction: 'top',
            scrollTarget: 'html',
            speed: 600
        });

        // Nice Select Js
        $('select').niceSelect();

        // Product View Style JS
        var view_style_wrap = $('.shop-page-products-wrap > .products-wrapper');

        $('.product-view li.column-gird').on('click', function () {
            view_style_wrap.removeClass('products-gird products-list-view');
        });

        $('.product-view li.box-gird').on('click', function () {
            view_style_wrap.addClass('products-gird');
            view_style_wrap.removeClass('products-list-view');
        });

        $('.product-view li.list').on('click', function () {
            view_style_wrap.addClass('products-list-view');
            view_style_wrap.removeClass('products-gird');
        });

        $('.product-view li').on('click', function () {
            $('.product-view li').removeClass('current');
            $(this).addClass('current');
        });

        // Checkout Page Checkbox
        $("#create_pwd").on("change", function () {
            $(".account-create").slideToggle("100");
        });

        $("#ship_to_different").on("change", function () {
            $(".ship-to-different").slideToggle("100");
        });

        // Payment Method Accordion
        $('input[name="paymentmethod"]').on('click', function () {

            var $value = $(this).attr('value');

            $('.payment-method-details').slideUp();
            $('[data-method="' + $value + '"]').slideDown();
        });


        // Sale Products Countdown
        $(".sale-product-countdown").each(function (index, element) {
            var $element = $(element),
                $date = $element.data('date');

            $element.countdown($date, function (event) {
                var $this = $(this).html(event.strftime(''

                    + '<div class="counter-item"><span class="counter-no">%D</span><span class="counter-label">Days</span></div>'
                    + '<div class="counter-item"><span class="counter-no">%H</span><span class="counter-label">Hours</span></div>'
                    + '<div class="counter-item"><span class="counter-no">%M</span><span class="counter-label">Mins</span></div>'
                    + '<div class="counter-item"><span class="counter-no">%S</span><span class="counter-label">Secs</span></div>'));
            });
        });


        //Email Ajax Submission
        $('#subscribe-form').submit(function () {
            var action = $(this).attr('action'),
                result = $('#result');

            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    email: $('#address').attr('value')
                },
                success: function (data) {
                    result.html(data);
                    result.removeClass('alert alert-danger');
                    result.addClass('alert alert-success');
                },
                error: function () {
                    result.html('Sorry, an error occurred.');
                    result.removeClass('alert alert-success');
                    result.addClass('alert alert-danger');
                }
            });
            return false;
        });

        // All Window Scroll Function
        $(window).scroll(function () {
            //Scroll top Hide Show
            if ($(window).scrollTop() >= 400) {
                $('.scrolltotop').addClass('show');
            } else {
                $('.scrolltotop').removeClass('show');
            }

            //Header Fix JS
            if ($(window).scrollTop() >= 400) {
                $('#header-area').addClass('fixed');
            } else {
                $('#header-area, .slicknav_menu').removeClass('fixed');
            }
        });
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ✅ Update Cart UI
function updateCartDisplay(){
  const cartBody = $(".mini-cart-body");
  const cartCount = $(".shop-cart .count");
  cartBody.empty();

  if(cart.length === 0){
    cartBody.html("<p class='text-center m-2 empty-cart'>Your cart is empty.</p>");
    cartCount.text(0);
    $(".mini-cart-footer").addClass("d-none");
    return;
  }

  cart.forEach((item, index)=>{
    const unitPrice = parseFloat(item.price.replace('$','')) / item.qty;
    const totalPrice = (unitPrice * item.qty).toFixed(2);

    cartBody.append(`
      <div class="single-cart-item d-flex align-items-center mb-2" data-index="${index}">
        <figure class="product-thumb">
          <a href="#"><img class="img-fluid" src="${item.img}" alt="Product" /></a>
        </figure>
        <div class="product-details flex-grow-1">
          <h2 class="mb-1"><a href="#">${item.name}</a></h2>
          <div class="cal d-flex align-items-center">
            <button class="btn-minus" style="border:1px solid grey;background:none;border-radius: 50%;height: 15px;
width: 15px;display: flex;
justify-content: center;
align-items: center;cursor: pointer;">−</button>
            <span class="quantity mx-2">${item.qty}</span>
            <button class="btn-plus"  style="border:1px solid grey;background:none;border-radius: 50%;height: 15px;
width: 15px;display: flex;
justify-content: center;
align-items: center;cursor: pointer;">+</button>
            <span class="multiplication mx-1">x</span>
            <span class="price" data-unit="${unitPrice}">$${totalPrice}</span>
          </div>
        </div>
        <a href="#" class="remove-icon ml-2"><i class="fa fa-trash-o"></i></a>
      </div>
    `);
  });

  cartCount.text(cart.reduce((a,b)=>a+b.qty,0));
  $(".mini-cart-footer").removeClass("d-none");
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ✅ Add to Cart
$(document).on("click", ".btn-add-to-cart", function(e){
    e.preventDefault();

    const productItem = $(this).closest(".single-product-item, .product-details");
    const parentItem = $(this).closest(".single-product-item"); // Correct wrapper

    const img = parentItem.find(".product-thumb img").attr("src") || "assets/img/default.png";
    const name = parentItem.find("h2 a").text() || parentItem.find("h2").text();
    const priceText = parentItem.find(".price").text() || "$0";
    const unitPrice = parseFloat(priceText.replace('$',''));
    const qtyInput = parentItem.find("#qty");
    const qty = qtyInput.length ? parseInt(qtyInput.val()) : 1;

    const existing = cart.find(item => item.name === name);

    if(existing){
        existing.qty += qty;
        existing.price = `$${(unitPrice * existing.qty).toFixed(2)}`;
    } else {
        cart.push({name, price: `$${(unitPrice*qty).toFixed(2)}`, qty, img});
    }

    updateCartDisplay();
});

// ✅ Plus button
$(document).on("click", ".btn-plus", function(){
    const index = $(this).closest(".single-cart-item").data("index");
    cart[index].qty++;
    const unitPrice = parseFloat(cart[index].price.replace('$','')) / (cart[index].qty-1);
    cart[index].price = `$${(unitPrice * cart[index].qty).toFixed(2)}`;
    updateCartDisplay();
});

// ✅ Minus button
$(document).on("click", ".btn-minus", function(){
    const index = $(this).closest(".single-cart-item").data("index");
    if(cart[index].qty > 1){
        cart[index].qty--;
        const unitPrice = parseFloat(cart[index].price.replace('$','')) / (cart[index].qty+1);
        cart[index].price = `$${(unitPrice * cart[index].qty).toFixed(2)}`;
    } else {
        cart.splice(index,1);
    }
    updateCartDisplay();
});

// ✅ Remove item
$(document).on("click", ".remove-icon", function(e){
    e.preventDefault();
    const index = $(this).closest(".single-cart-item").data("index");
    cart.splice(index,1);
    updateCartDisplay();
});

// ✅ Load existing cart on refresh
updateCartDisplay();





// single page start
// Quick View modal Add to Cart
$(document).on("click", "#quickView .btn-add-to-cart", function(e){
    e.preventDefault();

    const container = $(this).closest(".product-details");

    // Product info
    const name = container.find("h2 a, h2").first().text();
    const price = container.find(".price").first().text();
    const qty = parseInt(container.find("#qty").val()) || 1;

    // Get currently visible/main image from carousel
    let img = container.closest(".quick-view-content")
                       .find(".product-thumb-carousel .owl-item.active img")
                       .first()
                       .attr("src");

    // If no active image, fallback to first image
    if(!img){
        img = container.closest(".quick-view-content")
                       .find(".product-thumb-carousel .single-thumb-item img")
                       .first()
                       .attr("src") || "assets/img/default.png";
    }

    // Get selected color
    const colorItem = container.find(".color-item.active");
    const color = colorItem.length ? colorItem.data("color") : container.find(".color-item:first").data("color");
    const fullName = color ? `${name}-${color}` : name;

    // Check if product exists in cart
    const existing = cart.find(item => item.name === fullName);

    if(existing){
        existing.qty += qty;
        const unitPrice = parseFloat(price.replace('$',''));
        existing.price = `$${(unitPrice * existing.qty).toFixed(2)}`;
    } else {
        cart.push({name: fullName, price, qty, img, color});
    }

    updateCartDisplay();
});

// single page end
    // The Slideshow class.
class Slideshow {
    constructor(el) {
        
        this.DOM = {el: el};
      
        this.config = {
          slideshow: {
            delay: 3000,
            pagination: {
              duration: 3,
            }
          }
        };
        
        // Set the slideshow
        this.init();
      
    }
    init() {
      
      var self = this;
      
      // Charmed title
      this.DOM.slideTitle = this.DOM.el.querySelectorAll('.slide-title');
      this.DOM.slideTitle.forEach((slideTitle) => {
        charming(slideTitle);
      });
      
      // Set the slider
      this.slideshow = new Swiper (this.DOM.el, {
          
          loop: true,
          autoplay: {
            delay: this.config.slideshow.delay,
            disableOnInteraction: false,
          },
          speed: 500,
          preloadImages: true,
          updateOnImagesReady: true,
          
          // lazy: true,
          // preloadImages: false,

          pagination: {
            el: '.slideshow-pagination',
            clickable: true,
            bulletClass: 'slideshow-pagination-item',
            bulletActiveClass: 'active',
            clickableClass: 'slideshow-pagination-clickable',
            modifierClass: 'slideshow-pagination-',
            renderBullet: function (index, className) {
              
              var slideIndex = index,
                  number = (index <= 8) ? '0' + (slideIndex + 1) : (slideIndex + 1);
              
              var paginationItem = '<span class="slideshow-pagination-item">';
              paginationItem += '<span class="pagination-number">' + number + '</span>';
              paginationItem = (index <= 8) ? paginationItem + '<span class="pagination-separator"><span class="pagination-separator-loader"></span></span>' : paginationItem;
              paginationItem += '</span>';
            
              return paginationItem;
              
            },
          },

          // Navigation arrows
          navigation: {
            nextEl: '.slideshow-navigation-button.next',
            prevEl: '.slideshow-navigation-button.prev',
          },

          // And if we need scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        
          on: {
            init: function() {
              self.animate('next');
            },
          }
        
        });
      
        // Init/Bind events.
        this.initEvents();
        
    }
    initEvents() {
        
        this.slideshow.on('paginationUpdate', (swiper, paginationEl) => this.animatePagination(swiper, paginationEl));
        //this.slideshow.on('paginationRender', (swiper, paginationEl) => this.animatePagination());

        this.slideshow.on('slideNextTransitionStart', () => this.animate('next'));
        
        this.slideshow.on('slidePrevTransitionStart', () => this.animate('prev'));
            
    }
    animate(direction = 'next') {
      
        // Get the active slide
        this.DOM.activeSlide = this.DOM.el.querySelector('.swiper-slide-active'),
        this.DOM.activeSlideImg = this.DOM.activeSlide.querySelector('.slide-image'),
        this.DOM.activeSlideTitle = this.DOM.activeSlide.querySelector('.slide-title'),
        this.DOM.activeSlideTitleLetters = this.DOM.activeSlideTitle.querySelectorAll('span');
      
        // Reverse if prev  
        this.DOM.activeSlideTitleLetters = direction === "next" ? this.DOM.activeSlideTitleLetters : [].slice.call(this.DOM.activeSlideTitleLetters).reverse();
      
        // Get old slide
        this.DOM.oldSlide = direction === "next" ? this.DOM.el.querySelector('.swiper-slide-prev') : this.DOM.el.querySelector('.swiper-slide-next');
        if (this.DOM.oldSlide) {
          // Get parts
          this.DOM.oldSlideTitle = this.DOM.oldSlide.querySelector('.slide-title'),
          this.DOM.oldSlideTitleLetters = this.DOM.oldSlideTitle.querySelectorAll('span'); 
          // Animate
          this.DOM.oldSlideTitleLetters.forEach((letter,pos) => {
            TweenMax.to(letter, .3, {
              ease: Quart.easeIn,
              delay: (this.DOM.oldSlideTitleLetters.length-pos-1)*.04,
              y: '50%',
              opacity: 0
            });
          });
        }
      
        // Animate title
        this.DOM.activeSlideTitleLetters.forEach((letter,pos) => {
					TweenMax.to(letter, .6, {
						ease: Back.easeOut,
						delay: pos*.05,
						startAt: {y: '50%', opacity: 0},
						y: '0%',
						opacity: 1
					});
				});
      
        // Animate background
        TweenMax.to(this.DOM.activeSlideImg, 1.5, {
            ease: Expo.easeOut,
            startAt: {x: direction === 'next' ? 200 : -200},
            x: 0,
        });
      
        //this.animatePagination()
    
    }
    animatePagination(swiper, paginationEl) {
            
      // Animate pagination
      this.DOM.paginationItemsLoader = paginationEl.querySelectorAll('.pagination-separator-loader');
      this.DOM.activePaginationItem = paginationEl.querySelector('.slideshow-pagination-item.active');
      this.DOM.activePaginationItemLoader = this.DOM.activePaginationItem.querySelector('.pagination-separator-loader');
      
      // console.log(swiper.pagination);
      // console.log(swiper.activeIndex);
      
      // Reset and animate
        TweenMax.set(this.DOM.paginationItemsLoader, {scaleX: 0});
        TweenMax.to(this.DOM.activePaginationItemLoader, this.config.slideshow.pagination.duration, {
          startAt: {scaleX: 0},
          scaleX: 1,
        });
      
      
    }
    
}





// campare start
document.querySelectorAll(".compare-btn").forEach(btn => {
  btn.addEventListener("click", function(e){
    e.preventDefault();

    const product = {
      id: this.dataset.id,
      title: this.dataset.title,
      image: this.dataset.image,
      price: this.dataset.price,
      description: this.dataset.description
    };

    let compareList = JSON.parse(localStorage.getItem("compareList")) || [];

    // Check if product already added
    if(compareList.some(p => p.id === product.id)){
      alert("Product already in compare list!");
      return;
    }

    compareList.push(product);
    localStorage.setItem("compareList", JSON.stringify(compareList));

    // Redirect to Compare Page
    window.location.href = "compare.html";
  });
});

function loadCompareItems() {
  let list = JSON.parse(localStorage.getItem("compareList")) || [];

  // Remove old dynamic columns except first column
  document.querySelectorAll("#compare-table tbody td:not(.first-column)").forEach(td => td.remove());

  list.forEach(p => {
    document.getElementById("row-product").innerHTML += `
      <td class="product-image-title">
          <img src="${p.image}" class="img-fluid"  style="width:150px;"><br>
          <a class="title .table tbody tr td.product-image-title .title">${p.title}</a>
      </td>
    `;

    
    document.getElementById("row-description").innerHTML += `<td class="pro-desc"><p>${p.description}</p></td>`;
    document.getElementById("row-price").innerHTML += `<td class="pro-price">${p.price}</td>`;
    document.getElementById("row-color").innerHTML += `<td class="pro-color">Default</td>`;
    document.getElementById("row-stock").innerHTML += `<td class="pro-stock">In Stock</td>`;
    document.getElementById("row-cart").innerHTML += `<td><a href="#" class="btn-add-to-cart">Add to Cart</a></td>`;
    document.getElementById("row-delete").innerHTML += `
      <td class="pro-remove">
          <button class="remove-btn" data-id="${p.id}">
              <i class="fa fa-trash-o"></i>
          </button>
      </td>
    `;
  });
   
}
  
// Remove product
document.addEventListener("click", function(e) {
  if(e.target.closest(".remove-btn")){
    let id = e.target.closest(".remove-btn").dataset.id;
    let list = JSON.parse(localStorage.getItem("compareList")) || [];
    list = list.filter(x => x.id !== id);
    localStorage.setItem("compareList", JSON.stringify(list));
    loadCompareItems();
  }
});

// Load on page load
window.onload = loadCompareItems;


// campare end


// wishlist start *******************
// ============================
// Wishlist System (LocalStorage)
// ============================

$(document).ready(function(){

    // Load wishlist from localStorage
    var wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Function to render wishlist table
    function renderWishlist(){
        var $tbody = $(".wishlist-table-body");
        if($tbody.length === 0) return;
        $tbody.html(""); // clear table

        $.each(wishlist, function(i, item){
            var row = `<tr>
             <td><img src="${item.image}" style="width:150px;"></td>

                <td>${item.title}</td>
                <td>${item.price}</td>
                <td>In Stock</td>
                <td><a href="cart.html" class="btn-add-to-cart">Add to Cart</a></td>
                <td><a href="#" class="remove-wish" data-id="${item.id}"><i class="fa fa-trash-o"></i></a></td>
            </tr>`;
            $tbody.append(row);
        });
    }

    // Initial render
    renderWishlist();

    // Add to Wishlist
    $(".wishlist-btn").click(function(e){
        e.preventDefault();

        var id = $(this).data("id").toString();
        var title = $(this).data("title");
        var image = $(this).data("image");
        var price = $(this).data("price");

        // Avoid duplicates
        if(wishlist.find(item => item.id === id)){
            alert("Product already in wishlist!");
            return;
        }

        wishlist.push({id:id, title:title, image:image, price:price});
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(title + " added to wishlist!");

        renderWishlist();
    });

    // Remove from Wishlist
    $(document).on("click", ".remove-wish", function(e){
        e.preventDefault();
        var id = $(this).data("id").toString();
        wishlist = wishlist.filter(item => item.id !== id);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
    });

});


// wishlist end *******************








const slideshow = new Slideshow(document.querySelector('.slideshow'));

    }); //Ready Function End

    jQuery(window).on('load', function () {

    }); //window load End
}(jQuery));


(() => {
  const track = document.getElementById("track");
  const wrap = track.parentElement;
  const cards = Array.from(track.children);
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const dotsBox = document.getElementById("dots");

  const isMobile = () => matchMedia("(max-width:767px)").matches;

  cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = () => activate(i, true);
    dotsBox.appendChild(dot);
  });
  const dots = Array.from(dotsBox.children);

  let current = 0;

  function center(i) {
    const card = cards[i];
    const axis = isMobile() ? "top" : "left";
    const size = isMobile() ? "clientHeight" : "clientWidth";
    const start = isMobile() ? card.offsetTop : card.offsetLeft;
    wrap.scrollTo({
      [axis]: start - (wrap[size] / 2 - card[size] / 2),
      behavior: "smooth"
    });
  }

  function toggleUI(i) {
    cards.forEach((c, k) => c.toggleAttribute("active", k === i));
    dots.forEach((d, k) => d.classList.toggle("active", k === i));
    prev.disabled = i === 0;
    next.disabled = i === cards.length - 1;
  }

  function activate(i, scroll) {
    if (i === current) return;
    current = i;
    toggleUI(i);
    if (scroll) center(i);
  }

  function go(step) {
    activate(Math.min(Math.max(current + step, 0), cards.length - 1), true);
  }

  prev.onclick = () => go(-1);
  next.onclick = () => go(1);

  addEventListener(
    "keydown",
    (e) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1);
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1);
    },
    { passive: true }
  );

  cards.forEach((card, i) => {
    card.addEventListener(
      "mouseenter",
      () => matchMedia("(hover:hover)").matches && activate(i, true)
    );
    card.addEventListener("click", () => activate(i, true));
  });

  let sx = 0,
    sy = 0;
  track.addEventListener(
    "touchstart",
    (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    },
    { passive: true }
  );

  track.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (isMobile() ? Math.abs(dy) > 60 : Math.abs(dx) > 60)
        go((isMobile() ? dy : dx) > 0 ? -1 : 1);
    },
    { passive: true }
  );
  if (window.matchMedia("(max-width:767px)").matches) dotsBox.hidden = true;

  addEventListener("resize", () => center(current));

  toggleUI(0);
  center(0);
})();




const data = [
    {
        place:'Switzerland Alps',
        title:'SAINT',
        title2:'ANTONIEN',
        // description:'Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It\'s a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.',
        image:'https://assets.codepen.io/3685267/timed-cards-1.jpg'
    },
    {
        place:'Japan Alps',
        title:'NANGANO',
        title2:'PREFECTURE',
        // description:'Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country\'s best powder.',
        image:'https://assets.codepen.io/3685267/timed-cards-2.jpg'
    },
    {
        place:'Sahara Desert - Morocco',
        title:'MARRAKECH',
        title2:'MEROUGA',
        // description:'The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.',
        image:'https://assets.codepen.io/3685267/timed-cards-3.jpg'
    },
    {
        place:'Sierra Nevada - USA',
        title:'YOSEMITE',
        title2:'NATIONAL PARAK',
        // description:'Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.',
        image:'https://assets.codepen.io/3685267/timed-cards-4.jpg'
    },
    {
        place:'Tarifa - Spain',
        title:'LOS LANCES',
        title2:'BEACH',
        // description:'Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach\'s long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.',
        image:'https://assets.codepen.io/3685267/timed-cards-5.jpg'
    },
    {
        place:'Cappadocia - Turkey',
        title:'Göreme',
        title2:'Valley',
        // description:'Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.',
        image:'https://assets.codepen.io/3685267/timed-cards-6.jpg'
    },
]

const _ = (id)=>document.getElementById(id)
const cards = data.map((i, index)=>`<div class="card" id="card${index}" style="background-image:url(${i.image})"  ></div>`).join('')



const cardContents = data.map((i, index)=>`<div class="card-content" id="card-content-${index}">
<div class="content-start"></div>
<div class="content-place">${i.place}</div>
<div class="content-title-1">${i.title}</div>
<div class="content-title-2">${i.title2}</div>

</div>`).join('')


const sildeNumbers = data.map((_, index)=>`<div class="item" id="slide-item-${index}" >${index+1}</div>`).join('')
_('demo').innerHTML =  cards + cardContents
_('slide-numbers').innerHTML =  sildeNumbers


const range = (n) =>
  Array(n)
    .fill(0)
    .map((i, j) => i + j);
const set = gsap.set;

function getCard(index) {
  return `#card${index}`;
}
function getCardContent(index) {
  return `#card-content-${index}`;
}
function getSliderItem(index) {
  return `#slide-item-${index}`;
}

function animate(target, duration, properties) {
  return new Promise((resolve) => {
    gsap.to(target, {
      ...properties,
      duration: duration,
      onComplete: resolve,
    });
  });
}

let order = [0, 1, 2, 3, 4, 5];
let detailsEven = true;

let offsetTop = 200;
let offsetLeft = 700;
let cardWidth = 200;
let cardHeight = 300;
let gap = 40;
let numberSize = 50;
const ease = "sine.inOut";

function init() {
  const [active, ...rest] = order;
  const detailsActive = detailsEven ? "#details-even" : "#details-odd";
  const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
  const { innerHeight: height, innerWidth: width } = window;
  offsetTop = height - 430;
  offsetLeft = width - 830;

  gsap.set("#pagination", {
    top: offsetTop + 330,
    left: offsetLeft,
    y: 200,
    opacity: 0,
    zIndex: 60,
  });
  gsap.set("nav", { y: -200, opacity: 0 });

  gsap.set(getCard(active), {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
  gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
  gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
  gsap.set(`${detailsInactive} .text`, { y: 100 });
  gsap.set(`${detailsInactive} .title-1`, { y: 100 });
  gsap.set(`${detailsInactive} .title-2`, { y: 100 });
  gsap.set(`${detailsInactive} .desc`, { y: 50 });
  gsap.set(`${detailsInactive} .cta`, { y: 60 });

  gsap.set(".progress-sub-foreground", {
    width: 500 * (1 / order.length) * (active + 1),
  });

  rest.forEach((i, index) => {
    gsap.set(getCard(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap),
      y: offsetTop,
      width: cardWidth,
      height: cardHeight,
      zIndex: 30,
      borderRadius: 10,
    });
    gsap.set(getCardContent(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap),
      zIndex: 40,
      y: offsetTop + cardHeight - 100,
    });
    gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
  });

  gsap.set(".indicator", { x: -window.innerWidth });

  const startDelay = 0.6;

  gsap.to(".cover", {
    x: width + 400,
    delay: 0.5,
    ease,
    onComplete: () => {
      setTimeout(() => {
        loop();
      }, 500);
    },
  });
  rest.forEach((i, index) => {
    gsap.to(getCard(i), {
      x: offsetLeft + index * (cardWidth + gap),
      zIndex: 30,
      delay: 0.05 * index,
      ease,
      delay: startDelay,
    });
    gsap.to(getCardContent(i), {
      x: offsetLeft + index * (cardWidth + gap),
      zIndex: 40,
      delay: 0.05 * index,
      ease,
      delay: startDelay,
    });
  });
  gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
}

let clicks = 0;

function step() {
  return new Promise((resolve) => {
    order.push(order.shift());
    detailsEven = !detailsEven;

    const detailsActive = detailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

    document.querySelector(`${detailsActive} .place-box .text`).textContent =
      data[order[0]].place;
    document.querySelector(`${detailsActive} .title-1`).textContent =
      data[order[0]].title;
    document.querySelector(`${detailsActive} .title-2`).textContent =
      data[order[0]].title2;
    document.querySelector(`${detailsActive} .desc`).textContent =
      data[order[0]].description;

    gsap.set(detailsActive, { zIndex: 22 });
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
    gsap.to(`${detailsActive} .text`, {
      y: 0,
      delay: 0.1,
      duration: 0.7,
      ease,
    });
    gsap.to(`${detailsActive} .title-1`, {
      y: 0,
      delay: 0.15,
      duration: 0.7,
      ease,
    });
    gsap.to(`${detailsActive} .title-2`, {
      y: 0,
      delay: 0.15,
      duration: 0.7,
      ease,
    });
    gsap.to(`${detailsActive} .desc`, {
      y: 0,
      delay: 0.3,
      duration: 0.4,
      ease,
    });
    gsap.to(`${detailsActive} .cta`, {
      y: 0,
      delay: 0.35,
      duration: 0.4,
      onComplete: resolve,
      ease,
    });
    gsap.set(detailsInactive, { zIndex: 12 });

    const [active, ...rest] = order;
    const prv = rest[rest.length - 1];

    gsap.set(getCard(prv), { zIndex: 10 });
    gsap.set(getCard(active), { zIndex: 20 });
    gsap.to(getCard(prv), { scale: 1.5, ease });

    gsap.to(getCardContent(active), {
      y: offsetTop + cardHeight - 10,
      opacity: 0,
      duration: 0.3,
      ease,
    });
    gsap.to(getSliderItem(active), { x: 0, ease });
    gsap.to(getSliderItem(prv), { x: -numberSize, ease });
    gsap.to(".progress-sub-foreground", {
      width: 500 * (1 / order.length) * (active + 1),
      ease,
    });

    gsap.to(getCard(active), {
      x: 0,
      y: 0,
      ease,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
      onComplete: () => {
        const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
        gsap.set(getCard(prv), {
          x: xNew,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          zIndex: 30,
          borderRadius: 10,
          scale: 1,
        });

        gsap.set(getCardContent(prv), {
          x: xNew,
          y: offsetTop + cardHeight - 100,
          opacity: 1,
          zIndex: 40,
        });
        gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

        gsap.set(detailsInactive, { opacity: 0 });
        gsap.set(`${detailsInactive} .text`, { y: 100 });
        gsap.set(`${detailsInactive} .title-1`, { y: 100 });
        gsap.set(`${detailsInactive} .title-2`, { y: 100 });
        gsap.set(`${detailsInactive} .desc`, { y: 50 });
        gsap.set(`${detailsInactive} .cta`, { y: 60 });
        clicks -= 1;
        if (clicks > 0) {
          step();
        }
      },
    });

    rest.forEach((i, index) => {
      if (i !== prv) {
        const xNew = offsetLeft + index * (cardWidth + gap);
        gsap.set(getCard(i), { zIndex: 30 });
        gsap.to(getCard(i), {
          x: xNew,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          ease,
          delay: 0.1 * (index + 1),
        });

        gsap.to(getCardContent(i), {
          x: xNew,
          y: offsetTop + cardHeight - 100,
          opacity: 1,
          zIndex: 40,
          ease,
          delay: 0.1 * (index + 1),
        });
        gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
      }
    });
  });
}



async function loop() {
  await animate(".indicator", 2, { x: 0 });
  await animate(".indicator", 0.8, { x: window.innerWidth, delay: 0.3 });
  set(".indicator", { x: -window.innerWidth });
  await step();
  loop();
}

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function loadImages() {
  const promises = data.map(({ image }) => loadImage(image));
  return Promise.all(promises);
}

async function start() {
  try {
    await loadImages();
    init();
  } catch (error) {
    console.error("One or more images failed to load", error);
  }
}

start()





$(window).on('load', function() {
    $('#loader').fadeOut('slow', function() {
        $('#homePage').fadeIn('slow');
    });
});
