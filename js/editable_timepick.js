$(document).ready( function (){
    costumize_timepick();
})

function build_pickatime(id){
    $('#' + id).pickatime({
        default: 'now',
        fromnow: 0,
        twelvehour: false,
        donetext: 'OK',
        cleartext: 'Clear',
        canceltext: 'Cancel',
        autoclose: false,
        ampmclickable: true,
        aftershow: function(){},
        afterDone: function(){
            $('#'+id+'_output').val(document.getElementById(id).value);
        }
    });
}

function costumize_timepick(){
    var timepicks = $('.editable_timepicker');

    for (let index = 0; index < timepicks.length; index++) {
        const timepick = timepicks[index];

        $(timepick).attr('class','timepicker display_none');
        
        var html_inject = "";

        html_inject += '<div class="row">';
        html_inject +=      timepick.outerHTML;
        html_inject +=      '<div class="col s10">';
        html_inject +=          '<input id="'+timepick.id+'_output" type="text">';
        html_inject +=      '</div>';
        html_inject +=      '<div class="col s2">';
        html_inject +=          '<a class="btn" href="javascript:document.getElementById(' + "'" + timepick.id + "'" + ').click()"><i class="material-icons">watch_later</i></a>'
        html_inject +=      '</div>';
        html_inject += '</div>';

        timepick.outerHTML = html_inject;

        build_pickatime(timepick.id);
    }
    
}