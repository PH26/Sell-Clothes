$(document).ready(function(){
    /**
     * Event when change
     */
    $(document).on('change', '.onoffswitch-checkbox', function(){
//        var parent = this;
//        $.ajax({
//            url: URL.ADMIN.RESEARCH.UPDATE_ACTIVE_FLAG,
//            method: "POST",
//            data: {
//                id: $(this).attr('data-id'),
//                active: $(this).is(':checked')
//            },
//            dataType: 'JSON',
//            success: function(res){
//                if(res.status){
//                    if($(parent).is(':checked')){
//                        $('.onoffswitch-checkbox').prop('checked', false);
//                        $(parent).prop('checked', !($(parent).is(':checked')));
//                    }
//                }
//                else
//                {
//                    $(parent).prop('checked', !($(parent).is(':checked')));
//                    Alert.show('danger', res.msg);
//                }
//            },
//            error: function(res){
//                $(parent).prop('checked', !($(parent).is(':checked')));
//                Alert.show('danger', MSG.ERROR_CONNECT);
//            }
//        });
    });
    
    /**
     * Event when click on delete
     */
    $(document).on('click', '.btn-delete', function(){
        var id = $(this).closest('.row-content').attr('data-id');

        OptionDialog.show({
            title: MSG.CONFIRM_DELETE,
            content: MSG.ADMIN.RESEARCH.DELETE_RESEARCH,
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
                                url: URL.ADMIN.RESEARCH.DELETE,
                                data: {
                                    id: id,
                                    _token: APP.getToken()
                                },
                                dataType: 'json',
                                success: function(response){
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
});