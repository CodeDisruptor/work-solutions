# JavaScript Snippets
This is a repository with a collection of code I created as solutions for projects I've worked on.

## Canvas
The canvas code example is about a feature I've added for the in-house developed CRM. The CRM is for the retail optical stores, and I've been the lead developer of the CRM. This feature was part of the eye exam chart that the eye doctors used to mark findings of the eyes on an image.

## MQTT
MQTT is a solution that I came up with for the corporate laboratory sensor array. The sensor array is in-house developed using Arduino based controllers, called Moteino. The sensor PCBs were developed in-house with the purpose of connecting to the Moteino. The sensor array checks multiple temperatures that are sent to a server for further processing. MQTT is used to communicate between sensors, servers, and software for display and control of the sensors.

# Other Projects not Demonstrated
There are many more projects I have been working on throughout the years. I cannot include all, but will give a brief summary on some of the projects.

One project uses the gained knowledge of the sensor array based on MQTT.

## Dashboard
The project is a dashboard used for production and displays machine statuses, WIP, labor costs, and much more on iPads at each workstation and department. One special feature implemented is that the machine operator can use the status screen dedicated for the workstation to request maintanence in the case there is an issue. Most workstations and departments are made of multiple machines and when one is down this machine can be flagged as having an issue. Maintenance will be notified via email and text message immediatly.

## Timeclock
The timeclock for the company is also created inhouse and is mainly used to track employees times through punches, but also to request PTO, schedule meetings with HR, and much more.

## Server Programs
There are also a multitude of server side programms that I have created to assist the operations in the lab and other departments that I have written in Python.

One such program is the controlling of the conveyor system and making decisions which job is routed to which machine. This also has the advantage of routing jobs to other machines on the fly, or have a job kicked off of the conveyor in case a change has been requested and the job must not proceed through production.

## Webpage Data Scrapper
Another program is a data scrapper for supply orders, and importing the data into the system. This has makde the confirming of supply orders coming in much more efficient since it is no longer required to manually import each item including quantity by hand any longer. Along with this, an interface using PHP and HTML has been created to process the supply orders.
