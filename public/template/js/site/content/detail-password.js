$(document).ready(function(){
//console.log(CONTENT_TAGS);
    function check(){
        $.ajax({
            type: 'GET',
            url: URL.SITE.CONTENT.CONFIRM_PASSWORD,
            data: {
                data: JSON.stringify({id: $('.support-information').attr('data-content-id'), password: $('.__password_confirm').val()})
            },
            dataType: 'json',
            success: function(response){
                if(response.status){
                    var preview = $('.support-information').attr('data-preview');
                    window.location.href = "?data="+response.key+(preview != "" ? '&preview='+preview : '');
                } else {
                    $('.pw-error-container').addClass('has-error');
                    $('.msg-eror-pw').text(response.message);
                }
            },
            error: function(){
                $('.pw-error-container').addClass('has-error');
                $('.msg-eror-pw').text(MSG.ERROR_CONNECT);
            }
        });
    }
    /**
     * Check if have has password
     * @type jQuery
     */
    function checkPassword(){
        var isPW = $('.support-information').attr('data-has-password');
        if( isPW == true || isPW == 'true' || isPW == 1){
            OptionDialog.show({
                title: MSG.CONFIRM_PASSWORD,
                content: '<div class="pw-error-container text-left"><input class="form-control __password_confirm" type="Password"/><div class="msg-eror-pw help-block"></div></div>',
                events: {
                    close: function(){
                        //OptionDialog.hide();
                        window.location.href = "/";
                    }
                },
                buttons: {
                    confirm: {
                        tag: 'button',
                        attributes: {
                            text: MSG.BUTTON_CONFIRM,
                            class: 'btn btn-primary'
                        },
                        events: {
                            click: function(e){
                                check();
                            }
                        }
                    }
                }
            });
        }
        
        /**
         * Event when enter to input
         */
        $(document).on('keyup', '.__password_confirm', function(e){
            if(e.which == 13){
                check();
            }
        });
    }
    checkPassword();
});