$(document).ready(function(){
    /**
     * Call ajax top get
     */
    function getContents(page){
        $.ajax({
            url: URL.SITE.HOME.SEARCH_CONTENTS + '?data=' + encodeURIComponent(JSON.stringify({page: page, keyword: $('#ajax-container').attr('data-keyword')})),
            type: "GET",
            success: function(response){
                $('#btn-load-more').remove();
                $('#ajax-container').append(response);
                $('#ajax-container img').on('error', function(){
                    $(this).prop('src', URL.NO_IMAGE_AVAILABLE);
                    $(this).parent().css({'background-image': 'url("'+ URL.NO_IMAGE_AVAILABLE + '")'});
                });
                $('#ajax-container .custom-list-item-thumbnail').resizeHeight(1, true);
            }
        });
    }
    
    getContents(1);
    
    $(document).on('click', '#btn-load-more', function(){
        var page = parseInt($(this).attr('data-page'));
        $(this).append(' <i class="friday-loading"></i>')
        getContents(page+1);
    });
});