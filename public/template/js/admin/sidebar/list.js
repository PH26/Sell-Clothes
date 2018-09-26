/**
 * Created by Admin on 12/19/2016.
 */

$(function(){
    // SORTABLE
    $( ".sortable " ).sortable({
        update : function(event, ui) {
            var data1 = $(this).sortable("toArray");
            var result = $(this).sortable('toArray', {attribute: 'data-sort'});
            function toObject(keys, vals, ref) {
                return keys.length === vals.length ? keys.reduce(function(obj, key, index) {
                        obj[key] = vals[index];
                        return obj;
                    }, ref || {}) : null;
            }
            var dataSort = JSON.stringify(toObject(data1, result));
            $.ajax({
                type: "GET",
                url: URL.ADMIN.SIDEBAR.LIST_SORTABLE,
                data:{ "dataSort" : result },
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
        cancel : 'button, .btn',

        // END SORTABLE
    });
    $( ".sortable" ).disableSelection();
    $(".sortable").sortable('refresh');
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
        $("#display_format").show();
        $("#number").show();
        $( "#hide_format" ).prop( "disabled", false );
        $( "#hide_number" ).prop( "disabled", false );
        
        if (block_type == 'photo' || block_type == 'digital') {
            $( "#hide_format" ).prop( "disabled", true);
            $("#display_format").hide();
        }
        else if (block_type == 'free') {
            $( "#hide_format" ).prop( "disabled", true);
            $( "#hide_number" ).prop( "disabled", true);
            $("#display_format").hide();
            $("#number").hide();
        }
    });
    // validate when create form
    $("#confirm_success").click(function(){
        var title_block = $("#block_title").val();
        if (title_block == '') {
            $("#error_sidebar").html(MSG.TITLE_REQUIRED);
            //$("#block_title").css("border","1px solid red");
            $("#block_title").parent().addClass('has-error');
            // check if length > 100 characters
        } else if (title_block.length > 50 ) {
            $("#error_sidebar").html(MSG.TITLE_MAXLENGTH);
            //$("#block_title").css("border","1px solid red");
            $("#block_title").parent().addClass('has-error');
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
                        //$("#block_title").css("border","1px solid red");
                        $("#block_title").parent().addClass('has-error');
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

    // edit css color when choose category
    $("#hide_number").on('change',function () {
        var number = $("#hide_number").val();
        $(".show_content_sidebar li").css("background-color", "");
        $( ".show_content_sidebar li" ).slice( 0,number ).css( "background-color", "#fff2cc" );
        $(".show_content_sidebar_ajax li").css("background-color", "");
        $( ".show_content_sidebar_ajax li" ).slice( 0,number ).css( "background-color", "#fff2cc" );
    });

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
                    window.location.href = URL.ADMIN.SIDEBAR.LIST;
                }
            });
        })
    });

    $("#refresh_page_sidebar").click(function(){
        window.location.href = URL.ADMIN.SIDEBAR.LIST;
    })
});