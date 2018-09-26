function uploadHandle(setting){
    this.uploadStack = [];
    this.currentProcess = [];
    this.total = 0;
    this.setting = setting;
    /**
     * Upload method
     * @param data FormData
     * @param finish object
     * @returns void
     */
    this.upload = function(data){
        this.total++;
        this.uploadStack['index'+this.total] = data;
        var parent = this;
        
        function check(){
            parent.next();
        }
        
        if(this.total > 1){
            window.setTimeout(check, this.processLength()*2000);
        } else {
            check();
        }
    };
    
    /**
     * Remove stack method
     * @param {type} index
     * @returns {undefined}
     */
    this.removeStack = function(index){
        console.log(index);
        // Remove
        this.uploadStack[index] = 'removed';
        this.currentProcess[index] = 'removed';
    };
    
    /**
     * GEt stack length
     * @returns {Number}
     */
    this.stackLength = function(){
        var length = 0;
        
        for(var index in this.uploadStack){
            if(this.uploadStack[index] !== 'removed'){
                length++;
            }
        }
        
        return length;
    }
    
    /**
     * Get process length
     * @returns {Number}
     */
    this.processLength = function(){
        var length = 0;
        
        for(var index in this.currentProcess){
            if(this.currentProcess[index] !== 'removed'){
                length++;
            }
        }
        
        return length;
    }
    
    /**
     * Upload next element
     * @returns {undefined}
     */
    this.next = function(){
        // Get first element
        for(var index in this.uploadStack){
            if(this.processLength() >= 2){
                return;
            }
            
            if(this.uploadStack[index] !== 'removed' && this.currentProcess[index] == undefined){
                this.currentProcess[index] = this.uploadStack[index];
            
                var upload = new mediaUpload(this);
                upload.send(this.uploadStack[index], index);
            }
        }
    };
};

var rowCount = 0;

function statusbar(data){
    rowCount++;
    var row="odd";
    $(data.element).html('');
    $(data.element).show();
    if(rowCount %2 ==0) row ="even";
    this.statusbar = $('<div class="progress progress-xs active"></div>');
    
    //this.filename = $("<div class='filename'></div>").appendTo(this.statusbar);
    //this.size = $("<div class='filesize'></div>").appendTo(this.statusbar);
    var color = 'primary';
    if(data.color != undefined){
        color = data.color;
    }
    
    this.progressBar = $('<div class="progress-bar progress-bar-'+color+' progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"><span class="sr-only">0%</span></div>').appendTo(this.statusbar);
    //this.abort = $("<div class='abort'>Abort</div>").appendTo(this.statusbar);
    $(data.element).append(this.statusbar);
    
    this.setFileNameSize = function(name,size){
//        var sizeStr="";
//        var sizeKB = size/1024;
//        if(parseInt(sizeKB) > 1024){
//            var sizeMB = sizeKB/1024;
//            sizeStr = sizeMB.toFixed(2)+" MB";
//        }else{
//           sizeStr = sizeKB.toFixed(2)+" KB";
//        }
//
//        this.filename.html(name);
//        this.size.html(sizeStr);
    }

    this.setProgress = function(progress){
        //var progressBarWidth =progress*this.progressBar.width()/ 100;  
        this.progressBar.animate({ width: progress + '%' }, 10).find('span').html(progress + "% ");
        if(parseInt(progress) >= 100){
            //$(data.element).hide();
        }
    }

    this.setAbort = function(jqxhr){
//        var sb = this.statusbar;
//        this.abort.click(function(){
//            jqxhr.abort();
//            sb.hide();
//        });
    }
    
    this.setFileNameSize(data.fileSize[0], data.fileSize[1]);
};

/**
 * MediaUpload object
 * @param {type} parentUploadHandle
 * @returns {mediaUpload}
 */
function mediaUpload(parentUploadHandle){
    this.progress = null;
    /**
     * 
     * @param data json
     * @returns void
     */
    this.send = function(data, index){
        if(data.progress != undefined && data.progress != false)
            this.progress = new statusbar(data.progress);
        
        var parent = this;
        //var extraData ={}; //Extra Data.
        var jqXHR= $.ajax({
            xhr: function() {
                var xhrobj = $.ajaxSettings.xhr();
                if (xhrobj.upload) {
                    xhrobj.upload.addEventListener('progress', function(event) {
                        //Set progress
                        if(parent.progress != null && parent.progress != false){
                            var percent = 0;
                            var position = event.loaded || event.position;
                            var total = event.total;
                            if (event.lengthComputable) {
                                percent = Math.ceil(position / total * 100);
                            }
                            parent.progress.setProgress(percent);
                        }
                    }, false);
                }
                return xhrobj;
            },
            url: data.url,
            type: "POST",
            dataType: 'json',
            contentType:false,
            processData: false,
            cache: false,
            data: data.data.files,
            headers: data.headers,
            success: function(response){
                parentUploadHandle.removeStack(index);
                
                if(parent.progress != null && parent.progress != false && parentUploadHandle.stackLength() == 0){
                    parent.progress.setProgress(100);
                    if(data.progress.hide == undefined || data.progress.hide == true){
                        $(data.progress.element).hide();
                    }
                } else if(parent.progress != null && parent.progress != false 
                        && (data.progress.hide == undefined || data.progress.hide == true) 
                        && (data.progress.type != undefined && data.progress.type == 'one')){
                    $(data.progress.element).hide();
                }
                
                if(data.success != undefined){
                    data.success(response);
                }
                
                parentUploadHandle.next();

                if(parentUploadHandle.setting.finish != undefined && parentUploadHandle.stackLength() == 0){
                    parentUploadHandle.setting.finish();
                }
            },
            error: function(response){
                parentUploadHandle.removeStack(index);
                if(parent.progress != null && parent.progress != false && parentUploadHandle.stackLength() == 0){
                    parent.progress.setProgress(100);
                    
                    if(data.progress.hide == undefined || data.progress.hide == true){
                        $(data.progress.element).hide();
                    }
                } else if(parent.progress != null && parent.progress != false 
                        && (data.progress.hide == undefined || data.progress.hide == true) 
                        && (data.progress.type != undefined && data.progress.type == 'one')){
                    $(data.progress.element).hide();
                }
                
                if(data.error != undefined){
                    data.error(response);
                }
                
                parentUploadHandle.next();

                if(parentUploadHandle.setting.finish != undefined && parentUploadHandle.stackLength() == 0){
                    parentUploadHandle.setting.finish();
                }
            }
        });
        
        if(parent.progress != null && parent.progress != false)
            parent.progress.setAbort(jqXHR);
    };
}

/**
 * Use upload as common
 * @type type
 */
var UploadHandle = {
    uploadHandle: null,
    
    /**
     * Upload method
     * @param data FormData
     * @returns void
     */
    upload: function(data){
        if(this.uploadHandle === null){
            this.uploadHandle = new uploadHandle();
        }
        
        this.uploadHandle.upload(data);
    }
};