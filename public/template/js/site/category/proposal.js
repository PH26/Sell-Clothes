$(document).ready(function() {
    function getContents(page, instance){
        $.ajax({
            url: URL.SITE.CATEGORY.CONTENTS_BY_CATEGORY + '/' + $(instance).attr('data-url') + '?data=' + page,
            type: "GET",
            success: function(response){
                $(instance).find('.btn-load-more-contents').remove();
                $(instance).append(response);
                $(instance).find('img').on('error', function(){
                    $(this).prop('src', URL.NO_IMAGE_AVAILABLE);
                    $(this).parent().css({'background-image': 'url("'+ URL.NO_IMAGE_AVAILABLE + '")'});
                });
                $(instance).find('.custom-list-item-thumbnail').resizeHeight(1, true);
            }
        });
    }
    
    $('.ajax-container').each(function(){
        getContents(1, this);
    });
    
    $(document).on('click', '.btn-load-more-contents', function(){
        var page = parseInt($(this).attr('data-page'));
        $(this).append(' <i class="friday-loading"></i>')
        getContents(page+1, $(this).parent());
    });
});
