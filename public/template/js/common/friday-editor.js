var FridayEditor = {
    imageCount: 0,
    withAlbumFlag: true,
    albumElement: '#div-friday-editor-album',
    premiumElement: '#div-friday-editor-premium',
    formElement: '.form-friday-editor-content',
    contentElement: '#div-friday-editor-content',
    inputElement: '#input-friday-editor-content',
    imageElement: '.image-container',
    typeElement: '.btn-editor-type',
    cookieName: 'editor-cookie',
    forContent: '[data-forcontent="true"]',
    forAlbum: '[data-foralbum="true"]',
    forPremium: '[data-forpremium="true"]',
    slideArea: ".div-friday-editor-slide-area",
    
    usesAlbum: function(uses){
        this.withAlbumFlag = uses;
        
        if(this.withAlbumFlag){
            $(this.slideArea).show();
        } else {
            $(this.slideArea).hide();
        }
    },
    
    addImage: function(instance, data){
        this.imageCount++;
        var img = $('<section class="row">'
            + '<div class="col-md-3"><div class="thumbnail"><img src="'+data['data-src']+'"/></div></div>'
            + '<div class="col-md-4">'
            + '<div class="row"><div class="col-md-3">ファイル名</div><div class="col-md-9"><input name="image_name" class="form-control" value="'+data['data-name']+'" disabled></div></div>'
            + '<div class="row top-buffer"><div class="col-md-3">画像名</div><div class="col-md-9"><input name="image_alt" class="form-control" value="'+data['data-alt']+'"></div></div>'
            + '</div>'
            // Turn off/on fee
            + '<div class="col-md-5">'
            + '<div class="onoffswitch onoffswitch-fee">'
            + '<input name="image_fee" type="checkbox" class="onoffswitch-checkbox" id="switch_image_'+this.imageCount+'" '+(data['data-fee'] == 'true' || data['data-fee'] == true ? 'checked' : '')+'>'
            + '<label class="onoffswitch-label" for="switch_image_'+this.imageCount+'">'
            + '<span class="onoffswitch-inner"></span>'
            + '<span class="onoffswitch-switch"></span>'
            + '</label>'
            + '</div>'
            // Turn off/on event click slide
            + '<div class="onoffswitch onoffswitch-success onoffswitch-viewer">'
            + '<input name="viewer" type="checkbox" class="onoffswitch-checkbox" id="switch_viewer_'+this.imageCount+'" '+(data['data-viewer'] == 'true' || data['data-viewer'] == true ? 'checked' : '')+'>'
            + '<label class="onoffswitch-label" for="switch_viewer_'+this.imageCount+'">'
            + '<span class="onoffswitch-inner"></span>'
            + '<span class="onoffswitch-switch"></span>'
            + '</label>'
            + '</div>'
            + '</div>'
            + '</section><div class="remove btn btn-default"><i class="fa fa-remove"></i> 画像の削除</div>');
    
        $(instance).css({backgroundColor: "#fff"});
        $(img).appendTo(instance);
    },
    
    /**
     * Add album image
     */
    addSlideImage: function(instance, data){
        $(instance).append('<div class="thumbnail"><img src="'+data['data-src']+'"/><i class="fa fa-remove remove"></i></div>');
    },
    
    /**
    * Encode content image
    * @param {type} content
    * @returns {undefined}
    */
    encodeContent: function(finish){
        if (finish == undefined) {
            finish = function(){};
        }
        
        var div = $(this.contentElement);
       
        var length = $(div).children(this.imageElement).length;
        var count = 0;

        if(length == 0){
            finish($(div).html());
        }

        $(div).children(this.imageElement).each(function(){
            $(this).attr({
               "data-name": $(this).find('input[name="image_name"]').val(),
               "data-alt": $(this).find('input[name="image_alt"]').val(),
               "data-fee": $(this).find('input[name="image_fee"]').is(":checked"),
               "data-viewer": $(this).find('input[name="viewer"]').is(":checked")
            });
            
            $(this).removeAttr('style');

            $(this).html('');

            count++;

            if(length == count){
               finish($(div).html());
            }
        });
    },

    /**
    * decodeContent
    * @param {type} content
    * @returns {undefined}
    */
    decodeContent: function(finish){
        if (finish == undefined) {
            finish = function(){};
        }
        
        var pr = this;
        
        var div = document.createElement('div');
        $(div).append($(this.inputElement).val());
        
        $(div).find('.album-container').remove();
        $(div).find('.premium-container').remove();
        
        var length = $(div).children(this.imageElement).length;
        var count = 0;

        if(length == 0){
            finish($(div).html());
        }

        $(div).children(this.imageElement).each(function(){
            FridayEditor.addImage(this, {
                "data-src": $(this).attr('data-src'),
                "data-name": $(this).attr('data-name'),
                "data-alt": $(this).attr('data-alt'),
                "data-fee": $(this).attr('data-fee'),
                "data-viewer": $(this).attr('data-viewer')
            });

            count++;

            if(length == count){
                finish($(div).html());
            }
        });
    },
    
    /**
    * Encode content image
    * @param {type} content
    * @returns {undefined}
    */
    encodeAlbum: function(finish){
        if (finish == undefined) {
            finish = function(){};
        }
        
        var container = document.createElement('div');
        var content = document.createElement('div');
        
        $(content).addClass('album-container');
        $(content).append($(this.albumElement).html());
        
        $(container).append(content);

        if($(content).find('.album-image-container').length == 0){
            finish($(container).html());
            return;
        }
        
        $(content).find('.album-image-container').each(function(){
            $(this).html('');
        });
        
        finish($(container).html());
    },
    
    /**
     * Decode album image
     */
    decodeAlbum: function(finish){
        if (finish == undefined) {
            finish = function(){};
        }
        
        var pr = this;

        var div = document.createElement('div');
        $(div).append($(this.inputElement).val());
        
        var length = $(div).find('.album-image-container').length;
        var count = 0;

        if(length == 0){
           finish($(div).find('.album-container .row').html());
           return;
        }
        
        $(div).find('.album-image-container').each(function(){
            FridayEditor.addSlideImage(this, {
                "data-src": $(this).attr('data-src'),
                "data-name": $(this).attr('data-name'),
                "data-alt": $(this).attr('data-alt'),
                "data-fee": $(this).attr('data-fee'),
                "data-viewer": $(this).attr('data-viewer')
            });

            count++;

            if(length == count){
                finish($(div).find('.album-container .row').html());
            }
        });
    },
    
    /**
    * Encode content image
    * @param {type} content
    * @returns {undefined}
    */
    encodePremium: function(finish){
        if (finish == undefined) {
            finish = function(){};
        }
        
        var container = document.createElement('div');
        var content = document.createElement('div');
        
        $(content).addClass('premium-container');
        $(content).append($(this.premiumElement).html());
        
        $(container).append(content);

        if($(content).find('.premium-image-container').length == 0){
            finish($(container).html());
            return;
        }
        
        $(content).find('.premium-image-container').each(function(){
            $(this).html('');
        });
        
        finish($(container).html());
    },
    
    /**
     * Decode album image
     */
    decodePremium: function(finish){
        if (finish == undefined) {
            finish = function(){};
        }
        
        var pr = this;

        var div = document.createElement('div');
        $(div).append($(this.inputElement).val());
        
        var length = $(div).find('.premium-image-container').length;
        var count = 0;

        if(length == 0){
           finish($(div).find('.premium-container .row').html());
           return;
        }
        
        $(div).find('.premium-image-container').each(function(){
            FridayEditor.addSlideImage(this, {
                "data-src": $(this).attr('data-src'),
                "data-name": $(this).attr('data-name'),
                "data-alt": $(this).attr('data-alt'),
                "data-fee": $(this).attr('data-fee'),
                "data-viewer": $(this).attr('data-viewer')
            });

            count++;

            if(length == count){
                finish($(div).find('.premium-container .row').html());
            }
        });
    },
    
    /**
    * decodeContent
    * @param {type} content
    * @returns {undefined}
    */
    decode: function(okDecode){
        var pr = this;
        
        this.decodeAlbum(function(album){
            $(pr.albumElement).find('.row').html(album);
            
            pr.decodePremium(function(premium){
                $(pr.premiumElement).find('.row').html(premium);
                
                pr.decodeContent(function(content){
                    $(pr.contentElement).append(content);
                    
                    $(pr.formElement).find('img').on('error', function(){
                        $(this).attr('src', URL.NO_IMAGE_AVAILABLE);
                    });
                        
                    if(okDecode != undefined){
                        okDecode();
                    }
                });
            });
        });
    },
    
    /**
    * Encode content image
    * @param {type} content
    * @returns {undefined}
    */
    encode: function(){
        var pr = this;
        if(this.isActiveType('code')){
            if(pr.withAlbumFlag){
                pr.encodeAlbum(function(album){
                    $(pr.inputElement).val($(pr.inputElement).val() + album);
                    
                    pr.encodePremium(function(premium){
                        $(pr.inputElement).val($(pr.inputElement).val() + premium);
                    });
                });
            }
        } else {
            this.encodeContent(function(content){
                if(pr.withAlbumFlag){
                    pr.encodeAlbum(function(album){
                        $(pr.inputElement).val(content + album);

                        pr.encodePremium(function(premium){
                            $(pr.inputElement).val($(pr.inputElement).val() + premium);
                        });
                    });
                } else {
                    $(pr.inputElement).val(content);
                }
            });
        }
    },
    
    /**
     * BeforeSubmit
     * @returns {undefined}
     */
    beforeSubmit: function(){
        this.encode();
    },
    
    /**
     * Active type
     * @returns {undefined}
     */
    activeType: function(instance){
        var type = $(instance).attr('data-type');
         
        if(this.isActiveType(type)){
            return;
        }
        
        if(this.isActiveType('code')){
            this.decodeContent(function(content){
                $(FridayEditor.contentElement).html(content);
            });
        }else{
            this.encodeContent(function(content){
                $(FridayEditor.inputElement).val(content);
            });
        }
        
        $(this.typeElement).find('.btn').removeClass('btn-primary');
        $(this.typeElement).find('.btn').addClass('btn-default');
        
        $(instance).addClass('btn-primary');
        $(instance).removeClass('btn-default');

        if(type == 'code'){
            $(this.inputElement).removeClass('hidden');
            $(this.contentElement).addClass('hidden');
        } else {
            $(this.inputElement).addClass('hidden');
            $(this.contentElement).removeClass('hidden');
        }
    },
    
    /**
     * Is active type method
     * @returns {undefined}
     */
    isActiveType: function(type){
        var _type = $(this.typeElement).find('.btn-primary').attr('data-type');
        
        if(type == _type){
            return true;
        }
        
        return false;
    },
    
    /**
     * Convert break line
     * @param {type} param
     */
    convertBreakLine: function(){
//        if($(this.contentElement).html() == "<br>" || $(this.contentElement).html() == ""){
//            $(this.contentElement).html('<p class="nbsp"><br></p>');
//        }
        
        $(FridayEditor.contentElement).contents()
        .filter(function() {
          return this.nodeType === 3;
        })
        .wrap('<p class="nbsp">')
        .end('</p>')
        .filter("br")
        .remove();

        $(FridayEditor.contentElement).find('br').each(function(){
            var parent = $(this).parent();
            if($(parent).hasClass('nbsp') && $(parent).find('*').length != 1){
                var tag = $(parent).prop('tagName').toLowerCase();
                $(this).replaceWith('</'+tag+'><'+tag+' class="nbsp"><br>');
            }
        });

        $(FridayEditor.contentElement).find('div:not([class])').each(function(){
            $(this).replaceWith('<p class="nbsp">' + $(this).html() +'</p>');
        });

        $(FridayEditor.contentElement).find('div[class="nbsp"]').each(function(){
            $(this).replaceWith('<p class="nbsp">' + $(this).html() +'</p>');
        });

        $(FridayEditor.contentElement).find('div[class=""]').each(function(){
            $(this).replaceWith('<p class="nbsp">' + $(this).html() +'</p>');
        });

        $(FridayEditor.contentElement).find('p[class="nbsp"]').each(function(){
            if($(this).html() == ""){
                $(this).append("<br>");
            }
        });
    }
};

$(document).ready(function(){
    /**
     * Event load content before show in view
     */
    $(FridayEditor.contentElement).closest('form').addClass('form-friday-editor-content');
    
    var allowSubmitFlag = false;
    $(FridayEditor.contentElement).sortable({
        //items: '> .image-container',
        handle: 'section',
        cancel: '.btn, button, input, label',
        update: function(event, ui){
            if($(ui.item).findBefore('.nbsp').length === 0 && $(ui.item).findBefore('br').length === 0){
                $(ui.item).before('<p class="nbsp"><br></p>');
            }
            
            if($(ui.item).findAfter('.nbsp').length === 0 && $(ui.item).findAfter('br').length === 0){
                $(ui.item).after('<p class="nbsp"><br></p>');
            }
        },
        stop: function (event, ui) {
            //$('.div-friday-editor-content').sortable("destroy");
        }
    });
    
    if($(FridayEditor.albumElement).find('.row').length == 0){
        $(FridayEditor.albumElement).append('<div class="row"></div>');
    }
    
    if($(FridayEditor.premiumElement).find('.row').length == 0){
        $(FridayEditor.premiumElement).append('<div class="row"></div>');
    }
    
    $(FridayEditor.albumElement).find('.row').sortable({
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
    
    $(FridayEditor.premiumElement).find('.row').sortable({
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
     * Event when click on button tag
     * Get value of tag and append to editor
     */
    $(document).on('click', '.btn-friday-editor', function(){
        //$('.input-friday-editor-content').val($(this).attr('data-key'));
        if(FridayEditor.isActiveType('code')){
            $(FridayEditor.inputElement).insertAtCaret($(this).attr('data-key'));
        }else{
            $(FridayEditor.contentElement).pasteHtmlAtCaret($(this).attr('data-key'));
        }
    });
        
    /**
     * Event when submit form
     */
    $(document).on('submit', FridayEditor.formElement, function(e){
        if(!allowSubmitFlag){
            //e.preventDefault();            
            //FridayEditor.beforeSubmit();
        }
    });
    
    /**
     * Event when drop data to editor
     * This event will be generate a new container of img
     */
    $(FridayEditor.contentElement).droppable({
        drop: function (event, ui) {
            if($(ui.draggable).closest(FridayEditor.forContent).length > 0){
                var div = document.createElement('div');
                var alt = $('input[name="title"]').val();
                $(div).attr({
                    "data-id": $(ui.draggable).attr('data-id'),
                    "class": "image-container",
                    "data-name": $(ui.draggable).attr('data-name'),
                    "data-alt": (alt != undefined ? alt : ''),
                    "data-src": $(ui.draggable).attr('data-thumbnail-src'),
                    "data-fee": true,
                    "data-viewer": false,
                    "contenteditable": false
                });

                FridayEditor.addImage(div, {
                    "data-name": $(ui.draggable).attr('data-name'),
                    "data-alt": (alt != undefined ? alt : ''),
                    "data-src": $(ui.draggable).attr('data-thumbnail-src'),
                    "data-fee": true,
                    "data-viewer": false
                });

                $(FridayEditor.contentElement).closest('.has-error').find('.help-block').text('');
                $(FridayEditor.contentElement).closest('.has-error').removeClass('has-error');

                $(FridayEditor.contentElement).append(div);
                $(FridayEditor.contentElement).append('<p class="nbsp"><br></p>');
                if($(div).findBefore('.nbsp').length === 0 && $(div).findBefore('br').length === 0){
                    $(div).before('<p class="nbsp"><br></p>');
                }
                $(FridayEditor.contentElement).removeClass('dashed-sm-primary');
                $(FridayEditor.formElement).find('img').on('error', function(){
                    $(this).attr('src', URL.NO_IMAGE_AVAILABLE);
                });
            }
        },
        over : function(event, ui){
            if($(ui.draggable).closest(FridayEditor.forContent).length > 0) {
                $(FridayEditor.contentElement).addClass('dashed-sm-primary');
            }
        },
        out: function(event, ui){
            $(FridayEditor.contentElement).removeClass('dashed-sm-primary');
        }
    });
    
    /**
     * Event when drop data to editor
     * This event will be generate a new container of img
     */
    $(FridayEditor.albumElement).droppable({
        drop: function (event, ui) {
            if($(ui.draggable).closest(FridayEditor.forAlbum).length > 0) {
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

                FridayEditor.addSlideImage(div, {
                    "data-name": $(ui.draggable).attr('data-name'),
                    "data-alt": (alt != undefined ? alt : ''),
                    "data-src": $(ui.draggable).attr('data-large-src'),
                    "data-fee": true,
                    "data-viewer": false
                });

                $(FridayEditor.albumElement).children('.row').append(div);
                $(FridayEditor.albumElement).removeClass('dashed-sm-primary');
                $(FridayEditor.formElement).find('img').on('error', function(){
                    $(this).attr('src', URL.NO_IMAGE_AVAILABLE);
                });
            }
        },
        over: function(event, ui){
            if($(ui.draggable).closest(FridayEditor.forAlbum).length > 0) {
                $(FridayEditor.albumElement).addClass('dashed-sm-primary');
            }
        },
        out: function(event, ui){
            $(FridayEditor.albumElement).removeClass('dashed-sm-primary');
        }
    });
    
    /**
     * Event when drop data to editor
     * This event will be generate a new container of img
     */
    $(FridayEditor.premiumElement).droppable({
        drop: function (event, ui) {
            if($(ui.draggable).closest(FridayEditor.forPremium).length > 0) {
                var div = document.createElement('div');
                var alt = $('input[name="title"]').val();
                $(div).attr({
                    "data-id": $(ui.draggable).attr('data-id'),
                    "class": "premium-image-container col-md-2",
                    "data-name": $(ui.draggable).attr('data-name'),
                    "data-alt": (alt != undefined ? alt : ''),
                    "data-src": $(ui.draggable).attr('data-large-src'),
                    "data-fee": true,
                    "data-viewer": false,
                    "contenteditable": false
                });

                FridayEditor.addSlideImage(div, {
                    "data-name": $(ui.draggable).attr('data-name'),
                    "data-alt": (alt != undefined ? alt : ''),
                    "data-src": $(ui.draggable).attr('data-large-src'),
                    "data-fee": true,
                    "data-viewer": false
                });

                $(FridayEditor.premiumElement).children('.row').append(div);
                $(FridayEditor.premiumElement).removeClass('dashed-sm-primary');
                $(FridayEditor.formElement).find('img').on('error', function(){
                    $(this).attr('src', URL.NO_IMAGE_AVAILABLE);
                });
            }
        },
        over: function(event, ui){
            if($(ui.draggable).closest(FridayEditor.forPremium).length > 0) {
                $(FridayEditor.premiumElement).addClass('dashed-sm-primary');
            }
        },
        out: function(event, ui){
            $(FridayEditor.premiumElement).removeClass('dashed-sm-primary');
        }
    });
    
    /**
     * Image container
     */
    $(document).on('click', FridayEditor.imageElement + ' .remove', function(){
        $(this).closest(FridayEditor.imageElement).removeWithEffect({time: 200});
    });
    /**
     * Image container
     */
    $(document).on('click', '.album-image-container .remove', function(){
        $(this).closest('.album-image-container').removeWithEffect({time: 200, effectElement: $(this).closest('.album-image-container .thumbnail')});
    });
    $(document).on('click', '.premium-image-container .remove', function(){
        $(this).closest('.premium-image-container').removeWithEffect({time: 200, effectElement: $(this).closest('.premium-image-container .thumbnail')});
    });
    
    /**
     * Event when enter
     * 
     */
    $(FridayEditor.contentElement).blur(function(e) {
        // trap the return key being pressed
        //if (e.keyCode == 13) {
            FridayEditor.convertBreakLine();
        //}
    });
    
    /**
     * Event when enter
     * 
     */
    $(FridayEditor.typeElement).find('.btn').click(function(){
        FridayEditor.activeType(this);
    });
    
    FridayEditor.decode(function(){
        FridayEditor.convertBreakLine(); 
    });
});