$(function(){
    function init(){
        // Resize image of contents
        $('.content-area .thumbnail').resizeHeight(430/587, true);

        function resetSlide(){
            var h = ($('.slide-area').width()*(6333/9528));
            var margintop = h/2 - 34;
            $('.slide-area .item').css('height',  h + 'px');
            $('.owl-prev, .owl-next').css('top',  margintop + 'px');
        }

        $(window).resize(function(){
            resetSlide();
        });

        $(window).on("orientationchange",function(){
            window.setTimeout(resetSlide, 500);
        });

        resetSlide();
        
        if($(window).width() > 991){
            // Height for row 1
            var maxHeight = 0;
            $('[data-row="1"] a.title').each(function(){
               var thisH = $(this).height();
               if (thisH > maxHeight) { maxHeight = thisH; }
            });
            $('[data-row="1"] a.title').height(maxHeight);

            // Height for row 2
            maxHeight = 0;
            $('[data-row="2"] a.title').each(function(){
               var thisH = $(this).height();
               if (thisH > maxHeight) { maxHeight = thisH; }
            });
            $('[data-row="2"] a.title').height(maxHeight);
        }
    }
    
    // Get and create owl carousel
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 0,
        stagePadding:0,
        smartSpeed: 450,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText : ['<i class="slide-left"></i>', '<i class="slide-right"></i>']
    });
  
    
    
    // Load photobook
    // If is smartphone then load 8 items
    // Else if is pc then load 15 items
    $.ajax({
        url: URL.SITE.GRAVURE.PHOTOBOOK,
        type: "GET",
        data: {
            data: ($(window).width() > 991 ? 15 : 8)
        },
        success: function(response){
            $('.photobook-area .photobook-list').html(response);
            $('.photobook-area .photobook-list .photobook').resizeHeight(500/333, true);
        }
    });
    
    // Call init()
    init();
});