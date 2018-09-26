/**
 * Index.js
 * The javascript handle in index of content view
 * 
 * @author RikkeiSoft
 * @date YYYY/MM/DD
 */
$(document).ready(function(){
    $.datetimepicker.setLocale('ja');
    
    $(document).on('click', '.btn-copy-url', function(){
         var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(this).parent().find('.confirmation-url a').text()).select();
        document.execCommand("copy");
        $temp.remove();
        $.notify("クリップボードにコピーしました。", {
            className: "success",
            globalPosition: 'top right',
            autoHideDelay: 1000
        });
    });
    /**
     * Event when click on quick edit button
     * Open modal quick edit and call ajax to render content in body of modal
     */
    $(document).on('click', '.quick-edit', function(){
        Alert.hide('all');
        $('#quickEditModal').modal('show');
        var contentId = $(this).closest('.row-content').attr('data-id');
        $.ajax({
            type: 'GET',
            url: URL.ADMIN.CONTENT.QUICK_EDIT,
            data: {
                id: contentId
            },
            success: function(response){
                $('#quickEditModal .modal-body').html(response);
                $('#quickEditForm .message').hide();
                
                // Picker for public date time
                $('#quickedit_public_date').datetimepicker({
                        yearOffset:222,
                        lang:'ja',
                        timepicker:false,
                        format:'Y-m-d',
                        formatDate:'Y-m-d'
                });
                $('#quickedit_public_time').datetimepicker({
                        datepicker:false,
                        format:'H:i',
                        step:1
                });
                
                // Picker for close date time
                $('#quickedit_close_date').datetimepicker({
                        yearOffset:222,
                        lang:'ja',
                        timepicker:false,
                        format:'Y-m-d',
                        formatDate:'Y-m-d'
                });
                
                $('#quickedit_close_time').datetimepicker({
                        datepicker:false,
                        format:'H:i',
                        step:1
                });
            },
            error: function(){
                
            }
        });
    });
    
    /**
     * Event when click on save data button on quick edit dialog
     * Save data and close the modal quick edit
     */
    $(document).on('submit', '#quickEditForm', function(e){
        
        var id = $(this).find('input[name="id"]').val();
        var data = $(this).serialize();
        
        $.ajax({
            type: 'POST',
            url: URL.ADMIN.CONTENT.QUICK_EDIT,
            data: data,
            success: function(response){
                try{
                    response = $.parseJSON(response);
                    $('#quickEditForm .message').html('');
                    for(var key in response){
                        for(var index in response[key]){
                            $('#quickEditForm .message').append('<div>'+response[key][index]+'</div>');
                        }
                    }
                    $('#quickEditForm .message').show();
                }catch(err){
                    $('.row-content[data-id="'+id+'"]').html(response);
                    $('.row-content[data-id="'+id+'"] .thumbnail > div').resizeHeight(1, true);
                    $('.row-content[data-id="'+id+'"] .thumbnail img').on('error', function () { 
                        $(this).attr('src', URL.NO_IMAGE_AVAILABLE);
                    })
                    .each(function() {
                      $(this).attr("src",$(this).attr("src"));
                    });
    
                    $('#quickEditModal').modal('hide');
                    Alert.show('success', MSG.ADMIN.CONTENT.QUICK_UPDATE_SUCCESS);
                    $('img').onErrorImage();
                }
            },
            error: function(response){
                if(response.status !== 404){
                    $('#quickEditForm .message').html('');
                    var jsonData = $.parseJSON(response.responseText);
                    
                    for(var key in jsonData){
                        for(var index in jsonData[key]){
                            $('#quickEditForm .message').append('<div>'+jsonData[key][index]+'</div>');
                        }
                    }
                    
                    $('#quickEditForm .message').show();
                } else {
                    $('#quickEditForm .message').text(MSG.ERROR_CONNECT);
                    $('#quickEditForm .message').show();
                }
            }
        });
        
        e.preventDefault();
    });
    
    $(document).on('change paste', '#quickEditForm [name="startDate"], #quickEditForm [name="startTime"]', function(){
        var dateString = $('#quickEditForm [name="startDate"]').val();
        dateString += (' ' + $('#quickEditForm [name="startTime"]').val());
        setContentStatus(dateString, '#quickedit_status');
    });
    
    /**
     * Event when click on copy data
     */
    $(document).on('click', '.copy', function(){
        $.ajax({
            type: 'POST',
            url: URL.ADMIN.CONTENT.COPY_CONTENT,
            dataType: 'json',
            data: {
                _token: APP.getToken(),
                id: $(this).closest('.row-content').attr('data-id')
            },
            success: function(response){
                if(response.status){
                    window.location.reload();
                }
            },
            error: function(){
                
            }
        });
    });

    $('.sortable').sortable({
        axis: 'y',
        helper: function(event, ui){
            var $clone =  $(ui).clone();
            $clone .css('position','absolute');
            return $clone.get(0);
        },
        start: function(e, ui){
            ui.placeholder.height(ui.item.height());
            $(ui.placeholder).append('<div></div>');
            ui.placeholder.css('visibility', 'visible');
        },
        stop: function(e, ui){
            var date = $(ui.item).attr('data-date');
            var next = $(ui.item).findAfter('.row-content');
            if($(next).css('display') == 'none'){
                next = $(next).next('.row-content');
            }
            
            var prev = $(ui.item).prev('.row-content');
            if($(prev).css('display') == 'none'){
                prev = $(prev).prev('.row-content');
            }
                        
            if((next == undefined && $(prev).attr('data-date') != date)
                    || (prev == undefined && $(next).attr('data-date') != date)
                    || ($(next).attr('data-date') != date && $(prev).attr('data-date') != date)){
                return false;
            }
        },
        cancel : 'button, .btn',
        update: function (event, ui) {
            var data = new Array();
            var numbers = new Array();
            var sort = new Array();
            var date = $(ui.item).attr('data-date');
            var length = $('.sortable .row-content[data-date='+date+']').length;
            var count = 0;
            
            $('.sortable .row-content[data-date='+date+']').each(function(){
                data.push($(this).attr('data-id'));
                numbers.push($(this).attr('data-sort'));
                count++;
                if(count == length){
                    finish();
                }
            });
            
            function finish(){
                var max = {value: 0, index: 0, data: numbers};
                for(var key in data){
                    max = ArrayCommon.getMaxValueAndRemove(max.data);
                    sort.push({id: data[key], orderNo: max.value});
                    $('.row-content[data-id="'+data[key]+'"]').attr('data-sort', max.value);
                }
                $(ui.item).completing();
                $.ajax({
                    url: URL.ADMIN.CONTENT.SORT_CONTENT,
                    data: {sort: sort, _token: APP.getToken()},
                    type: "POST",
                    dataType: 'json',
                    success: function(response){
                        $(ui.item).completed({time: 500, backgroundColor: '#e1e2db'});
                    }
                });
            }
        }
     });
    
    $('.row-content').on('mousedown', function(){
        $(this).css( 'cursor', 'move' );
    }).on('mouseup', function(){
        $(this).css( 'cursor', 'auto' );
    });
    
    /**
     * Event when click select parent category
     * Call ajax to get list of children category
     */
    $(document).on('change', 'select[name="parent_category"]', function(){
        var parent = $('select[name="parent_category"]').val();
        $.ajax({
            url: URL.ADMIN.CONTENT.CHILD_CATEGORIES,
            data: {
                parentId: parent,
                _token: APP.getToken()
            },
            type: 'POST',
            dataType: 'json',
            success: function(response){
                $('select[name="child_category"]').html('');
                for(var index in response){
                    $('select[name="child_category"]').append('<option value="'+index+'">'+response[index]+'</option>');
                }
            }
        });
    });
    
    /**
     * Event when click on btn-draft-to-public button
     * Call ajax to change nearest book number to public
     */
    $(document).on('click', '.btn-draff-to-public', function(){
        $.ajax({
            url: URL.ADMIN.CONTENT.DRAFF_TO_PUBLIC,
            data: {
                _token: APP.getToken()
            },
            type: 'POST',
            dataType: 'json',
            success: function(response){
                window.location.reload();
            }
        });
    });
    
    /**
     * Event when click on delete button
     * Call ajax to delete content
     */
    $(document).on('click', '.btn-delete-content', function(){
        var contentId = $(this).closest('.row-content').attr('data-id');
        OptionDialog.show({
            title: MSG.CONFIRM_DELETE,
            content: MSG.ADMIN.CONTENT.DELETE_CONTENT,
            buttons: {
                yes: {
                    tag: 'button',
                    attributes: {
                        text: MSG.BUTTON_YES,
                        class: 'btn btn-primary'
                    },
                    events: {
                        click: function(e){
                            $.ajax({
                                type: 'POST',
                                url: URL.ADMIN.CONTENT.DELETE_CONTENT,
                                data: {
                                    id: contentId,
                                    _token: APP.getToken()
                                },
                                dataType: 'json',
                                success: function(response){
//                                    if(response.status){
//                                        
//                                        //$('.row-content[data-id="'+contentId+'"]').removeWithEffect();
//                                        window.location.reload();
//                                    }
                                    OptionDialog.hide();
                                    window.location.reload();
                                },
                                error: function(){
                                    OptionDialog.hide();
                                }
                            });
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
     * Event when click on confirmation list
     * Show confirmation modal
     */
    $(document).on('click', '.btn-confirmation-list', function(){
        var groupId = $(this).attr('data-group-id');
        
        Alert.hide('all');
        $.ajax({
            type: 'POST',
            url: URL.ADMIN.CONTENT.CONFIRMATION_LIST,
            data: {_token: APP.getToken(), groupId: groupId},
            success: function(response){
                OptionDialog.show({
                    title: MSG.ADMIN.CONTENT.TITLE_CONFIRMATION_LIST,
                    content: response,
                    buttons: {
                        yes: {
                            tag: 'button',
                            attributes: {
                                text: MSG.BUTTON_YES,
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
            },
            error: function(){
                
            }
        });
    });
    
    /**
     * Clear cookie
     * Event when click on clear button
     * Clear all condition search
     */
    $(document).on('click', '.btn-clear', function(){
        $.ajax({
            url: URL.ADMIN.CONTENT.CLEAR_SEARCH,
            type: "POST",
            data: {_token: APP.getToken()},
            success: function(res){
                window.location.href = window.location.pathname;
            },
            error: function(){
                window.location.href = window.location.pathname;
            }
        });
    });
    
    /**
     * Event when error image
     * Set image with default error image
     */
    $('.row-content img').on('error', function () { 
        $(this).attr('src', URL.NO_IMAGE_AVAILABLE);
    })
    .each(function() {
      $(this).attr("src",$(this).attr("src"));
    });
    
    $('.row-content .thumbnail > div').resizeHeight(1, true);
});