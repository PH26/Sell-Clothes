$(document).ready(function(){
	/**
	 * Event when click on delete
	 *
	 */
	$('.btn-update').click(function(){
		//OptionDialog.element = "#ididid"
		//var href = $(this).data('href');
		OptionDialog.show({
		   title: MSG.ADMIN.MEMBER.MEMBER_MODAL_TITLE_UPDATE,
		   content: MSG.ADMIN.MEMBER.MEMBER_MODAL_CONTENT_UPDATE,
		   buttons: {
		       yes: {
		           tag: 'a',
		           attributes: {
		               text: MSG.BUTTON_YES,
		               class: 'btn btn-primary',
		               //href: href
		           },
		           events: {
		               click: function(e){
		                   $("#form_update_member").submit();
		               }
		           }
		       },
		       no: {
		           tag: 'a',
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
});