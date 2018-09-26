$(document).ready(function() {
    var take = 6;
    
//    if(APP.getDevice() == 'pc'){
//        var take = 6;
//    }
        
    function getContents(page){
        $.ajax({
            url: URL.SITE.BOOK.BOOK_LIST + '?data=' + JSON.stringify({take: take, page: page}),
            type: "GET",
            success: function(response){
                $('#btn-load-more').parent().remove();
                $('#ajax-container').append(response);
                $('#ajax-container img').on('error', function(){
                    $(this).prop('src', URL.NO_IMAGE_AVAILABLE);
                    $(this).parent().css({'background-image': 'url("'+ URL.NO_IMAGE_AVAILABLE + '")'});
                });
                $('#ajax-container .custom-list-item-thumbnail').resizeHeight(CONST.GROUP_HEIGHT_RATE, true);
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