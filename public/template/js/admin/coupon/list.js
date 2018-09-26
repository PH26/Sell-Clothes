/**
 * Created by rikkei on 03/10/2017.
 */
"use strict";
var coupon = {
  _id : {
    delete :'#delete',
    confirm : "#confirm",
  },
  _class : {
    bottom_buffer : '.bottom-buffer'
  },
  init : function () {
    this.delCoupon();
  },
  delCoupon : function (event) {
    $(coupon._class.bottom_buffer).click(function () {
        var id = $(this).attr('data-id');
        $(coupon._id.delete).click(function(){
          $.ajax({
            type:"GET",
            url: URL.ADMIN.COUPON.AJAX_DELETE_COUPON,
            data:{
              "id" : id
            },
            success : function(data) {
               if (data)
               {
                 location.reload();
               }
            },
            error: function(data) {
              console.log(data);
            }
          });
        })
    })
  }
}
$(document).ready(function () {
  coupon.init();
});