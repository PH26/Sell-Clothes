$(document).ready(function(){
//    $(document).on('click', '.btn-test', function(){
//        //getNewCsrfToken(function(){
//            $.ajax({
//                type: "POST",
//                url: ROOT_URL + "/test",
//                success: function(response){
//                    $('.ajax-content').html(response);
//                }
//            });
//        //});
//    });

    $(document).on('submit', '.ajaxForm', function(e){
        e.preventDefault();
        var data = $(this).serialize();
        //getNewCsrfToken(function(){
            $.ajax({
                type: "GET",
                url: ROOT_URL + "/g-test",
                data: data,
                success: function(response){
                    $('.ajax-content').html(response);
                }
            });
        //});
    });

            $("#submit-button").click(function() {

                $.ajax({
                    url: '/testAjax',
                    method: 'GET',
                    dataType: 'json',
                    data: { data:123 },
                    success: function(data) {
                        console.log(data);
                    }
                });
            });



});