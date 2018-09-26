function getSelectionStart(){
   var node = document.getSelection().anchorNode;
   return (node.nodeType == 3 ? node.parentNode : node);
}

$('.custom-list-item img').on('error', function(){
    $(this).prop('src', URL.NO_IMAGE_AVAILABLE);
    $(this).parent().css({backgroundImage: 'url('+URL.NO_IMAGE_AVAILABLE+')'});
});
// public/js/config.js
$(function () {
//    $.ajaxPrefilter(function(options, originalOptions, xhr) {
//        return xhr.setRequestHeader('X-CSRF-TOKEN', APP.getToken());
//    });
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': APP.getToken()
        }
    });

    /**
     * Event resize sidebar image
     */
    $('.custom-list-item .custom-list-item-thumbnail.large').resizeHeight(1, true);
    $('.custom-list-item .custom-list-item-thumbnail.small').resizeHeight(1, true);

    $('.custom-list-item img').on('error', function(){
        $(this).prop('src', URL.NO_IMAGE_AVAILABLE);
        $(this).parent().css({backgroundImage: 'url('+URL.NO_IMAGE_AVAILABLE+')'});
    });
    
    /**
     * Is exists url
     * @param {type} status
     * @returns {undefined}
     */
    $('[data-name="lastest-book"]').css({backgroundImage: "url('"+$('[data-name="lastest-book"]').attr('data-src')+"')"});
    $('[data-name="lastest-book"] img').on('error', function(){
        $('[data-name="lastest-book"]').css({backgroundImage: "url('"+URL.NO_IMAGE_AVAILABLE+"')"});
    });
    
    /* Event when input error filed*/
    $(document).on("keyup change paste", ".has-error .form-control", function () {
        $(this).closest('.has-error').find('.help-block').text('');
        $(this).closest('.has-error').removeClass('has-error');
    });
    
    //
    $('.btn-0-336').resizeHeight(0.336, true);
});