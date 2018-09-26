$(document).ready(function(){
    function detectGravure(){
        var isChecked = $('input[data-url="'+MSG.ADMIN.CONTENT.CATEGORY_ALBUM_URL+'"]').is(":checked");
        
        FridayEditor.usesAlbum(isChecked);
        
        if (isChecked) {
            $('#upload-gravurethumbnail').closest('.box').show();
            $('#upload-premiumimage').closest('.box').show();
        } else {
            $('#upload-gravurethumbnail').closest('.box').hide();
            $('#upload-premiumimage').closest('.box').hide();
        }
    }
    /**
     * Event when click on categories list
     */
    $('.category-list .parent li i').click(function(event){
        event.preventDefault();
        
        if($(this).parent().children('.child').length == 0){
            return;
        }
        
        $(this).parent().children('.child').slideToggle('slow');
        
        if($(this).parent().children('.child').attr('data-active') != 'true'){
            $(this).removeClass('fa-caret-right');
            $(this).addClass('fa-caret-down');
            $(this).parent().children('.child').attr('data-active', 'true');
        } else {
            $(this).removeClass('fa-caret-down');
            $(this).addClass('fa-caret-right');
            $(this).parent().children('.child').attr('data-active', 'false');
        }
    });
    
    /**
     * Event when change checkbox
     */
    $(document).on('change', '.category-list input', function(){
        if($(this).parent().hasClass('child-input')){
            var parent = $(this).closest('.parent');
            if($(parent).find('label.child-input input:checked').length > 0){
                $(parent).find('label.parent-input input').prop('checked', true);
            }
        } else {
            var parent = $(this).closest('.parent');
            $(parent).find('label.child-input input').prop('checked', false);
        }
        
        detectGravure();
    });
    
    detectGravure();
    
    /**
     * Set datetime picker
     */
    $.datetimepicker.setLocale('ja');
    $("#quickedit_public_datetime").datetimepicker({
        format:'Y-m-d H:i',
	lang:'ja',
        step:1
    });
    $("#quickedit_close_datetime").datetimepicker({
        format:'Y-m-d H:i',
	lang:'ja',
        step:1
    });
    
    /**
     * Event when change value on error field
     * Hide the message and border
     */
    $(document).on('change paste keyup', '.has-error .form-control', function(){
        $(this).closest('.has-error').find('.help-block').text('');
        $(this).closest('.has-error').removeClass('has-error');
    });
    
    /**
     * Event when click form submit
     * 
     */
    var isSubmit = false;
    FridayEditor.beforeSubmit = function(){};
    
    /**
     * Event friday content
     * 
     */
    function confirmSubmit(){
        var isUpdate = $('.__update_password_id').val();
        var title = MSG.ADMIN.CONTENT.TITLE_CONFIRM_CREATE;
        var content = MSG.ADMIN.CONTENT.CONFIRM_CREATE;
        
        if(isUpdate != "" && isUpdate != undefined){
            title = MSG.ADMIN.CONTENT.CONFIRM_UPDATE;
            content = MSG.ADMIN.CONTENT.CONFIRM_UPDATE;
        }
        
        // Begin js for confirm submit
        OptionDialog.show({
            title: title,
            content: content,
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
                            $(this).attr('disabled', true);
                            FridayEditor.encode();
                            
                            isSubmit = true;
                            //FridayEditor.beforeSubmit = function(){
                            
                            //};

                            $('.form-friday-editor-content').submit();
                            return;
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
        // End js for confirm submit
    }
    
    /**
     * Event when submit form
     */
    $(document).on('submit', '.form-friday-editor-content', function(e){
        if(isSubmit){
            return true;
        }
        
        confirmSubmit();
        e.preventDefault();
    });
    
    /**
     * Event when change start datetime
     */
    $(document).on('change paste', '.form-friday-editor-content [name="startDatetime"]', function(){
        if($('.__is_update').val() == true){
            var dateString = $(this).val();
            setContentStatus(dateString, '.form-friday-editor-content select[name="status"]');
        }
    });

    // Set style for upload thumbnail
    $('#upload-thumbnail').css({
        backgroundImage: "url('" + $('input[name="lastMediaImage"]').val() + "')"
    });
    
    // Set style for upload thumbnail
    $('#upload-gravurethumbnail').css({
        backgroundImage: "url('" + $('input[name="lastGravureMediaImage"]').val() + "')"
    });
    
    /**
     * Event when click on [半年後を設定] button
     */
    $(document).on('click', '.btn-set-date', function(){
        $('#quickedit_close_datetime').val($(this).attr('data-value'));
    });
});