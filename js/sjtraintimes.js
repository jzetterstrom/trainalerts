
    $.ajax({
           url: "sjmg/api/v4/train-timetables?announcedTrainNumber=7000",
           processData: false,
           type: "GET",  // type should be POST
           //data: trainquery, // send the string directly
        beforeSend: function (xhr){
                    xhr.setRequestHeader('version', "19");
                    xhr.setRequestHeader('deviceType', "iphone");
                    xhr.setRequestHeader('appKey', "E252FEDA2EAA72F0CEBF5E9E432C66BB");
                },
           contentType:"application/json",
           dataType:"json",
           success: function(response){
                console.log(response);
             var list = response.stops;
             for (var i = 0; i < list.length; i++ ){
                console.log(list[i]);

                 var html = '<article class="timeline-entry"><div class="timeline-entry-inner">'+
                           '<time class="timeline-time" datetime="2014-01-10T03:45"><span>'+list[i].arrivalTime.scheduledTime+'</span><span>Today</span></time>'+
                           '<div class="timeline-icon">'+
                             '<i class="entypo-feather"></i>'+
                           '</div>'+
                           '<div class="timeline-label">'+
                             '<h2>'+list[i].station.stationName+' Spår: '+list[i].track.scheduledTrack+'<br/><span><button type="button" class="btn" onclick="sendSms()">Send SMS</button></span></h2>'+
                           '</div>'+
                         '</div> </article>';

                 $(".timeline-centered").append(html);
             }
           },
           error: function(response) {
              alert(response);
           }
        });
