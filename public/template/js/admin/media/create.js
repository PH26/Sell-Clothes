$(document).ready(function(){
    /**
     * -------------------------------------------------------------------------
     * Ajax upload for images
     * -------------------------------------------------------------------------
     */
    // Handle event when drag and drop to div
    var media = $("#drop-area");
    var mediaUploadHandle = new uploadHandle({
        finish: function(){
            //window.location.href = URL.ADMIN.MEDIA.MEDIA_LIST;
        }
    });

    /**
     * Dragenter event
     * This even hanlde when drag
     */
    media.on('dragenter', function (e){
        e.stopPropagation();
        e.preventDefault();
        $(this).addClass('dashed-md-primary');
        $(this).removeClass('dashed-md-default');
    });
    
    /**
     * Dragover
     * This method will be call when have Dragover event on thumnail
     */
    media.on('dragover', function (e) {
         e.stopPropagation();
         e.preventDefault();
    });
    
    /**
     * Drop event
     * This func will be call when have event drop on media
     */
    media.on('drop', function (e) {
        $(this).removeClass('dashed-md-primary');
        $(this).addClass('dashed-md-default');
        e.preventDefault();
        var files = e.originalEvent.dataTransfer.files;
        //Alert.hide('danger');
        media.removeClass('has-error');
        media.find('.help-block').text('');
        //We need to send dropped files to Server
        for(var index = 1; index <= files.length; index++){
            handleMediaUpload(files[index-1]);
        }
    });
    
    function handleMediaUpload(file){
        var formData = new FormData();
        formData.append('file', file);
        var div = document.createElement('div');
        $(div).addClass('file-container');
        $(div).append('<div class="media-content">'
                +'<div class="row">'
                +'<div class="col-md-1 count-file"><span class="badge">'+($('#file-status-list .file-container').length + 1)+'</span></div>'
                +'<div class="col-md-3" style="word-wrap: break-word">'+file.name+'</div>'
                +'<div class="col-md-8">'
                +'<div class="media-progress"></div>'
                +'</div>'
                +'</div>'
                +'</div>'
                +'<div class="help-block"></div>');

        $('#file-status-list').append(div);

        mediaUploadHandle.upload({
            url: URL.ADMIN.MEDIA.API_UPLOAD_IMAGE,
            data:{
                files: formData
            },
            headers: {
                'X-CSRF-TOKEN': APP.getToken(),
                'MEDIA-TYPE': 'media'
            },
            progress: {
                element: $(div).find('.media-progress'),
                fileSize: [file.name,file.size],
                color: 'primary',
                hide: false
            },
            success: function(response){
                $(div).find('.media-progress').show();
                $(div).find('.media-progress .progress').removeClass('active')
                if(!response.status){
                    $(div).addClass('has-error');
                    $(div).find('.help-block').text(response.message);
                    $(div).find('.progress-bar').removeClass('progress-bar-success').removeClass('progress-bar-primary').addClass('progress-bar-danger');
                    //Alert.show('danger', response.message);
                } else {
                    //window.location.href = URL.ADMIN.MEDIA.MEDIA_LIST;
                    $(div).removeClass('has-error');
                    $(div).find('.help-block').text('');
                    $(div).find('.progress-bar').removeClass('progress-bar-primary').removeClass('progress-bar-danger').addClass('progress-bar-success');
                }
            },
            error: function(){
                //Alert.show('danger', MSG.ERROR_CONNECT);
                $(div).addClass('has-error');
                $(div).find('.help-block').text(MSG.ERROR_CONNECT);
                $(div).find('.media-progress').show();
                $(div).find('.media-progress .progress').removeClass('active');
                $(div).find('.progress-bar').removeClass('progress-bar-success').removeClass('progress-bar-primary').addClass('progress-bar-danger');
                //Alert.show('danger', response.message);
            }
        });
    }
    /**
     * -------------------------------------------------------------------------
     * Event when open choose file
     * -------------------------------------------------------------------------
     */
    $(document).on('click','.btn-file', function(){
        $(this).parent().find('input').click();
    });
    
    $(document).on('change', 'input[type="file"]', function(event){
        var files = event.target.files;
        //Alert.hide('danger');
        for(var index = 1; index <= files.length; index++){
            handleMediaUpload(files[index-1]);
        }
        media.removeClass('has-error');
        media.find('.help-block').text('');
        $(this).val('');
    });
    /**
     * -------------------------------------------------------------------------
     * Ajax upload for common
     * -------------------------------------------------------------------------
     */
    $(document).on('dragenter', function (e) {
        e.stopPropagation();
        e.preventDefault();
    });
    
    $(document).on('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();
    });
    
    $(document).on('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();
        media.removeClass('dashed-md-primary');
        media.addClass('dashed-md-default');
    });
});