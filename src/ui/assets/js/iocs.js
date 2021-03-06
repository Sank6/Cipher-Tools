const ioc = require("./assets/js/tools/ioc.js");
$(document).ready(() => {
    let i = ioc(document.querySelector("#vigenere-body").value);

    let ctx = document.getElementById('iocs_small').getContext('2d');
    let chart_small = new Chart(ctx, {
        type: 'line',
        data: {
            labels: i.map(x => x.columnCount),
            datasets: [
                {
                    label: 'Ciphertext IOC',
                    data: i.map(x => x.columnIOC.toFixed(4)),
                    borderWidth: 2,
                    borderColor: "rgba(15, 255, 183, 0.8)"
                }
            ]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Column Length"
                    }
                }]
            }
        }
    });
    
    ctx = document.getElementById('iocs').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: i.map(x => x.columnCount),
            datasets: [
                {
                    label: 'Ciphertext IOC',
                    data: i.map(x => x.columnIOC.toFixed(4)),
                    borderWidth: 2,
                    borderColor: "rgba(15, 255, 183, 0.8)"
                },
                {
                    label: 'English Language IOC',
                    data: Array(i.length).fill(0.0667),
                    borderWidth: 2,
                    borderColor: "rgba(252, 182, 3, 0.8)"
                },
            ]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Column Length"
                    }
                }]
            }
        }
    });

    function update() {
        let i = ioc($("#vigenere-body").val());
        chart_small.data.datasets[0].data = i.map(x => x.columnIOC.toFixed(4))
        chart_small.update();
        
        chart.data.datasets[0].data = i.map(x => x.columnIOC.toFixed(4))
        chart.data.datasets[1].data = Array(i.length).fill(0.0667)
        chart.update();
    }
    $("#vigenere-body").on('change keyup paste', update)
    $("button").on('click', update)
})