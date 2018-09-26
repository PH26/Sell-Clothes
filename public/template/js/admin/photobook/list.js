$(document).ready(function(){
    /**
     * Event when click on delete
     */
    $(document).on('click', '.btn-delete', function(){
        var id = $(this).closest('.row-content').attr('data-id');

        OptionDialog.show({
            title: MSG.CONFIRM_DELETE,
            content: MSG.ADMIN.PHOTOBOOK.DELETE,
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
                                url: URL.ADMIN.PHOTOBOOK.DELETE,
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
    
    // SORTABLE
    $( ".sortable " ).sortable({
        update : function(event, ui) {
            var max = {value: 0, index: 0, data: $(this).sortable('toArray', {attribute: 'data-sort'})};
            
            var updated = {};
            $('.sortable .row-content').each(function(){
                max = ArrayCommon.getMaxValueAndRemove(max.data);
                $(this).attr('data-sort', max.value);
                updated[$(this).attr('data-id')] = max.value;
            });
                        
            $.ajax({
                type: "POST",
                url: URL.ADMIN.PHOTOBOOK.SORT,
                data:{ "dataSort" : updated },
                success: function(data) {
                }
            });
        },

        axis: 'y',
        helper: function(event, ui){
            var $clone =  $(ui).clone();
            $clone .css('position','absolute');
            return $clone.get(0);
        },
        cancel : 'button, .btn'
    });
});