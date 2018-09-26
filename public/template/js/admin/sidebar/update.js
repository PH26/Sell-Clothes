/**
 * Created by Admin on 12/19/2016.
 */

$(document).ready(function(){
    // SORTABLE

    // validate when create form
    $(document).on('keyup','.orderNok',function() {
        var id , order;
        id = $(this).data('id');
        $("#name_error"+id).html('');
        //  order = $("#order"+id).val();

        order = $(this).val();

        // alert(name);
        if (!$.isNumeric(order)) {
            $("#name_error"+id).html(MSG.VALID_SORT);
        }
        else {
            $("#confirm_success").click(function(){
                $("#confirm_update").modal({
                    show: false,
                    backdrop: 'static'
                })
            });
        }
        if ($.isNumeric(order)) {
            $("#confirm_success").click(function(){
                $("#confirm_update").modal({
                    show: true,
                    backdrop: 'static'
                })
            });
            $("#confirm_success_update").click(function(){
                $("#form_update_sidebar").submit();
            });
        }
    });
    // show model when submit update
    $("#confirm_success").click(function(){
        $("#confirm_update").modal({
            show: true,
            backdrop: 'static'
        });
    })
    //click button to submit form in model confirm
    $("#confirm_success_update").click(function(){
        $("#form_update_sidebar").submit();
    });


    // AJAX SIDEBAR UPDATE LATEST
    // show contetn when click choose category
    var id = $("#category").val();
    $.ajax({
        type: "GET",
        url: URL.ADMIN.SIDEBAR.LIST_CONTENT_STATIC,
        data:{ "id" : id },
        dataType: 'json',
        success: function(data) {
            if (data.length > 0) {
                var html = '';
                var stt = 0 ;
                html += '<ul class="sortable" style="width: 95%; margin-left: 12%">';
                $.each(data, function (key, item) {
                    stt ++ ;
                    html += '<li class="form-control row-content" data-sort ="'+item.orderNo+'" data-id="'+item.id+'" style="list-style-type:none;  border:1px solid black;margin:10px 0 0 -9%">';
                    html += stt;
                    html += '<span style="margin-left: 2%">';
                    html += item.title;
                    html += '</span>';
                    html == '</li>';
                });
                html += '</ul>';
                var tag = $(html);
                $("#result_content_before").html(tag);
                var number = $("#hide_number").val();
                $(".sortable li" ).slice(0,number ).css( "background-color", "#fff2cc" );
                tag.sortable({
                    update : function(event, ui) {
                        // reset slice when sortable
                        $(".sortable li" ).slice(0,10 ).css( "background-color", "" );
                        // get number when sortable
                        number_change = $("#hide_number").val();
                        // reset and create new slice event
                        $(".sortable li" ).slice(0,number_change ).css( "background-color", "" );
                        $(".sortable li" ).slice(0,number_change ).css( "background-color", "#fff2cc" );
                        // if click choose after sortable
                        //reset and creat new slice event
                        $("#hide_number").on('change',function () {
                            number_change_sort = $("#hide_number").val();
                            $(".sortable li" ).slice(0,number_change_sort ).css( "background-color", "" );
                            $(".sortable li" ).slice(0,number_change_sort ).css( "background-color", "#fff2cc" );
                        })

                        var data = new Array();
                        var numbers = new Array();
                        var sort = new Array();
                        var length = $('.sortable .row-content').length;
                        var count = 0;
                        $('.sortable .row-content').each(function(){
                            data.push($(this).attr('data-id'));
                            numbers.push($(this).attr('data-sort'));
                            count++;
                            if(count == length){
                                finish();
                            }
                        });

                        function finish() {
                            var max = {value: 0, index: 0, data: numbers};
                            for(var key in data){
                                max = ArrayCommon.getMaxValueAndRemove(max.data);
                                sort.push({id: data[key], orderNo: max.value});
                                $('.row-content[data-id="'+data[key]+'"]').attr('data-sort', max.value);
                            }

                            $.ajax({
                                url: URL.ADMIN.CONTENT.SORT_CONTENT,
                                data: {sort: sort, _token: $('input[name="_token"]').val()},
                                type: "POST",
                                dataType: 'json',
                                success: function(response){
                                }
                            });
                        }
                    },
                    axis: 'y',
                    helper: function(event, ui){
                        var $clone =  $(ui).clone();
                        $clone .css('position','absolute');
                        return $clone.get(0);
                    },
                    cancel : 'button, .btn',
                });
            }
        }
    });

    // ajax when on change category
    $("#category").on('change',function () {
        $("#result_content_before").hide();
        var number = $("#hide_number").val();
        var id = $(this).val();
        $.ajax({
            type: "GET",
            url: URL.ADMIN.SIDEBAR.LIST_CONTENT_STATIC,
            data:{ "id" : id },
            dataType: 'json',
            success: function(data) {
                    if (data.length > 0) {
                        var html = '';
                        var temp = 0 ;
                        html += '<ul class="sortable_ajax" style="width: 95%; margin-left: 12%">';
                        $.each(data, function (key, item) {
                            temp ++ ;
                            html += '<li class="form-control row-content_ajax" data-sort_ajax ="'+item.orderNo+'" data-id_ajax="'+item.id+'" style="list-style-type:none;  border:1px solid black;margin:10px 0 0 -9%">';
                            html += temp;
                            html += '<span style="margin-left: 2%">';
                            html += item.title;
                            html += '</span>';
                            html == '</li>';
                        });
                        html += '</ul>';

                        var tag_ajax = $(html);
                        $("#result_content").html(tag_ajax);
                        $( ".sortable_ajax li" ).slice( 0,number ).css( "background-color", "#fff2cc" );
                        tag_ajax.sortable({
                            update : function(event, ui) {
                                // reset slice when sortable
                                $(".sortable_ajax li" ).slice(0,10 ).css( "background-color", "" );
                                // get number when sortable
                                number_change_ajax = $("#hide_number").val();
                                // reset and create new slice event
                                $(".sortable_ajax li" ).slice(0,number_change_ajax ).css( "background-color", "" );
                                $(".sortable_ajax li" ).slice(0,number_change_ajax ).css( "background-color", "#fff2cc" );
                                // if click choose after sortable
                                //reset and creat new slice event
                                $("#hide_number").on('change',function () {
                                    number_change_sort_ajax = $("#hide_number").val();
                                    $(".sortable_ajax li" ).slice(0,number_change_sort_ajax ).css( "background-color", "" );
                                    $(".sortable_ajax li" ).slice(0,number_change_sort_ajax ).css( "background-color", "#fff2cc" );
                                })

                                var data_ajax = new Array();
                                var numbers_ajax = new Array();
                                var sort_ajax = new Array();
                                var length_ajax = $('.sortable .row-content_ajax').length;
                                var count_ajax = 0;
                                $('.sortable .row-content_ajax').each(function(){
                                    data_ajax.push($(this).attr('data-id_ajax'));
                                    numbers_ajax.push($(this).attr('data-sort_ajax'));
                                    count_ajax++;
                                    if(count_ajax == length_ajax){
                                        finish();
                                    }
                                });

                                function finish() {
                                    var max_ajax = {value: 0, index: 0, data: numbers_ajax};
                                    for(var key in data_ajax){
                                        max_ajax = ArrayCommon.getMaxValueAndRemove(max_ajax.data);
                                        sort_ajax.push({id: data_ajax[key], orderNo: max_ajax.value});
                                        $('.row-content_ajax[data-id_ajax="'+data_ajax[key]+'"]').attr('data-sort_ajax', max_ajax.value);
                                    }
                                    $.ajax({
                                        url: URL.ADMIN.SIDEBAR.AJAX_CONTENT,
                                        data: {sort_ajax: sort_ajax, _token: $('input[name="_token"]').val()},
                                        type: "POST",
                                        dataType: 'json',
                                        success: function(response){
                                        }
                                    });
                                }
                            },
                            axis: 'y',
                            helper: function(event, ui){
                                var $clone =  $(ui).clone();
                                $clone .css('position','absolute');
                                return $clone.get(0);
                            },
                            cancel : 'button, .btn',
                        });
                        $( ".sortable_ajax li" ).slice( 0,number ).css( "background-color", "#fff2cc" );


                    } else {
                        $(".sortable_ajax").hide();

                    }
            }
        });
    });
    $("#hide_number").on('change',function () {
        var number = $("#hide_number").val();
        $(".sortable li").css("background-color", "");
        $( ".sortable li" ).slice( 0,number ).css( "background-color", "#fff2cc" );
        $(".sortable_ajax li").css("background-color", "");
        $( ".sortable_ajax li" ).slice( 0,number ).css( "background-color", "#fff2cc" );
    });

    // edit css color when choose category

    //click button delete sidebar
    $(".sidebar_delete").click(function(){
        var id, name;
        id = $(this).data('id');
        name = $("#name_sidebar" +id).html();
        $("#confirm_delete").modal({
            show: true,
            backdrop: 'static'
        });
        $("#confirm_name").html(name);
        $("#confirm_success_update").click(function(){
            $.ajax({
                type: "GET",
                url: URL.ADMIN.SIDEBAR.DELETE,
                data:{ "id" : id },
                success: function(data) {
                    window.location.href =  URL.ADMIN.SIDEBAR.LIST ;
                }
            });
        })
    });



});