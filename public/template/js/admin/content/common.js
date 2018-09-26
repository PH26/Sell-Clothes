function setContentStatus(dateString, element){
    $.ajax({
        url: URL.ADMIN.CONTENT.STATUS_LIST,
        method: 'POST',
        data: {
            date: dateString,
            _token: APP.getToken()
        },
        dataType: 'json',
        success: function(response){
            $(element).html('');
            for(var key in response){
                $(element).append('<option value="'+key+'">'+response[key]+'</option>');
            }
            if($(element).find('[value="'+$(element).attr('data-value')+'"]').length != 0){
                $(element).val($(element).attr('data-value'));
            }
        }
    });
}

//$('.content-list img').onErrorImage();
//$(document).ready(function(){
//    $('.content-list img').onErrorImage();
//});