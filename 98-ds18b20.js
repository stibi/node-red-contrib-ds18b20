module.exports = function(RED) {

    var sense = require('ds18b20');

    function DS18B20Node(config) {
        RED.nodes.createNode(this, config);
        this.sensorid = config.sensorid;
        var node = this;

        this.on('input', function(msg) {
            sense.temperature(this.sensorid, function(err, value) {
                var tempReading = {reading: value, where: node.name};
                msg.payload = tempReading;
                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("ds18b20", DS18B20Node);
}
