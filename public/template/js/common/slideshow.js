$.fn.poupupImages = function(setting){
    if(setting.element === undefined){
        setting.element = '.poupup-images';
    }
    
    if(setting.group === undefined){
        setting.group = 'all';
    }
    
    if(setting.container === undefined){
        setting.container = {};
    }
    
    if(setting.container.attributes === undefined){
        setting.container.attributes = {};
    }
    
    if(setting.container.attributes["class"] === undefined)
        setting.container.attributes["class"] = 'poupup-images-container';
    
    if(setting.container.attributes["data-name"] === undefined)
        setting.container.attributes["data-name"] = 'poupup-image';
    
    // Setting for thumbnail
    if(setting.thumbnails === undefined)
        setting.thumbnails = {};
    
    if(setting.thumbnails.attributes === undefined)
        setting.thumbnails.attributes = {};
    
    if(setting.thumbnails.attributes.class === undefined)
        setting.thumbnails.attributes.class = "thumbnails";
    
    // Create popup
    $(document).on('click', setting.element, function(){
        if($('div[data-name="'+setting.container["data-name"]+'"]').length == 0){
            var container = document.createElement('div');
            $(container).attr(setting.container.attributes);
            
            // Create thumbnail
            if(setting.thumbnails !== false){
                var thumbnail = document.createElement('div');
                $(thumbnail).attr(setting.thumbnails.attributes);
                $(container).append(thumbnail);
            }
            
            $('body').append(container);
        }
    });
};


$(document).poupupImages({
    element: '.poupup-images'
});