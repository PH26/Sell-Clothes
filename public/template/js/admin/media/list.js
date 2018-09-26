/**
 * Index.js
 * The javascript handle in index of content view
 *
 * @author RikkeiSoft
 * @date YYYY/MM/DD
 */
$(document).ready(function(){
    /**
     * Event when click on Delete 
     */
    $(document).on('click', '.delete-medialist', function(){
        var id = $(this).attr('data-id');
        OptionDialog.show({
            title: MSG.CONFIRM_DELETE,
            content: MSG.ADMIN.MEDIA.CONFIRM_DELETE_MEDIA,
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
                            
                            $(form).attr('action', URL.ADMIN.MEDIA.DELETE_MEDIA + '/' + id);
                            
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