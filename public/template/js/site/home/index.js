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
    function getContents(page){
        var data = {page: page};
        var date = $('#ajax-container').attr('data-date');
        var ignore = $('#ajax-container').attr('data-ignore');
        
        if(date != "" && date != undefined){
            data.date = date;
        }
        
        if(ignore != "" && ignore != undefined){
            data.ignore = ignore;
        }
        
        $.ajax({
            url: URL.SITE.HOME.TOP_CONTENTS + '?data=' + JSON.stringify(data),
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