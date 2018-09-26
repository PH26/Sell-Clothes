$(document).ready(function(){
    /** Update Card Number for MEMBER*/

    $("#accpet-confirm").click(function(){
        var card_number_before = $("#credit-card-show").html();
        var expire_before =  $("#expire-show").html();
        var member_name =  $("#member-show").html();
        var card_number = $("#credit_card").val();

        $.cookie("card_number_before", card_number_before, {path: "/"})
        $.cookie("expire_before", expire_before, {path: "/"})
        $.cookie("member_name", member_name, {path: "/"})

        $.cookie("card_change",$("#credit_card").val(),{path: "/"})
        $.cookie("month",$("#month").val(),{path: "/"})
        $.cookie("year",$("#year").val(),{path: "/"})
        $.cookie("name_member",$("#name_member").val(),{path: "/"})

        $("#form-update-credit").submit();
    });

    // hide class error when even key up
    $("#credit_card").on("keyup", function () {
        $(".help-block").hide();
        $("#credit_card").removeClass('has-error');
    });

    $("#name_member").on("keyup", function () {
        $(".help-block_name").hide();
        $("#name_member").removeClass('has-error');
    });


});
