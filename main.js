;(function(exports) {
    exports.onLoadTime = function() {
        var request = new XMLHttpRequest();
        request.onload = function(data) {
            var ctx = document.getElementById('mysky').getContext('2d');
            var time = JSON.parse(data.target.responseText);
            console.log(time);            
        }
        request.open("GET", "/time.json", true);
        request.send();
    };
})(this);