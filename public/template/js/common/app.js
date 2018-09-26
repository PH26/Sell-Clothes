var APP = {
    // Common method
    getInfo: function(name, path){
        var val = $('meta[name="support"]').attr(name);

        if(path != undefined && val != ""){
            val = path + val;
        }

        return val;
    },
    
    /**
     * Get token method
     */
    getToken: function(){
        return $('meta[name="csrf-token"]').attr('content');
    },
    
    getNewCsrfToken: function(success){
        $.ajax({
            url: ROOT_URL + 'common/get-csrf-token',
            data: {},
            success: function(response){
                $('meta[name="csrf-token"]').attr('content', response);

                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': APP.getToken()
                    }
                });
                if(success != undefined){
                    success();
                }
            }
        });
    },

    /**
     * Get device method
     * @returns {undefined}
     */
    getDevice: function(){
        return this.getInfo('device-type');
    },
    
    /**
     * Check is exists URL method
     * @param {type} url
     * @param {type} callback
     * @returns {undefined}
     */
    isExistsUrl: function(url, callback){
        $.ajax({
            type: 'HEAD',
            url: url,
            success: function(){
              callback(true);
            },
            error: function() {
              callback(false);
            }
        });
    },
};