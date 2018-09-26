$(function(){
        var id;
        var count = 0 ;
        $("#item_parent"+id).css("background-color","white");
        $(".parrent_click").click(function(){
            count ++ ;
            id = $(this).data('id');
            // check keep background css when click parrent category
            // if click function keep csss background color
            if (count == 1) {
                 $("#item_parent"+id).css("background-color","#fff2cc");
            } else {
                // if click continue remove css and focus id category click
                $(".item_list").css("background-color","white");
                $("#item_parent"+id).css("background-color","#fff2cc");
            }
            $.ajax({
                type: "GET",
                url: URL.ADMIN.CATEGORY.AJAX_LIST_CHILD,
                data:{ "id" : id },
                dataType: 'json',
                success: function(data) {
                    if (data.length > 0) {
                         var html = '';
                         var temp = 0;
                        $.each(data, function (key, item) {
                            temp ++ ;
                            html += '<div class="abc">';
                            html += '<tr>';
                            html += '<div class="item_list_child" style="width:100.3%;margin-top:-2px">'; 
                            html += '<a href="#" data-id="item.id" class="parrent_click">';
                            html += '<span id = "parrent_result'+item.id+'"">';
                            html += item.name;
                            html += '</span>';
                            html += '(' + item.count + ')';
                            html += '</a>';
                            html += '<a href="#" class="delete_button_ajax" data-id="'+item.id+'">';
                            html += '<button data-toggle="model" class="btn btn-default" id="cate_delete">'+MSG.BUTTON_DELETE;
                            html += '</button>';
                            html += '</a>';
                            html += '<a class="btn btn-custom text" href="/admin/category/update_child/'+item.id+'">'+MSG.BUTTON_EDIT+'</a>';
                            html += '</div>';
                            html += '</tr>';
                            html += '</div>';
                            $("#result_child").html(html);
                            $("#menu_child").hide();
                            $("#form-wapper").css("height", "18px");
                            $("#cate_add_childrent").css("margin-top", "2.5%");
                        });     
                    }
                    else {
                        $(".item_list_child").hide();
                        $("#menu_child").hide();
                    }
                     
                }
            })
        });
        // delete  category when confirm model
        $(".delete_button").click(function(){
            $("#confirm_delete").modal({
                show: true,
                backdrop: 'static'
            });
            var id;
            id = $(this).data('id');
            var name = $("#parrent_click"+id).html();
            $("#name_confirm").html(name);
            $("#confirm_success").click(function(){
                $.ajax({
                    type: "GET",
                    url: URL.ADMIN.CATEGORY.AJAX_DELETE_CHILD +'/'+id,
                    success: function(data) {
                       window.location.href = URL.ADMIN.CATEGORY.LIST ;
                    }
                })
            })
        });

        // delete category child when confirm model
         $(".child_delete_button").click(function(){
            $("#confirm_delete_child").modal({
                show: true,
                backdrop: 'static'
            });
            var id;
            id = $(this).data('childid');
            var name = $("#parrent_click"+id).html();
            $("#name_confirm_child").html(name);
            $("#confirm_success_child").click(function(){
                $.ajax({
                    type: "GET",
                    url: URL.ADMIN.CATEGORY.AJAX_DELETE_CHILD +'/'+id,
                    success: function(data) {
                        window.location.href = URL.ADMIN.CATEGORY.LIST ;
                    }
                })
            })
        });

        $(document).on('click', '.delete_button_ajax', function(){
            id = $(this).data('id');
            name = $("#parrent_result"+id).html();
            $("#name_confirm_child").html(name);
            $("#confirm_delete_child").modal({
                show: true,
                backdrop: 'static'
            });
            $("#confirm_success_child").click(function(){
                $.ajax({
                    type: "GET",
                    url: URL.ADMIN.CATEGORY.AJAX_DELETE_CHILD +'/'+id,
                    success: function(data) {
                        window.location.href = URL.ADMIN.CATEGORY.LIST ;
                    }
                })
            })    
        });
        $(".parrent_click").click(function(){
            var id_session;
            id_session = $(this).data('id');
            $.cookie("id_session", id_session)
        });
    });
        
