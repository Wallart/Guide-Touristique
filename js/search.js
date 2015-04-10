$(document).ready(function(){
    $('#search_engine input').keypress(function(){
        var val = $('#search_engine input').val();
        var list = $('#features-wrapper ul li');

        console.log(val.length);
        if(val.length > 0){
            for(var i=0; i<list.length; i++){
                var elt = list[i];
                var text = $(elt).find('.desc-title').html();
                text = text.toLowerCase();
                val = val.toLowerCase();

                if(text.indexOf(val) == -1){
                    console.log('not found');
                    $('#features-wrapper ul li').css({'display':'none'});
                }
                else{
                    $('#features-wrapper ul li').css({'display':'block'});
                }
            }
        }
        else{
            $('#features-wrapper ul li').css({'display':'block'});
        }
    });
});