$(function(){
    // -------------------------------------------------------------------------
    // Variable area
    // -------------------------------------------------------------------------
    var count = $('#button-generation .row').length;
    
    // -------------------------------------------------------------------------
    // Function area
    // -------------------------------------------------------------------------
    /**
     * Detect is turn on digital flag
     * 
     * @returns void
     */
    function detectTurnOnDigital(){
        if ($('#digitalFlag-onoffswitch').is(':checked')) {
            $('.digital-gallery').fadeIn(200);
        } else {
            $('.digital-gallery').fadeOut(200);
        }
    }
    
    /**
     * Toogle disabled add button
     * 
     * @returns void
     */
    function toogleDisabledAddButton(){
        if($('#button-generation .row').length >= 20){
            $('.btn-add-row').prop('disabled', true);
        }
        else{
            $('.btn-add-row').prop('disabled', false);
        }
    }
    
    /**
     * Reset cookie
     * @returns null
     */
    function resetCookie(){
        var data = {};
        
        $('#button-generation .row').each(function(){
            var index = $(this).attr('data-index');
            
            data[index] = {
                name: $(this).find('.input-row-name').val(),
                link: $(this).find('.input-row-link').val()
            };
        });
        
        $.cookie('buttons', JSON.stringify(data));
    }
    
    /**
     * Create button row
     * @param string index
     * @param string name
     * @param string link
     * @returns null
     */
    function createButtonRow(index, name, link)
    {
        if(name == undefined){
            name = "";
        }
        
        if(link == undefined){
            link = "";
        }
        
        if($('#button-generation .row[data-index="'+index+'"]').length != 0){
            $('#button-generation .row[data-index="'+index+'"] .input-row-name').val(name);
            $('#button-generation .row[data-index="'+index+'"] .input-row-link').val(link);
        }
        else{
            $('#button-generation').append('<div class="row top-buffer" data-index="'+index+'">'
                        +'<label class="col-md-2">ボタン名<span class="row-count">'+(index + 1)+'</span></label>'
                        +'<div class="col-md-2"><input class="form-control input-row-name" name="button['+index+'][name]" type="text" maxlength="30" value="'+name+'"><span class="help-block error-name"></span></div>'
                        +'<label class="col-md-2">リンク先</label>'
                        +'<div class="col-md-5"><input class="form-control input-row-link" name="button['+index+'][link]" type="text" maxlength="1000" value="'+link+'"><span class="help-block error-link"></span></div>'
                        +'<div class="col-md-1"><button type="button" class="btn btn-warning btn-remove">削除</button></div>'
                    +'</div>');
        }
    }
    
    /**
     * First load
     * @returns {undefined}
     */
    function firstLoad()
    {
        var jsonString = $.cookie('buttons');

        if(jsonString != "" && jsonString != null && jsonString != undefined){
            var jsonObject = JSON.parse(jsonString);
            
            for(var index in jsonObject){
                createButtonRow(parseInt(index), jsonObject[index].name, jsonObject[index].link);
            }
            
            toogleDisabledAddButton();
            checkCanSubmit();
        }
        
        
        var errors = $('.cus-errors').val();
        var json = JSON.parse(errors);
        for(var index in json){
            if(json[index].name != undefined){
                $('#button-generation .row[data-index="'+index+'"] .error-name').text(json[index].name).parent().addClass('has-error');
            }
            
            if(json[index].link != undefined){
                $('#button-generation .row[data-index="'+index+'"] .error-link').text(json[index].link).parent().addClass('has-error');
            }
        }
    }
    
    
    // -------------------------------------------------------------------------
    // Register event
    // -------------------------------------------------------------------------
    /**
     * Event when click on add button row
     * Generate new row on generation element
     */ 
    $(document).on('click', '.btn-add-row', function(){
        count = $('#button-generation .row').length;
       
        if(count == 20){
            return;
        }
       
        createButtonRow(count);
        
        count++;
        
        resetCookie();
        toogleDisabledAddButton();
    });
   
    /**
     * Event when click on remove row
     */
    $(document).on('click', '.btn-remove', function(){
        var instance = this;
        
        // Begin js for confirm submit
        OptionDialog.show({
            title: MSG.CONFIRM_DELETE,
            content: '削除しますか?',
            events: {
                close: function(){
                    //OptionDialog.hide();
                }
            },
            buttons: {
                yes: {
                    tag: 'button',
                    attributes: {
                        text: MSG.BUTTON_YES,
                        class: 'btn btn-primary'
                    },
                    events: {
                        click: function(e){
                            // End js for confirm submit
                            $(instance).closest('.row').remove();

                            $('#button-generation .row').each(function(){
                                var index = $(this).index();
                                $(this).attr('data-index', index);
                                $(this).find('.row-count').text(index + 1);
                                $(this).find('.input-row-name').attr('name', 'button['+index+'][name]');
                                $(this).find('.input-row-link').attr('name', 'button['+index+'][link]');
                            });

                            resetCookie();
                            toogleDisabledAddButton();
                            OptionDialog.hide();
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
    
    /**
     * Event when change value on button
     */
    $(document).on('change paste', '.input-row-link, .input-row-name', function(){
        resetCookie();
    });
    
    /**
     * Confirm add book
     * This method will be show form common to confirm
     */
    $(document).on('submit','#formSubmit', function(e){
        if(isSubmit){
            var gallery = [];
            
            $('#gallery-area .album-image-container').each(function(){
                gallery.push({
                    id: $(this).attr('data-id'),
                    name: $(this).attr('data-name'),
                    alt: $(this).attr('data-alt'),
                    src: $(this).attr('data-src')
                });
            });
            
            $('#gallery').val(JSON.stringify(gallery));

            return true;
        }
        
        e.preventDefault();
        
        OptionDialog.show({
            title: MSG.CONFIRM_CREATE,
            content: MSG.ADMIN.PHOTOBOOK.CONFIRM_CREATE,
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
                            $("#formSubmit").submit();
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
    
    /**
     * Event when change digital flag
     * Call check show or hide gallery area
     */
    $(document).on('change', '#digitalFlag-onoffswitch', function(){
        detectTurnOnDigital();
    });
    
    /**
     * Hanlde where load img error
     */
    $('#gallery-area img').on('error', function(){
        $(this).attr('src', URL.NO_IMAGE_AVAILABLE);
    });
    
    /**
     * Set datetime picker
     */
    $.datetimepicker.setLocale('ja');
    
    $(".date").datetimepicker({
        format:'Y-m-d',
	lang:'ja',
        step:1,
        timepicker: false,
        default: null,
        scrollInput : false
    });
    
    $(".datetime").datetimepicker({
        format:'Y-m-d H:i',
	lang:'ja',
        step:1,
        default: null,
        scrollInput : false
    });
    
    // -------------------------------------------------------------------------
    // Init loaded method
    // -------------------------------------------------------------------------
    firstLoad();
    detectTurnOnDigital();
});