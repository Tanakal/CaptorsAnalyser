var checkData = function(data) {

    if(data._id == undefined || data.date == undefined || data.accelerometre == undefined || data.gyrometre == undefined || data.magnetometre == undefined || data.gps == undefined){
        return 404;
    }
    else if(data.gps.latitude == undefined || data.gps.longitude == undefined || data.gps.altitude == undefined || (data.gps.latitude == 0 && data.gps.longitude == 0 && data.gps.altitude == 0)){
        return 400;
    }
    else{
        return 200;
    }
}

var sendToBdd = function(data) {

    //TODO: extract and send data to bdd

}


exports.checkData = checkData;
exports.sendToBdd = sendToBdd;