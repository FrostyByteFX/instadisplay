function load() {
    $(document).ready(function(){
        const apptoken = "185374490162456|eqR45megHrkOac5dvkmFjFJ8Fms";
        console.log(apptoken);
        var url = "https://www.instagram.com/explore/tags/vihre%C3%A4vuohi/";

        $.get( url, function( data ) {
            $( ".result" ).html( data );

            console.log(data);
    
        })
    })
}        
