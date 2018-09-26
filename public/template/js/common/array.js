var ArrayCommon = {
    /**
    * Get max value in array method
    * @returns {Number}
    */
    getMaxValue: function(data){
        var max = {value: 0, index: -1};

        for(var key = 0; key < data.length; key++){
            if(parseInt(data[key]) > max.value){
                max.value = parseInt(data[key]);
                max.index = key;
            }
        }
        return max;
    },
    /**
    * Get max value in array method
    * @returns {Number}
    */
    getMaxValueAndRemove: function(data){
        var __data = this.getMaxValue(data);
        
        __data.data = this.remove(data, __data.index);
        
        return __data;
    },
    
    /**
     * Get min value
     * @param {type} data
     * @returns {ArrayCommon.getMinValue.min}
     */
    getMinValue: function(data){
        var min = {value: data[0], index: 0};

        for(var key = 1; key < data.length; key++){
            if(parseInt(data[key]) < min.value){
                min.value = parseInt(data[key]);
                min.index = key;
            }
        }
        return min;
    },
    
    /**
    * Get max value in array method
    * @returns {Number}
    */
    getMinValueAndRemove: function(data){
        var __data = this.getMinValue(data);
        
        __data.data = this.remove(data, __data.index);
        
        return __data;
    },
    
    /**
     * 
     */
    remove: function(data, index){
        var __data = [];
        
        for(var key = 0 ; key < data.length; key++){
            if(index != key){
                __data.push(data[key]);
            }
        }
        
        return __data;
    }
};