/**
 * Created by rikkei on 09/10/2017.
 */
function getContents(page){
  var data = {page: page, year: $('#ajax-container').attr('data-year')};
  $.ajax({
    url: URL.SITE.ARCHIVE.LIST + '?data=' + JSON.stringify(data),
    type: "GET",
    success: function(response){
      $('#btn-load-more').parent().remove();
      $('#ajax-container').append(response);
      $('#ajax-container img').on('error', function(){
        $(this).prop('src', URL.NO_IMAGE_AVAILABLE);
        $(this).parent().css({'background-image': 'url("'+ URL.NO_IMAGE_AVAILABLE + '")'});
      });
      $('#ajax-container .custom-list-item-thumbnail').resizeHeight(CONST.GROUP_HEIGHT_RATE, true);
    }
  });
}

$(document).on('click', '#btn-load-more', function(){
  var page = parseInt($(this).attr('data-page'));
  $(this).append('<i class="friday-loading"></i>')
  getContents(page + 1);
});
getContents(1);