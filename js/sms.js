/**
 * Created by jeze on 25/08/16.
 */
var url = "/a1/SMS";
var username = "u7e39fcc45a6c0390f35d992c4d929ad5";
var password = "681DF3A28969C7EF197D95806C0CEAE3";

//var username = $("input#username").val();
//var password = $("input#password").val();

function make_base_auth(username, password) {
    var tok = username + ':' + password;
    var hash = btoa(tok);
    return "Basic " + hash;
}


function sendSms() {
    var postData = {
        "to": "+46700032116",
        "from": "+46739278472",
        "message": "I want to buy 2 cartons of milk!"
    };

    $.ajax
    ({
        type: "POST",
        url: url,
        dataType: 'json',
        async: false,
        data: postData,
        beforeSend: function (xhr){
            xhr.setRequestHeader('Authorization', make_base_auth(username, password));
        },
        success: function (){
            alert('Thanks for your comment!');
        }
    });

    //$.post( url, postData, function success(data){
    //    alert("success callback " + textStatus);
    //});
}


