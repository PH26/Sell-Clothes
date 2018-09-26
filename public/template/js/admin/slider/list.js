/**
 * Created by rikkei on 09/11/2017.
 */
$(function() {
  $(document).on('click', '.btn-delete', function(){
    var id = $(this).closest('.row-content').attr('data-id');

    OptionDialog.show({
      title: MSG.CONFIRM_DELETE,
      content: MSG.ADMIN.SLIDER.DELETE,
      buttons: {
        yes: {
          tag: 'button',
          attributes: {
            text: MSG.BUTTON_YES,
            class: 'btn btn-primary'
          },
          events: {
            click: function(e){
              $.ajax({
                type: 'POST',
                url: URL.ADMIN.SLIDER.DELETE,
                data: {
                  id: id,
                  _token: APP.getToken()
                },
                dataType: 'json',
                success: function(response){
                  OptionDialog.hide();
                  window.location.reload();
                },
                error: function(){
                  OptionDialog.hide();
                }
              });
            }
          }
        },
        no: {
          tag: 'button',
          attributes: {
            text: MSG.BUTTON_NO,
            class: 'btn btn-primary'
          },
          events: {
            click: function(e){
              OptionDialog.hide();
            }
          }
        }
      }
    });
  });

  
  // SORTABLE
  $('.sortable').sortable({
    axis: 'y',
    helper: function(event, ui){
      var $clone =  $(ui).clone();
      $clone .css('position','absolute');
      return $clone.get(0);
    },

    update : function () {
      var obj_search = $(this).sortable('toArray', {attribute: 'data-sort'});

      $.ajax({
        type : "GET" ,
        url : URL.ADMIN.SLIDER.LIST_SORTABLE,
        data : {
            "dataSort" : obj_search
        },
        success : function (data) {
          console.log(data);
        }
      })
    }
  });

  $( ".sortable" ).disableSelection();
  $(".sortable").sortable('refresh');
});