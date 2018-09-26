$(document).ready(function(){
    /**
     * -------------------------------------------------------------------------
     * Ajax upload for images
     * -------------------------------------------------------------------------
     */
    var isSubmit = false;
    function checkCanSubmit(){
        if($('input[name="mediaId"]').val() == '' || $('input[name="mediaId_mobile"]').val() == '' || $('input[name="title"]').val() == ''){
            $('*[type="submit"]').prop('disabled', true);
            isSubmit = false;
        } else {
            $('*[type="submit"]').prop('disabled', false);
        }
    }
    
    /**
     * Confirm add book
     * This method will be show form common to confirm
     */
    $(document).on('submit','#form_add_release', function(e){
        if(isSubmit){
            return true;
        }
        e.preventDefault();
        OptionDialog.show({
            title: MSG.CONFIRM_CREATE,
            content: MSG.ADMIN.BOOK.CONFIRM_CREATE_BOOK,
            buttons: {
                yes: {
                    tag: 'button',
                    attributes: {
                        text: MSG.BUTTON_YES,
                        class: 'btn btn-primary'
                    },
                    events: {
                        click: function(e){
                            isSubmit = true;
                            $("#form_add_release").submit();
                        }
                    }
                },
                no: {
                    tag: 'button',
                    attributes: {
                        text: MSG.BUTTON_NO,
                        class: 'btn btn-primary'
                    },
                    events: {
                        click: function(e){
                            OptionDialog.hide();
                        }
                    }
                } 
            }
        });
    });
    
    // Handle event when drag and drop to div
    var dropArea = $(".drop-area");
    var dropAreaUploadHandle = new uploadHandle({
        finish: function(){
            //window.location.href = URL.ADMIN.MEDIA.MEDIA_LIST;
            checkCanSubmit();
        }
    });
    
    checkCanSubmit();
    /**
     * Dragenter event
     * This even hanlde when drag
     */
    dropArea.on('dragenter', function (e){
        e.stopPropagation();
        e.preventDefault();
        $(this).addClass('dashed-md-primary');
        $(this).removeClass('dashed-md-default');
    });
    
    /**
     * Dragover
     * This method will be call when have Dragover event on thumnail
     */
    dropArea.on('dragover', function (e) {
         e.stopPropagation();
         e.preventDefault();
    });
    
    /**
     * Drop event
     * This func will be call when have event drop on dropArea
     */
    dropArea.on('drop', function (e) {
        $(this).removeClass('dashed-md-primary');
        $(this).addClass('dashed-md-default');
        e.preventDefault();
        var files = e.originalEvent.dataTransfer.files;
        //Alert.hide('danger');
        dropArea.closest('.main-container').removeClass('has-error');
        dropArea.closest('.main-container').find('.help-block').text('');
        //We need to send dropped files to Server
        handleMediaUpload(files, this);
    });
    
    function handleMediaUpload(files, instance){
        $('*[type="submit"]').prop('disabled', true);
        if($(instance).attr('data-type') == 'normal'){
            $('input[name="mediaId"]').val('');
        } else {
            $('input[name="mediaId_mobile"]').val('');
        }
        var formData = new FormData();
        formData.append('file', files[0]);
        dropAreaUploadHandle.upload({
            url: URL.ADMIN.MEDIA.API_UPLOAD_IMAGE,
            data:{
                files: formData
            },
            headers: {
                'X-CSRF-TOKEN': APP.getToken(),
                'MEDIA-TYPE': 'cover'
            },
            progress: {
                element: '.media-progress-'+$(instance).attr('data-type'),
                fileSize: [files[0].name,files[0].size]
            },
            success: function(response){
                $('.media-progress-'+$(instance).attr('data-type')).hide();
                if(!response.status){
                    //Alert.show('danger', response.message);
                    $(instance).closest('.main-container').addClass('has-error');
                    $(instance).closest('.main-container').find('.help-block').text(response.message);
                } else {
                    //window.location.href = URL.ADMIN.MEDIA.MEDIA_LIST;
                    if($(instance).attr('data-type') == 'normal'){
                        $('input[name="mediaId"]').val(response.files[0].id);
                        $('input[name="media_path"]').val(response.root_media + response.files[0].thumbnailPath);
                    } else {
                        $('input[name="mediaId_mobile"]').val(response.files[0].id);
                        $('input[name="media_mobile_path"]').val(response.root_media + response.files[0].thumbnailPath);
                    }
                    $(instance).css({backgroundImage: 'url("'+response.root_media + response.files[0].thumbnailPath+'")'});
                    //$(instance).css({backgroundImage: 'url("https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg")'});
                }
            },
            error: function(){
                $('.media-progress-'+$(instance).attr('data-type')).hide();
                //Alert.show('danger', MSG.ERROR_CONNECT);
                //Alert.show('danger', response.message);
                $(instance).closest('.main-container').addClass('has-error');
                $(instance).closest('.main-container').find('.help-block').text(MSG.ERROR_CONNECT);
            }
        });
    }
    /**
     * -------------------------------------------------------------------------
     * Event when open choose file
     * -------------------------------------------------------------------------
     */
    $(document).on('click','.btn-file', function(){
        $(this).closest('.main-container').find('input').click();
    });
    
    $(document).on('change', 'input[type="file"]', function(event){
        var files = event.target.files;
        //Alert.hide('danger');
        handleMediaUpload(files, $(this).closest('.drop-area'));
        dropArea.closest('.main-container').removeClass('has-error');
        dropArea.closest('.main-container').find('.help-block').text('');
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
        dropArea.removeClass('dashed-md-primary');
        dropArea.addClass('dashed-md-default');
    });
    
    //window.location.href = URL.ADMIN.MEDIA.MEDIA_LIST;
    $('.drop-area[data-type="normal"]').css({backgroundImage: 'url('+$('input[name="media_path"]').val()+')'});
    $('.drop-area[data-type="mobile"]').css({backgroundImage: 'url('+$('input[name="media_mobile_path"]').val()+')'});
    
    /**
     * Event when change title
     */
    $(document).on('change paste keyup', 'input[name="title"]', function(){
        checkCanSubmit();
    });
});