
    var trainquery = '<REQUEST><LOGIN authenticationkey="bcddeeb5166d403ea8e6d78ccf7fdbb9" /><QUERY objecttype="TrainAnnouncement"><FILTER><EQ name="AdvertisedTrainIdent" value="7000" /><EQ name="ActivityType" value="Avgång"/></FILTER><INCLUDE>LocationSignature</INCLUDE><INCLUDE>TimeAtLocation</INCLUDE></QUERY></REQUEST>';
     $.ajax({
           url: "http://api.trafikinfo.trafikverket.se/v1.1/data.json", 
           processData: false,
           type: "POST",  // type should be POST
           data: trainquery, // send the string directly
           contentType:"text/xml; charset=utf-8",
           dataType:"json",
           success: function(response){
             list = response.RESPONSE.RESULT[0].TrainAnnouncement;
                console.log(list);
             for (var i = 0; i < list.length; i++ ){
                console.log(list[i]);
             }
           },
           error: function(response) {
              alert(response);
           }
        });
