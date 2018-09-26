var ContextMenu = {
    isInited: false,
    contextMenuName: 'contextmenu',
    element: null,
    container: null,
    
    /**
     * Get context menu
     * @param {type} parse
     * @returns {jQuery|String}
     */
    getContextMenu: function(parse)
    {
        if(parse == undefined)
        {
            parse = true;
        }
        
        if(parse)
        {
            return $(this.container).find('[data-element="' + this.contextMenuName + '"]');
        }
        
        return this.contextMenuName;
    },
    
    /**
     * Init method
     * @returns {ContextMenu}
     */
    checkIsExistsOrCreate: function()
    {
        // Check if exist form
        if(this.getContextMenu().length === 0)
        {
            $(this.container).append(
                    '<div data-element="'+this.getContextMenu(false)+'" style="position: fixed; z-index: 99998; top: 0;left: 0; width: 100%; height: 100%">'
                    + '<div style="z-index: 99999; height: 100px; width: 100px; background: #fff; border: 1px solid #ddd; position: absolute">'
                    +   '123'
                    + '</div></div>');
        }
        
        // Check if is inited
        if(!this.isInit)
        {
            // Set to inited
            this.isInited = true;
        }
        
        return this;
    },
    
    /**
     * Open context menumenthod
     * @param {type} container
     * @param {type} element
     * @returns {ContextMenu}
     */
    open: function(container, element)
    {
        this.element = element;
        this.container = container;
        
        // Call init method
        var context = this.checkIsExistsOrCreate()
            .getContextMenu();
    
        context.show();
        
        var div = context.find('div');
        
        var h = (context.height() - div.height())/2 - 30;
        var w = (context.width() - div.width())/2;
        
        div.css({
            left: w + "px",
            top: h + "px"
        });

        return this;
    },
    
    /**
     * Close context event
     * @returns {undefined}
     */
    close: function()
    {
        this.getContextMenu().hide();
    }
};