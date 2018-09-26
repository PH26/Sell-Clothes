$(document).ready(function() {
    var take = 0;//6;
    
//    if(APP.getDevice() == 'pc'){
//        take = 6;
//    }
    
    function getContents(page){
        $.ajax({
            url: URL.SITE.PHOTOBOOK.PHOTO_LIST + '?data=' + JSON.stringify({take: take, page: page, type: $('.support-information').attr('data-type')}),
            type: "GET",
            success: function(response){
                $('#btn-load-more').parent().remove();
                $('#ajax-container').append(response);
                $('#ajax-container img').on('error', function(){
                    $(this).prop('src', URL.NO_IMAGE_AVAILABLE);
                    $(this).parent().css({'background-image': 'url("'+ URL.NO_IMAGE_AVAILABLE + '")'});
                });
                $('#ajax-container .custom-list-item-thumbnail').resizeHeight(1.504288734521293, true);
                var hash = window.location.hash;
                window.location.hash = '#top';
                window.location.hash = hash;
            }
        });
    }
    
    getContents(1);
    
    $(document).on('click', '#btn-load-more', function(){
        var page = parseInt($(this).attr('data-page'));
        $(this).append(' <i class="friday-loading"></i>');
        getContents(page+1);
    });
});