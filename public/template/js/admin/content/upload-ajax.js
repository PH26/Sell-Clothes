$(function(){
    var finishThumnail = true;
    var finishPostimage = true;
    var Elements = {
        ARTICLE_IMAGE: "#upload-postimage",
        PREMIUM_IMAGE: "#upload-premiumimage",
        THUMBNAIL: "#upload-thumbnail",
        GRAVURE_THUMBNAIL: "#upload-gravurethumbnail"
    };
    
    function finishUpload(){
        if(finishPostimage && finishThumnail){
            $('*[type="submit"]').prop('disabled', false);
        }else{
            $('*[type="submit"]').prop('disabled', true);
        }
    };
    
    /**
     * Set can for image
     * @param img
     * @returns {undefined}
     */
    function draggable(img) {
        $(img).draggable({
            revert: "invalid",
            refreshPositions: true,
            drag: function (event, ui) {
                ui.helper.addClass("draggable");
            },
            stop: function (event, ui) {
                ui.helper.removeAttr('style');
                ui.helper.removeClass("draggable");
            }
        });
    }
    
    /**
     * -------------------------------------------------------------------------
     * Ajax upload for images
     * -------------------------------------------------------------------------
     */
    // Handle event when drag and drop to div
    var thumbnailUploadHandle = new uploadHandle({
        finish: function(){
            finishThumnail = true;
            finishUpload();
        }
    });

    /**
     * Dragenter event
     * This even hanlde when drag
     */
    $(Elements.THUMBNAIL + ',' + Elements.GRAVURE_THUMBNAIL).on('dragenter', function (e){
        e.stopPropagation();
        e.preventDefault();
        $(this).addClass('dashed-sm-primary');
    });
    
    /**
     * Dragover
     * This method will be call when have Dragover event on thumnail
     */
    $(Elements.THUMBNAIL + ',' + Elements.GRAVURE_THUMBNAIL).on('dragover', function (e) {
         e.stopPropagation();
         e.preventDefault();
    });
    
    /**
     * Drop event
     * This func will be call when have event drop on thumbnail
     */
    $(Elements.THUMBNAIL + ',' + Elements.GRAVURE_THUMBNAIL).on('drop', function (e) {
         $(this).removeClass('dashed-sm-primary');
         e.preventDefault();
         var files = e.originalEvent.dataTransfer.files;
         $(this).closest('.col-md-12').removeClass('has-error');
         $(this).closest('.col-md-12').find('.help-block').text('');
         
         //We need to send dropped files to Server
         handleThumbnailUpload(files, this);
    });
    
    /**
     * Hanlde for upload thumbnail
     * @param {type} files
     * @param {type} obj
     * @returns {undefined}
     */
    function handleThumbnailUpload(files, obj){
        var fd = new FormData();
        fd.append('file', files[0]);
        finishThumnail = false;
        finishUpload();
        
        thumbnailUploadHandle.upload({
            url: URL.ADMIN.MEDIA.API_UPLOAD_IMAGE,
            data:{
                files: fd
            },
            headers: {
                'X-CSRF-TOKEN': APP.getToken(),
                'MEDIA-TYPE': 'archive'
            },
            progress: {
                element: $(obj).attr('data-target-progress'),
                fileSize: [files[0].name,files[0].size]
            },
            success: function(response){
                if(response.status){
                    $(obj).css({
                        backgroundImage: "url('"+response.root_media + response.files[0].thumbnailPath+"')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center"
                    });
                    $($(obj).attr('data-target-id')).val(response.files[0].id);
                    $($(obj).attr('data-target-image')).val(response.root_media + response.files[0].thumbnailPath);
                } else {
                    ///Alert.show('danger', response.message);
                    obj.closest('.col-md-12').addClass('has-error');
                    obj.closest('.col-md-12').find('.help-block').text(response.message);
                }
            }
        });
    }
    
    /**
     * -------------------------------------------------------------------------
     * Ajax upload for images
     * -------------------------------------------------------------------------
     */
    /**
     * Add image to image list method
     * @param {type} response
     * @param {type} obj
     * @returns {undefined}
     */
    function addImageToImageList(response, obj){
        var img = $('<div class="image-container" contenteditable="false" data-id="'+response.files[0].id+'" data-name="'+response.files[0].largePath+'" data-alt="'+response.files[0].note+'" data-large-src="'+response.root_media + response.files[0].largePath+'" data-thumbnail-src="'+response.root_media + response.files[0].thumbnailPath+'">'
                    + '<img alt="'+response.files[0].note+'" src="'+response.root_media + response.files[0].largePath+'">'
                    + '<div class="help-block"></div>'
                    + '</div>');
        $(obj).parent().after(img);
        /**
        * Event when drag and drog
        */
        draggable(img);
    }
    
    /**
     * Load image from cookie
     * @type Array|Object
     */
    var nameCookie = 'image-upload';
    
    if($('.__is_has_error').val() != 1 && $('.__is_has_error').val() != '1'){
        $.removeCookie(nameCookie,{path: '/'});
    }
    
    var _oldImage = $.cookie(nameCookie);
    
    if(_oldImage != null && _oldImage != undefined && _oldImage != ''){
        _oldImage = JSON.parse(_oldImage);
        
        for(var id in _oldImage){
            for(var key in _oldImage[id]){
                addImageToImageList(_oldImage[id][key], $('#' + id));
            }
        }
    }
    
    var postUploadHandle = new uploadHandle({
        finish: function(){
            finishPostimage = true;
            finishUpload();
        }
    });
    
    /**
     * Dragenter event
     * This even hanlde when drag
     */
    $(Elements.ARTICLE_IMAGE + ',' + Elements.PREMIUM_IMAGE).on('dragenter', function (e){
        e.stopPropagation();
        e.preventDefault();
        $(this).addClass('dashed-sm-primary');
    });
    
    /**
     * Dragover
     * This method will be call when have Dragover event on thumnail
     */
    $(Elements.ARTICLE_IMAGE + ',' + Elements.PREMIUM_IMAGE).on('dragover', function (e) {
         e.stopPropagation();
         e.preventDefault();
    });
    
    /**
     * Drop event
     * This func will be call when have event drop on thumbnail
     */
    $(Elements.ARTICLE_IMAGE + ',' + Elements.PREMIUM_IMAGE).on('drop', function (e) {
        $(this).removeClass('dashed-sm-primary');
        e.preventDefault();
        var files = e.originalEvent.dataTransfer.files;
         
        //We need to send dropped files to Server
        $(this).closest('.col-md-12').removeClass('has-error');
        $(this).closest('.col-md-12').find('.help-block').text('');
         
        //We need to send dropped files to Server
        for(var index = 1; index <= files.length; index++){
            handleMediaUpload(files[index-1], $(this));
        }
    });
    
    /**
     * -------------------------------------------------------------------------
     * Event when open choose file
     * -------------------------------------------------------------------------
     */
    $(document).on('click','.btn-choose-file', function(){
        $(this).parent().find('input').click();
    });
    
    $(document).on('change', 'input[type="file"]', function(event){
        var files = event.target.files;
        //Alert.hide('danger');
        if($(this).attr('data-type') == 'thumbnail'){
            handleThumbnailUpload(files, $(this).parent());
            $(this).closest('.col-md-12').removeClass('has-error');
            $(this).closest('.col-md-12').find('.help-block').text('');
        } else {
            for(var index = 1; index <= files.length; index++){
                handleMediaUpload(files[index-1], $(this).parent());
            }
        }
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
        $(Elements.THUMBNAIL).removeClass('dashed-sm-primary');
        $(Elements.ARTICLE_IMAGE).removeClass('dashed-sm-primary');
        $(Elements.PREMIUM_IMAGE).removeClass('dashed-sm-primary');
    });
    
    /**
     * Upload img for content page
     * @param {type} file
     * @returns {undefined}
     */
    function handleMediaUpload(file, container){
        var formData = new FormData();
        formData.append('file', file);
        var countEl = $(container).parent().parent().find('.media-progress').length+1;
        var img = $('<div class="image-container" contenteditable="false" data-id="" data-name="" data-alt="" data-large-src="" data-thumbnail-src="">'
                    + '<img alt="">'
                    + '<div class="media-progress" data-progress="media-'+$(container).attr('id')+'-'+countEl+'"></div>'
                    + '<div class="help-block"></div>'
                    + '</div>');
        $(container).parent().after(img);
        finishPostimage = false;
        finishUpload();
        postUploadHandle.upload({
            url: URL.ADMIN.MEDIA.API_UPLOAD_IMAGE,
            data:{
                files: formData
            },
            headers: {
                'X-CSRF-TOKEN': APP.getToken(),
                'MEDIA-TYPE': 'media',
                'MAKE-BLUR': $(container).closest('[data-blur="true"]').length > 0 ? 'true' : 'false'
            },
            progress: {
                element: '[data-progress="media-'+$(container).attr('id')+'-'+countEl+'"]',
                fileSize: [file.name,file.size],
                color: 'primary',
                type: 'one'
            },
            success: function(response){
                if(!response.status){
                    $(img).addClass('has-error');
                    $(img).find('img').addClass('form-control');
                    $(img).find('.help-block').text(response.message);
                } else {
                    $(img).removeClass('has-error');

                    var oldImage = $.cookie(nameCookie);
                    
                    if(oldImage != null && oldImage != undefined && oldImage != ''){
                        oldImage = JSON.parse(oldImage);
                    } else {
                        oldImage = {};
                    }
                    
                    if (oldImage[$(container).attr('id')] == undefined) {
                        oldImage[$(container).attr('id')] = [];
                    }

                    oldImage[$(container).attr('id')].push(response);
                    $.cookie(nameCookie, JSON.stringify(oldImage), {path: '/'});
            
                    $(img).attr({
                        'data-id': response.files[0].id,
                        'data-name': response.files[0].largePath,
                        'data-alt': response.files[0].note,
                        'data-large-src': response.root_media + response.files[0].largePath,
                        'data-thumbnail-src': response.root_media + response.files[0].thumbnailPath
                    });
                    
                    $(img).find('img').attr({
                        'alt': response.files[0].note,
                        'src': response.root_media + response.files[0].largePath
                    });
                    
                    draggable(img);
                }
            },
            error: function(){
                $(img).addClass('has-error');
                $(img).find('.help-block').text(MSG.ERROR_CONNECT);
                $(img).find('img').addClass('form-control');
            }
        });
    }
});