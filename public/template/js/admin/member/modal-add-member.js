$(document).ready(function(){
	/**
	 * Event when click on delete
	 *
	 */
	$('.btn-add').click(function(){
		//OptionDialog.element = "#ididid"
		//var href = $(this).data('href');
		OptionDialog.show({
		   title: MSG.ADMIN.MEMBER.MEMBER_MODAL_TITLE_ADD,
		   content: MSG.ADMIN.MEMBER.MEMBER_MODAL_CONTENT_ADD,
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
		                   $("#form_add_member").submit();
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