//the weather.js is shit and the api is shit and im mad so here's my own library lol
var apikey = "9b844f9ec461fb26f16bb808550c5aca";
var tempunit = "f";
var iconset = "climacons";

function jsonp(url, callback) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: 'jsonp',
        success: function (result) {
            callback(result);
        }
    });
}

function geoloc(callback) {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(callback);
    } else {
        return false;
    }
}

function weatherpos(weatherfunc, callback) {
    geoloc(function (position) {
        weatherfunc(position.coords.latitude, position.coords.longitude, callback);
    });
}

function ftoc(f) {
    return (f - 32) * (5 / 9);
}

function weathercurrent(lat, long, callback) {
    var url = `https://api.darksky.net/forecast/${encodeURIComponent(apikey)}/${encodeURIComponent(lat)},${encodeURIComponent(long)}?units=us`;
    jsonp(url, callback);
}

