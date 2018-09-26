$(document).ready(function(){
    $('.group-thumbnail').resizeHeight(CONST.GROUP_HEIGHT_RATE, true, function(instance, width, height){
        if(height < 1){
            $('.lastest-content .custom-list-item-thumbnail').resizeHeight(0.7, false);
        } else {
            $('.lastest-content .custom-list-item-thumbnail').css({height: (height - 43) + 'px'});
        }
    });
    
    $('.group-thumbnail img').on('error', function(){
        $(this).prop('src', URL.NO_IMAGE_AVAILABLE);
        $(this).parent().css({'background-image': 'url("'+ URL.NO_IMAGE_AVAILABLE + '")'});
    });
    
    $('.lastest-content .custom-list-item-thumbnail img').on('error', function(){
        $(this).prop('src', URL.NO_IMAGE_AVAILABLE);
        $(this).parent().css({'background-image': 'url("'+ URL.NO_IMAGE_AVAILABLE + '")'});
    });
    /**
     * Call ajax top get
     */
    $('#ajax-container img').on('error', function(){
        $(this).prop('src', URL.NO_IMAGE_AVAILABLE);
        $(this).parent().css({'background-image': 'url("'+ URL.NO_IMAGE_AVAILABLE + '")'});
    });
    $('#ajax-container .custom-list-item-thumbnail').resizeHeight(1, true);
});