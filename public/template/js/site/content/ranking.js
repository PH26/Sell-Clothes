$(document).ready(function(){
    $('.rank-container .custom-list-item img').on('error', function(){
        $(this).prop('src', URL.NO_IMAGE_AVAILABLE);
        $(this).parent().css({'background-image': 'url("'+ URL.NO_IMAGE_AVAILABLE + '")'});
    });
    $('.rank-container .custom-list-item-thumbnail').resizeHeight(1, true);
});