$(document).ready(function(){
    /**
     * Cal price
     * @returns {undefined}
     */
    function calculate(ins)
    {
        // Get price
        var price = parseFloat($(ins).attr('data-price'));
        
        // Get tax
        var tax = parseFloat($('[name="tax"]').val());
        
        // Calculate
        var taxPrice = (price/100)*tax;
        var realPrice = price + taxPrice;
        
        // Show data
        $('#tax').text(taxPrice);
        $('#price').text(realPrice);
    }
    
    /**
     * Event when course id change
     */
    $(document).on('change', '[name="courseId"]', function(){
        calculate(this);
    });
    
    calculate($('[name="courseId"]').first());
    $('[name="courseId"]').first().prop('checked', true);
});