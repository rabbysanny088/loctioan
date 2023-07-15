const display = document.getElementById('display');


function getLocation() {
    
    if(navigator.geolocation){

        // navigator.geolocation.getCurrentPosition(showPostion, showErrr);
        navigator.geolocation.watchPosition(showPostion, showErrr);

    }else{
        display.innerHTML = "get loaction not aviabal you browser"
    }
}

function showPostion(postion){

    display.innerHTML = "Latitude :" + postion.coords.latitude + '<br/>Longitude :' + postion.coords.longitude;
}


function showErrr(err){

    switch (err.code) {
        case err.PERMISSION_DENIED:
        display.innerHTML = "Permision Denited"
        break;
        
        case err.POSITION_UNAVAILABLE:
            display.innerHTML = "POSITION UNAVALABLE"

        break;

        case err.TIMEOUT:
            display.innerHTML = "Timeout Eorr"

        break;

        case err.UNKNOWN_ERROR:
            display.innerHTML = "Unkonew =="

        break;
    }

}
