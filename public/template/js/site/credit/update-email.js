/** Update Email for MEMBER*/

$("#email").on("keyup", function () {
    $(".help-block-email").hide();
    $("#email").removeClass('has-error');
});
$("#email-update").click(function () {
    $.cookie("email_before", $("#email_before").html(), {path: "/"});
    $.cookie("email_after", $("#email").val(), {path: "/"});
    $("#form-update-email").submit();
});
$("#post-accept-update-email").click(function () {
    $("#submit-update-email").submit();
})/**
 * Created by Admin on 2/16/2017.
 */
