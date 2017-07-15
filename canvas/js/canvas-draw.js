window.onload = (function() {
    var canvas;
    var context;
    var canvasWidth;
    var canvasHeight;
    var strokeColor = "#f00";
    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;
    var clearMessage = false;
    var saveMessage = false;

    /**
     * Unhide canvas and hide clicked anchor.
     */
    document.querySelector('a').onclick = function(e) {
        e.preventDefault();

        canvas = document.querySelector('#anterior canvas');
        context = canvas.getContext("2d");
        canvasWidth = context.canvas.width;
        canvasHeight = context.canvas.height;

        this.style.display = 'none';
        document.querySelector('#anterior').style.display = 'block';
    }

    /**
     * Mouse down event handler
     */
    document.querySelector('#anterior canvas').onmousedown = function(e) {
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;

        paint = true;
        addClick(mouseX, mouseY);
        redraw();
    };

    /**
     * Mouse move event handler
     */
    document.querySelector('#anterior canvas').onmousemove = function(e) {
        if (paint) {
            let mouseX = e.pageX - this.offsetLeft;
            let mouseY = e.pageY - this.offsetTop;

            addClick(mouseX, mouseY, true);
            redraw();
        }
    };

    /**
     * Mouse up event handler
     */
    document.querySelector('#anterior canvas').onmouseup = function(e) {
        paint = false;
        redraw();
    };

    /**
     * Mouse leave event handler
     */
    document.querySelector('#anterior canvas').onmouseleave = function(e) {
        paint = false;
    };

    /**
     * Clear canvas click event handler
     */
    document.querySelector('button[data-button="clear"]').onclick = function(e) {
        e.preventDefault();

        // Reset draw values
        clickX = new Array();
        clickY = new Array();
        clickDrag = new Array();

        clearCanvas();

        // This part of the code is solely for the demo.
        if (!clearMessage) {
            clearMessage = true;

            let text = 'Normally at this point, the anchor image would be reset to the default image from the beginning';
            text += ' if an image was previously saved. If no image was saved, then the canvas would be cleared leaving';
            text += ' only the anterior image. This functionality is not implemented for this demo.';

            let infoBox = document.querySelector('#info-box');

            let div = document.createElement('div');
            div.setAttribute('class', 'info-box');

            let paragraph = document.createElement('p');
            paragraph.appendChild(document.createTextNode(text));

            div.appendChild(paragraph);
            infoBox.appendChild(div);
            div.style.display = 'block';

            setTimeout(function() {
                infoBox.removeChild(div);
                clearMessage = false;
            }, 15000);
        }
    };

    /**
     * Save canvas click event handler
     */
    document.querySelector('button[data-button="save"]').onclick = function(e) {
        e.preventDefault();

        let text = 'In the original solution, an ajax request would be made where the marked image is';
        text += ' sent to the server for further processing. This includes uploading the image to the server and ';
        text += ' assigning an unique name that is also stored in a session. When the exam chart is ';
        text += ' submitted, then this session is used to store the assigned image name with the chart.';
        text += ' This functionality is not implemented for this demo.';

        // This part of the code is solely for the demo.
        if (!saveMessage) {
            saveMessage = true;

            let infoBox = document.querySelector('#info-box');

            let div = document.createElement('div');
            div.setAttribute('class', 'info-box');

            let paragraph = document.createElement('p');
            paragraph.appendChild(document.createTextNode(text));

            div.appendChild(paragraph);
            infoBox.appendChild(div);
            div.style.display = 'block';

            setTimeout(function() {
                infoBox.removeChild(div);
                saveMessage = false;
            }, 20000);
        }
    };

    /**
     * Close canvas click event handler
     */
    document.querySelector('button[data-button="close"]').onclick = function(e) {
        e.preventDefault();

        document.querySelector('#anterior').style.display = 'none';
        document.querySelector('a.anterior').style.display = 'block';
    };

    /**
     * Adds a point to the drawing array.
     */
    function addClick(x, y, dragging) {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }

    /**
     * Redraws the canvas.
     */
    function redraw() {
        clearCanvas();

        context.strokeStyle = strokeColor;
        context.lineJoin = 'round';
        context.lineWidth = 2;

        for (let i = 0; i < clickX.length; i++) {
            context.beginPath();

            if (clickDrag[i] && i) {
                context.moveTo(clickX[i - 1], clickY[i - 1]);
            } else {
                context.moveTo(clickX[i] - 1, clickY[i]);
            }

            context.lineTo(clickX[i], clickY[i]);
            context.closePath();
            context.stroke();
        }
    }

    /**
     * Clears the canvas.
     */
    function clearCanvas() {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
    }
});
