$(document).ready(function() {
    function getContents(page){
        $.ajax({
            url: URL.SITE.CATEGORY.CONTENTS_BY_CATEGORY + '/' + $('.support-information').attr('data-url') + '?data=' + page,
            type: "GET",
            success: function(response){
                $('.btn-load-more-contents').remove();
                $('#contents-container').append(response);
                $('#contents-container img').on('error', function(){
                    $(this).prop('src', URL.NO_IMAGE_AVAILABLE);
                    $(this).parent().css({'background-image': 'url("'+ URL.NO_IMAGE_AVAILABLE + '")'});
                });
                $('#contents-container .custom-list-item-thumbnail').resizeHeight(1, true);
            }
        });
    }
    getContents(1);
    $(document).on('click', '.btn-load-more-contents', function(){
        var page = parseInt($(this).attr('data-page'));
        $(this).append(' <i class="friday-loading"></i>')
        getContents(page+1);
    });
});
