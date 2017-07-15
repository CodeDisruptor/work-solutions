# Canvas Drawing
Most of the projects I've been working on are created in-house. My job was to maintain the projects and add new
features and modules over time. One such module was the creation of an online eye exam chart. I've been handed a paper
form that the eye doctors have been using and tasked with creating this into the online sales and patient CRM. No
further information was given, so I had to learn about eye exams on my own.

As the project moved along, a request arose for making drawings on images that the doctors need to mark findings for
future records. I had to come up with a solution, so my first thought was to use the HTML5 canvas element.
Unfortunately, the CRM is not HTML5, so I could not just add it and stay standard conform. The solution was to have a
popup window appear when clicking on one of the image diagrams. The popup contained the HTML5 needed for the drawing.
The marking also had to be saved with the chart and displayed when printed, but they also had to be changed when necessary.

The solution turned out to fulfill all requirements, and had an additional bonus of working with touchscreen devices.

This demo is written in vanilla JavaScript to reduce the amount of files possible, but the original used the jQuery library.
I also did not worry about browser compatibility because this is just a demo, but this demo works fine on FireFox and Chrome.
