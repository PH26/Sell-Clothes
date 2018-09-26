/**
 * Created by Admin on 12/19/2016.
 */

$(function(){
    // SORTABLE

    // show model when click button add
    $("#add_sidebar").click(function(){
        $("#model_add_sidebar").modal({
            show: true,
            backdrop: 'static'
        });
    });
    // show (hide) display format and number with type is free
    $("#block_type").on('change',function () {
        var block_type  = $(this).val();
        if (block_type == '4') {
            $( "#hide_format" ).prop( "disabled", true );
            $( "#hide_number" ).prop( "disabled", true );
            $("#display_format").hide();
            $("#number").hide();
        }
        else {
            $("#display_format").show();
            $("#number").show();
            $( "#hide_format" ).prop( "disabled", false );
            $( "#hide_number" ).prop( "disabled", false );
        }
    });
    // validate when create form
    $("#confirm_success").click(function(){
        var title_block = $("#block_title").val();
        if (title_block == '') {
            $("#error_sidebar").html(MSG.TITLE_REQUIRED);
            // check if length > 100 characters
        } else if (title_block.length > 100 ) {
            $("#error_sidebar").html(MSG.TITLE_MAXLENGTH);
        } else {
            // check exits name when click add new sidebar
            var name = $("#block_title").val();
            $.ajax({
                type: "GET",
                url: URL.ADMIN.SIDEBAR.CHECKNAME,
                data:{ "name" : name },
                success: function(data) {
                    if (data == 'true') {
                        $("#error_sidebar").html(MSG.TITLE_EXITS);
                    } else {
                        $("#form_add_sidebar").submit();
                    }
                }
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
        url: URL.ADMIN.SIDEBAR.LIST_CONTENT,
        data:{ "id" : id },
        dataType: 'json',
        success: function(data) {
            if (data.length > 0) {
                var html = '';
                var stt = 0 ;
                html += '<div class="form-group" id="show_content_id">';
                html += '<label class="col-md-4 col-lg-2 control-label">';
                html += '</label>';
                html += '<div class="col-md-8 col-lg-10 form-group"  style="border:1px solid black;margin-left: -2.7%">';
                html += '<ul class="show_content_sidebar" style="margin-left: -5%">';
                $.each(data, function (key, item) {
                    stt ++ ;
                    html += '<li style="list-style-type:none;width: 101.7%">';
                    html += stt ;
                    html += '<span style="margin-left:20px">';
                    html += item.title;
                    html += '</span>';
                    html == '</li>';
                });
                html += '</ul>';
                html += '</div>';
                $("#result_content_before").html(html);
                var number = $("#hide_number").val();
                $(".show_content_sidebar li" ).slice(0,number ).css( "background-color", "#fff2cc" );
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
            url: URL.ADMIN.SIDEBAR.LIST_CONTENT,
            data:{ "id" : id },
            dataType: 'json',
            success: function(data) {
                if (data.length > 0 ) {
                    var html = '';
                    var stt = 0 ;
                    html += '<div class="form-group" id="show_content_id_ajax">';
                    html += '<label class="col-md-4 col-lg-2 control-label">';
                    html += '</label>';
                    html += '<div id="show_content_sidebar_ajax" class="col-md-8 col-lg-10 form-group" style= "border:1px solid black;margin-left: -2.7% " >';
                    html += '<ul class="show_content_sidebar_ajax" style="margin-left: -5%;width: 106.6%">';
                    $.each(data, function (key, item) {
                        stt ++ ;
                        html += '<li style="list-style-type:none">';
                        html += stt ;
                        html += '<span style="margin-left:20px">';
                        html += item.title;
                        html += '</span>';
                        html == '</li>';
                    });
                    html += '</ul>';
                    html += '</div>';
                    html += '</div>';
                    $("#result_content").html(html);
                    $( ".show_content_sidebar_ajax li" ).slice( 0,number ).css( "background-color", "#fff2cc" );
                } else {
                    $("#show_content_id_ajax").hide();
                }
            }
        });
    });

    // END AJAX SIDEBAR UPDATE LATEST

    // edit css color when choose category
    $("#hide_number").on('change',function () {
        var number = $("#hide_number").val();
        $(".show_content_sidebar li").css("background-color", "");
        $( ".show_content_sidebar li" ).slice( 0,number ).css( "background-color", "#fff2cc" );
        $(".show_content_sidebar_ajax li").css("background-color", "");
        $( ".show_content_sidebar_ajax li" ).slice( 0,number ).css( "background-color", "#fff2cc" );
    });

    //click button delete sidebar

});