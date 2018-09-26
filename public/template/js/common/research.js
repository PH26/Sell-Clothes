/**
 * Research.js
 * This js file handle about research display
 * @type type
 */
$(document).ready(function(){
    
    // Check if have research
    if($('#research-container').length !== 0){
        // Call ajax accept
        $.ajax({
            url: URL.SITE.RESEARCH.LOAD,
            type: "POST",
            // Handle when success
            success: function(res){
                $('#research-container').append(res);
                
                $('#modal-research').on('shown.bs.modal', function() {
                    var h = $('#modal-research .modal-dialog').height();
                    var scr = $(window).height();
                    var div = scr - h;
                    $('#modal-research .modal-dialog').css({marginTop: (div/2) + "px"});
                });
                
                $('#modal-research').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }
        });
    }
    
    /**
     * Event when click on accept research
     */
    $(document).on('click', '#modal-research .btn-accept', function(){
        $('#modal-research').modal('hide');
        
        // Call ajax accept
        $.ajax({
            url: URL.SITE.RESEARCH.ACCEPT,
            data: {
                id: $('#modal-research').attr('data-id')
            },
            type: "POST",
            // Handle when success
            success: function(res){
                
            },
            // Handle when have error
            error: function(){
                
            }
        });
    });
    
    /**
     * Event when cancel form
     */
    $(document).on('click', '#modal-research .close', function(){
        // Call ajax accept
        $.ajax({
            url: URL.SITE.RESEARCH.CANCEL,
            data: {
                id: $('#modal-research').attr('data-id')
            },
            type: "POST",
            // Handle when success
            success: function(){
                
            },
            // Handle when have error
            error: function(){
                
            }
        });
    });
});