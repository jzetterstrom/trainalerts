function getTrains(trainId){
    var trainquery = '<REQUEST><LOGIN authenticationkey="bcddeeb5166d403ea8e6d78ccf7fdbb9" /><QUERY objecttype="TrainAnnouncement"><FILTER><EQ name="AdvertisedTrainIdent" value="' + trainId + '" /><EQ name="ActivityType" value="Avgång"/></FILTER></QUERY></REQUEST>';
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
                console.log("klockan " + list[i].TimeAtLocation + " Passerade tåget " + list[i].LocationSignature + " " + list[i].TimeAtLocation);
             }
           },
           error: function(response) {
              alert(response);
           }
        });
   }
   getTrains(7000);