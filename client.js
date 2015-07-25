;(function(exports) {
    exports.onLoadTime = function() {
        var request = new XMLHttpRequest();
        request.onload = function(data) {
            var ctx = document.getElementById('mysky').getContext('2d');
            var time = JSON.parse(data.target.responseText).time;
            var skyColor = time === "day" ? 'blue' : 'black';
            ctx.fillStyle = skyColor;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
        request.open("GET", "/time.json", true);
        request.send();
    };

    var renderer = exports.renderer = {
        ctx: function() {
            return document.getElementById('mysky').getContext('2d');
        },

        fillBackground: function() {
            var ctx = this.ctx();
            ctx.fillStyle = skyColor;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
    };

})(this);