# MQTT Realtime Data Update
The sensor array is a module contained in the company CRM that I am developing for the company, and I'm the lead
developer of this project. The CRM has the following, but not limited to, modules: Customer Account Management Module,
Lead Generating Module, Corporate Sales Scoreboard, Sales Representative Scoreboard, Order Entry, Labratory Status Dashboard,
and much more.

The purpose of this module is to monitor the in-house developed sensor array connected to key lab process equipment.
When something is out of the ordinary, then the sensors report the information on this scree, as well as other screen
for the operator at the machine effected. In case of a maintenance, the operator can switch the sensor to maintenance mode
to not trigger false alarms.

This module uses the [Paho MQTT JavaScript Library](http://www.eclipse.org/paho/clients/js/) to access the MQTT Broker.
The MQTT broker pushes the updated json data to all subscribed clients. For this demo, a json file containing older
data is used to simulate the MQTT published data.
