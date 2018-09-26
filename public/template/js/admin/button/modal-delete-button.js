$(document).ready(function(){
	/**
	 * Event when click on delete
	 *
	 */
	$('.btn-delete').click(function(){
		//OptionDialog.element = "#ididid"
		var href = $(this).data('href');
		OptionDialog.show({
		   title: MSG.ADMIN.BUTTON.BUTTON_MODAL_TITLE_DELETE,
		   content: MSG.ADMIN.BUTTON.BUTTON_MODAL_CONTENT_DELETE,
		   buttons: {
		       yes: {
		           tag: 'a',
		           attributes: {
		               text: MSG.BUTTON_YES,
		               class: 'btn btn-primary',
		               href: href
		           },
		           events: {
		               click: function(e){
		                   
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