$(document).ready(function() {
    // Open json data file Normally, the Paho library would be used here to subscribe to the
    // MQTT broker to receive the data, and the display would update as soon as new data is available.
    $.ajax({
        url : 'js/data.json',
        type : 'get',
        dataType : 'json',
        success : function(payload) {
            let tbody = $('#sensor-status tbody');

            if (payload.length > 0) {
                tbody.html('');

                for (let key in payload) {
                    let item = payload[key];
                    let row = document.createElement('tr');
                    let nodeIdCell = document.createElement('td');
                    let sensorCell = document.createElement('td');
                    let updateCell = document.createElement('td');
                    let voltageCell = document.createElement('td');
                    let tempCell = document.createElement('td');
                    let noticeCell = document.createElement('td');
                    let maintenanceModeCell = document.createElement('td');

                    nodeIdCell.appendChild(document.createTextNode(item.id));
                    sensorCell.appendChild(document.createTextNode(item.sensor));

                    // Process Update Date
                    let lastUpdateDate = new Date(item.lastUpdate.replace(/-/g, '/'));
                    updateCell.appendChild(document.createTextNode(lastUpdateDate.toLocaleString()));
                    voltageCell.appendChild(document.createTextNode(item.lastVoltage));

                    // Process Temperature
                    let minTemp = (item.minTemperature !== null) ? item.minTemperature : 0;
                    let maxTemp = (item.maxTemperature !== null) ? item.maxTemperature : 0;

                    // Check last temperature data
                    if (item.lastTemperature == -196.60) {
                        tempCell.setAttribute('class', 'probe-warning');
                    } else if (minTemp > 0 && item.lastTemperature < minTemp) {
                        tempCell.setAttribute('class', 'cold');
                    } else if (maxTemp > 0 && item.lastTemperature > maxTemp) {
                        tempCell.setAttribute('class', 'hot');
                    }

                    tempCell.appendChild(document.createTextNode(item.lastTemperature));

                    // Process Sent Notice
                    if (item.sentNotice === null || item.sentNotice === '0000-00-00 00:00:00') {
                        noticeCell.appendChild(document.createTextNode(''));
                    } else {
                        let noticeDate = new Date(item.sentNotice.replace(/-/g, '/'));
                        noticeCell.appendChild(document.createTextNode(noticeDate.toLocaleString()));
                    }

                    // Process activation button
                    let link = document.createElement('a');
                    link.setAttribute('href', '#');
                    link.setAttribute('data-key', item.id);

                    if (item.maintenance == 1) {
                        link.setAttribute('class', 'button');
                        link.setAttribute('title', 'Sensor Active');
                        link.setAttribute('data-mode', 'on');
                        link.appendChild(document.createTextNode('Active'));
                    } else {
                        link.setAttribute('class', 'button');
                        link.setAttribute('title', 'Sensor Deactivated');
                        link.setAttribute('data-mode', 'off');
                        link.appendChild(document.createTextNode('Deactivated'));
                    }

                    maintenanceModeCell.appendChild(link);

                    // Add cell nodes to current row
                    row.appendChild(nodeIdCell);
                    row.appendChild(sensorCell);
                    row.appendChild(updateCell);
                    row.appendChild(voltageCell);
                    row.appendChild(tempCell);
                    row.appendChild(noticeCell);
                    row.appendChild(maintenanceModeCell);

                    // Add row to tbody
                    tbody.append(row);
                }
            }
        },
        error : function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText, thrownError);
        }
    });

    // Changes the maintenance mode button on/off.
    // Normally would start an ajax request to switch the sensor maintenance on or off. The serverside script
    // then publishes the changes to the MQTT broker which then updates all subscribed clients.
    // Maintenance mode prevents the system from displaying warnings on workstation displays that
    // operators would have to respond to.
    $('#sensor-status').on('click', 'a.button', function(e) {
        e.preventDefault();

        let mode = $(this).attr('data-mode');

        if (mode === 'off') {
            $(this).attr('data-mode', 'on');
        } else {
            $(this).attr('data-mode', 'off');
        }
    });
});
