var Alert = {
    parent: {
        element: ".box.box-info",
        type: 'before'
    },
    
    show: function(name, content){
        var element = null;
        if($('.alert.alert-'+name).length == 1){
            element = $('.alert.alert-'+name);
        } else {
            element = $('<div class="alert alert-'+name+'"></div>');
            
            if(this.parent.type == 'before'){
                $(this.parent.element).before(element);
            }
            if(this.parent.type == 'after'){
                $(this.parent.element).after(element);
            }
            if(this.parent.type == 'append'){
                $(this.parent.element).append(element);
            }
        }
        
        element.html(content);
    },
    
    hide: function(name){
        if(name == 'all'){
            $('.alert').remove();
        }
        $('.alert.alert-'+name).remove();
    }
};