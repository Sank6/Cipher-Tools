$(document).ready(() => {
    const ioc = require("../../tools/ioc.js");
    let i = ioc(localStorage.getItem('ciphertext'));

    let ctx = document.getElementById('iocs').getContext('2d');
    new Chart(ctx, {
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
            title: {
                display: true,
                text: "Index of Coincidences",
                fontSize: 30
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
})