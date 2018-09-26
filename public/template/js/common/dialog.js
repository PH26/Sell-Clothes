/**
 * Confirmation dialog
 * Object handle confirm dialog
 */
var OptionDialog = {
    element: '#option-dialog',
    show: function(data){
        if(data.element != undefined){
            this.element = data.element;
        }
        
        $(this.element).find('.modal-header h4').text(data.title);
        $(this.element).find('.modal-body').html(data.content);
        $(this.element).find('.modal-footer').children().remove();
        for(var btnKey in data.buttons){
            if($(this.element).find('.modal-footer [data-find="'+btnKey+'"]').length == 0){
                var btnGenerate = document.createElement(data.buttons[btnKey].tag);
                $(btnGenerate).attr('data-find', btnKey);
                for(var nameAttr in data.buttons[btnKey].attributes){
                    if(nameAttr == 'text'){
                        $(btnGenerate).text(data.buttons[btnKey].attributes[nameAttr]);
                    }else if(nameAttr == 'value'){
                        $(btnGenerate).val(data.buttons[btnKey].attributes[nameAttr]);
                    }else{
                        $(btnGenerate).attr(nameAttr, data.buttons[btnKey].attributes[nameAttr]);
                    }
                }
                $(this.element).find('.modal-footer').append(btnGenerate);
            }
            
            var button = $(this.element).find('.modal-footer [data-find="'+btnKey+'"]');
            for(var key in data.buttons[btnKey].events){
                $(button).unbind(key);
                $(button).bind(key, data.buttons[btnKey].events[key]);
            }
        }
        
        $(this.element).modal('show');
        
        /**
         * Event for modal
         * @type type
         */
        if(data.events != undefined){
            if(data.events.close != undefined){
                $(this.element).on('hidden.bs.modal', data.events.close);
            }
        }
    },
    
    hide: function(){
        $(this.element).modal('hide');
    }
};

//OptionDialog.show({
//    title: 'Test dialpog',
//    content: '',
//    buttons: {
//        yes: {
//            tag: 'a',
//            attributes: {
//                text: 'Choose',
//                class: 'btn btn-primary'
//            },
//            events: {
//                click: function(e){
//                    alert(1);
//                }
//            }
//        },
//        no: {
//            tag: 'a',
//            attributes: {
//                text: 'Choose',
//                class: 'btn btn-default'
//            },
//            events: {
//                click: function(e){
//                    alert(1);
//                }
//            }
//        } 
//    }
//});