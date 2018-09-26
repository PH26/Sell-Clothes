$(document).ready(function(){
    /**
     * Event when click on Delete 
     */
    $(document).on('click', '.delete-booklist', function(){
        var id = $(this).attr('data-id');
        OptionDialog.show({
            title: MSG.CONFIRM_DELETE,
            content: MSG.ADMIN.BOOK.CONFIRM_DELETE_BOOK,
            buttons: {
                yes: {
                    tag: 'button',
                    attributes: {
                        text: MSG.BUTTON_YES,
                        class: 'btn btn-primary'
                    },
                    events: {
                        click: function(e){
                            var form = $('#deleteForm');
                            $(form).attr('action', URL.ADMIN.BOOK.DELETE_BOOK + '/' + id);
                            
                            var input = document.createElement('input');
                            $(input).val(APP.getToken());
                            $(input).attr({'name': '_token', 'type' :'hidden'});
                            $(form).append(input);
                            
                            $(form).submit();
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
    
    $('img').on('error', function(){
        $(this).attr('src', URL.NO_IMAGE_AVAILABLE);
    });
});