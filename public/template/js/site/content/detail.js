$(document).ready(function(){ 
    $(document).on('contextmenu', '#full-slider-container .ug-item-wrapper img', function(event) {
        event.preventDefault();
    });
    
    /**
     * Check if has gravure category
     * If have disable google adsence
     */
    if($('.support-information').attr('data-has-gravure') == "1")
    {
        // Disable google adventising
        $('[data-overlay="true"]').parent().remove();
    }
    
    /**
     * Relative contents
     * Call ajax to get relative contents
     */
    function resizeSidebar()
    {
        $('.rc-box').find('div').resizeHeight(1, true);
    }
    
    function resizeSlideImage()
    {
        $('#thumbs-slider .item').resizeHeight(3/4, true);
    }
    
    //
    var unite = [];
    var isEvented = false;
    
    /**
     * Show full slider
     * Click on thumb slider or image when logged
     * @returns {undefined}
     */
    function showFullSlider(container, pos)
    {
        if(unite[container] == undefined){
            $(container).removeClass('hidden');

            unite[container] = $(container).find('.list-gallery-item').unitegallery({
                gallery_theme: "compact",
                slider_zoom_max_ratio: 2.5
            });

            unite[container].on("exit_fullscreen",function(){	//on exit fulscreen
                $(container).addClass('hidden');
            });

            unite[container].on('enter_fullscreen', function(){
                $(container).removeClass('hidden');
                /**
                * Event when taphold and right click
                */
                if(!isEvented)
                {
                    $(container).find('img').bind('contextmenu', function(event) {
                        event.preventDefault();
                    });

                    isEvented = true;
                }
            });
        }
        
        $(container).find('.list-gallery-item [data-pos="'+pos+'"]').click();        
        unite[container].enterFullscreen();
    }
    
    /**
     * Success append
     * @returns void
     */
    function successAppend(thumbs, container)
    {
        $(thumbs).owlCarousel({
            //stagePadding: 50,
            //loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            },
            onInitialized: function(){
                $(thumbs + " img").on('error', function () { 
                    $(this).attr('src', URL.NO_IMAGE_AVAILABLE);
                    $(this).parent().css('background-image', 'url(\''+URL.NO_IMAGE_AVAILABLE+'\')');
                    var pos = $(this).parent().attr('data-pos');
                    $(container).find('.list-gallery-item [data-pos="'+pos+'"]').attr('src', URL.NO_IMAGE_AVAILABLE);
                    $(container).find('.list-gallery-item [data-pos="'+pos+'"]').attr('data-image', URL.NO_IMAGE_AVAILABLE);
                })
                .each(function() {
                    $(this).attr("src",$(this).attr("src"));
                });
            }
        });
        
        $(container).addClass('hidden');
        
        $(document).on('click', thumbs + ' .item', function(e){
            e.preventDefault();
            showFullSlider(container, $(this).attr('data-pos'));
        });
    }
    
    /**
     * Event parse slide to content
     */
    if($('#thumbs-slider .item').length == 0) {
        $('#thumbs-slider').remove();
        $('#full-slider-container').remove();  
    } else {
        successAppend("#thumbs-slider", '#full-slider-container');
    }

    /**
     * Event when click on image of post
     * 
     */
    $(document).on('click', '#div-friday-content img', function(){
        if($(this).closest('.image-container').length != 0){
            if($(this).attr('data-type') == 'unpaid'){
                if($('.link-for-click').length > 0){
                    window.location.href = $('.link-for-click').attr('href');
                }
            }
            // Handle event show full screen
            else if(($(this).closest('.image-container').attr('data-viewer') == 'true'
                    || $(this).closest('.image-container').attr('data-viewer') == true)
                    && $('#thumbs-slider .item').length != 0){
                showFullSlider('#full-slider-container', $('#thumbs-slider .item:first-child').attr('data-pos'));
            }
        }
    });

    /**
     * Ajax load relation contents
     * Call ajax to get contents with this current content
     */
    $.ajax({
        url: URL.SITE.CONTENT.GET_RELATIVE_CONTENTS,
        data: {
            data: $('.support-information').attr('data-content-id')
        },
        success: function(response){
            $('.relative-contents').html(response);
            resizeSidebar();
            $('.relative-contents img').on('error', function(){
                $(this).parent().css('background-image', "url('"+URL.NO_IMAGE_AVAILABLE+"')");
            });
            
            $('.relative-contents img').on('load', function(){
                $(this).parent().css('background-image', "url('"+$(this).attr('src')+"')");
            });
        },
        error: function(){
            $('.relative-contents').html(MSG.SITE.CONTENT.ERROR_LOADING_RELATION);
        }
    });
});