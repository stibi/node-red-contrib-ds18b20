module.exports = function(RED) {

    var sense = require('ds18b20');

    function DS18B20Node(config) {
        RED.nodes.createNode(this, config);
        this.sensorid = config.sensorid;
        // user input is in minutes, this is conversion to miliseconds
        this.timer = config.timer * 1000 * 60;
        var node = this;

        var readSensor = function() {
            //node.log("reading a sensor with id=" + node.sensorid);
            // TODO error handling
            sense.temperature(node.sensorid, function(err, value) {
                var msg = { payload: value };
                node.send(msg);
            });
        }

        node.tout = setInterval(readSensor, node.timer);

        this.on("close", function() {
            clearInterval(this.tout);
        });
    }

    RED.nodes.registerType("ds18b20", DS18B20Node);

    RED.httpAdmin.get('/sensors/1wire',function(req,res) {
        // TODO how to handle this credential thing?
        //var credentials = RED.nodes.getCredentials(req.params.id);
        //if (credentials) {
        sense.sensors(function(err, ids) {
            // TODO error handling
            res.send(JSON.stringify(ids));
        });
    });
}
