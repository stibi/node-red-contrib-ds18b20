# DS18B20 Node-RED node (Raspberry Pi compatible)

![example screenshot](https://dl.dropboxusercontent.com/u/3189942/pics/ds18b20_nodered_node.png)

This Node-RED node is working only with DS18B20 sensors connected to a Raspberry Pi.
It can't be used as a "general" node for communication with the sensor.
The [underlying library](https://www.npmjs.com/package/ds18b20) is a npm module, which can read a data from a DS18B20 sensors connected to a Raspberry Pi and it is used by the node.

## Requirements

On the Linux system where your Node-RED is running and where your sensors are connected to, make sure you have loaded all the kernel modules needed for working with 1-Wire devices, what the DS1820 sensor is.

```
sudo modprobe w1-gpio
sudo modprobe w1-therm
```

It's good idea to have these modules loaded automatically at the boot time, but that's matter of how this could be done on the system you are using.
It's quite a similar job on all systems, so for example my favorite Archlinux has done it [this way](https://wiki.archlinux.org/index.php/kernel_modules#Automatic_module_handling).

## Installation

Run the following command in the root directory of your Node-RED install

```
npm install node-red-contrib-ds18b20 --save
```

## Features

* you can select a 1-wire device/sensor from a dropdown list in the configuration dialog of the node
* configurable time interval of the sensor sampling
* you can configure name of the node, that could be for example the place where is the node placed, if no name set, ID of the device is used as a label
