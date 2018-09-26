
$('#test').click(function () {
    alert(12);
});
$("#file-4").fileinput({
    allowedFileExtensions: ["jpg", "png", "gif","jpeg"],
    maxImageWidth: 200,
    maxFileCount: 1,
    resizeImage: true
});
$("#file-5").fileinput({
    allowedFileExtensions: ["jpg", "png", "gif","jpeg"],
    maxImageWidth: 200,
    maxFileCount: 1,
    resizeImage: true
});

$(".btn-warning").on('click', function() {
    if ($('#file-4').attr('disabled')) {
        $('#file-4').fileinput('enable');
    } else {
        $('#file-4').fileinput('disable');
    }
});
$(".btn-info").on('click', function() {
    $('#file-4').fileinput('refresh', {previewClass:'bg-info'});
});