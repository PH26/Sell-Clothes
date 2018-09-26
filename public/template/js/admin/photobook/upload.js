/**
 * -------------------------------------------------------------------------
 * Ajax upload for images
 * -------------------------------------------------------------------------
 */  
var isSubmit = false;
var finishPostimage = true;

function checkCanSubmit(){
   if($('input[name="mediaId"]').val() == ''
           ||$('input[name="pTitle"]').val() == ''
           || $('input[name="button[0][name]"]').val() == ''
           || $('input[name="button[0][link]"]').val() == ''
           || !finishPostimage){
       $('*[type="submit"]').prop('disabled', true);
       isSubmit = false;
   } else {
       $('*[type="submit"]').prop('disabled', false);
   }
}
    
$(document).ready(function(){
    var Elements = {
        ARTICLE_IMAGE: "#upload-postimage",
        ALBUM: '#gallery-area'
    };

    // Handle event when drag and drop to div
    var dropArea = $(".drop-area");
    
    var dropAreaUploadHandle = new uploadHandle({
        finish: function(){
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
                'MEDIA-TYPE': 'media'
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
     * Event when open choose file
     */
    $(document).on('click','.thumbnail-upload-container .btn-file', function(){
        $(this).closest('.main-container').find('input').click();
    });
    
    $(document).on('change', '.thumbnail-upload-container input[type="file"]', function(event){
        var files = event.target.files;
        //Alert.hide('danger');
        handleMediaUpload(files, $(this).closest('.drop-area'));
        dropArea.closest('.main-container').removeClass('has-error');
        dropArea.closest('.main-container').find('.help-block').text('');
        
        $(this).val('');
    });
    
    $('.drop-area[data-type="normal"]').css({backgroundImage: 'url('+$('input[name="media_path"]').val()+')'});
    
    /**
     * -------------------------------------------------------------------------
     * Ajax upload for article images
     * -------------------------------------------------------------------------
     */
    /**
     * Create new upload handler
     * @type uploadHandle
     */
    var postUploadHandle = new uploadHandle({
        finish: function(){
            finishPostimage = true;
            checkCanSubmit();
        }
    });
    
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
    
    /**
     * Dragenter event
     * This even hanlde when drag
     */
    $(Elements.ARTICLE_IMAGE).on('dragenter', function (e){
        e.stopPropagation();
        e.preventDefault();
        $(this).addClass('dashed-sm-primary');
    });
    
    /**
     * Dragover
     * This method will be call when have Dragover event on thumnail
     */
    $(Elements.ARTICLE_IMAGE).on('dragover', function (e) {
         e.stopPropagation();
         e.preventDefault();
    });
    
    /**
     * Drop event
     * This func will be call when have event drop on thumbnail
     */
    $(Elements.ARTICLE_IMAGE).on('drop', function (e) {
        $(this).removeClass('dashed-sm-primary');
        e.preventDefault();
        var files = e.originalEvent.dataTransfer.files;
         
        //We need to send dropped files to Server
        $(this).closest('.col-md-12').removeClass('has-error');
        $(this).closest('.col-md-12').find('.help-block').text('');
         
        //We need to send dropped files to Server
        for(var index = 1; index <= files.length; index++){
            handleListImageUpload(files[index-1], $(this));
        }
    });
    
    /**
     * Event when open choose file
     */
    $(document).on('click', Elements.ARTICLE_IMAGE + ' .btn-choose-file', function(){
        $(this).parent().find('input').click();
    });
    
    $(document).on('change', Elements.ARTICLE_IMAGE + ' input[type="file"]', function(event){
        var files = event.target.files;
        
        for(var index = 1; index <= files.length; index++){
            handleListImageUpload(files[index-1], $(this).parent());
        }
    });
    
    /**
     * Upload img for content page
     * @param {type} file
     * @returns {undefined}
     */
    function handleListImageUpload(file, container){
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
        checkCanSubmit();
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
    
    
    $(Elements.ALBUM).find('.row').sortable({
        handle: "div",
        cancel: '.remove',
        update: function(){
            //$('.div-friday-editor-content').sortable("destroy");
        },
        stop: function (event, ui) {
            //$('.div-friday-editor-content').sortable("destroy");
        },
        helper: function(event, ui){
            var $clone =  $(ui).clone();
            $clone .css('position','absolute');
            return $clone.get(0);
        },
        start: function(e, ui){
            ui.placeholder.height(ui.item.height());
            $(ui.placeholder).append('<div></div>');
            ui.placeholder.css('visibility', 'visible');
        }
    });
    
    /**
     * Event when drop data to editor
     * This event will be generate a new container of img
     */
    $(Elements.ALBUM).droppable({
        drop: function (event, ui) {
            if($(ui.draggable).closest('[data-foralbum="true"]').length > 0) {
                var div = document.createElement('div');
                var alt = $('input[name="title"]').val();
                $(div).attr({
                    "data-id": $(ui.draggable).attr('data-id'),
                    "class": "album-image-container col-md-2",
                    "data-name": $(ui.draggable).attr('data-name'),
                    "data-alt": (alt != undefined ? alt : ''),
                    "data-src": $(ui.draggable).attr('data-large-src'),
                    "data-fee": true,
                    "data-viewer": false,
                    "contenteditable": false
                });
                
                $(div).append('<div class="thumbnail"><img src="'+$(ui.draggable).attr('data-large-src')+'"/><i class="fa fa-remove remove"></i></div>');

                $(Elements.ALBUM).children('.row').append(div);
                $(Elements.ALBUM).removeClass('dashed-sm-primary');
                $(Elements.ALBUM).find('img').on('error', function(){
                    $(this).attr('src', URL.NO_IMAGE_AVAILABLE);
                });
            }
        },
        over: function(event, ui){
            if($(ui.draggable).closest('[data-foralbum="true"]').length > 0) {
                $(Elements.ALBUM).addClass('dashed-sm-primary');
            }
        },
        out: function(event, ui){
            $(Elements.ALBUM).removeClass('dashed-sm-primary');
        }
    });
    
    $(document).on('click', '.album-image-container .remove', function(){
        $(this).closest('.album-image-container').removeWithEffect({time: 200, effectElement: $(this).closest('.album-image-container .thumbnail')});
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
        $(Elements.ARTICLE_IMAGE).removeClass('dashed-sm-primary');
    });
    
    $(document).on('change paste keyup', 'input', function(){
        checkCanSubmit();
    });
});