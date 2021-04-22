var ctx = document.getElementById('myChart').getContext("2d");

var gradient = ctx.createLinearGradient(100, 120, 80, 300)
gradient.addColorStop(0, "#FFF")
gradient.addColorStop(1, 'rgba(229, 239, 255, 1)');
const data = {
    labels: ["A", "B", "C", "D", "E", "F", "G", "H","J","K","L","M","n"],
    datasets: [{
        label: 'BTC',
        data: [250,350,350,450,425,652, 620, 4500, 254, 3220, 1540, 2500, 2000],
        fill: false,
        borderColor: '#42BCDA',
        tension: 0.2,
        
        borderWidth: 4
    },

    {
        label: 'ETH',
        data: [152, 1050, 2100, 1220, 352, 3000, 2500, 2000],
        fill: false,
        borderColor: '#E835EB',
        tension: 0.5,
        pointHighlightStroke: "rgba(225,225,225,0.9)",
        borderWidth: 4
    }
    ],
};


var myChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      
        legend: {
            display: true,
            position: 'top',
            labels: {
                boxWidth: 20,
                fontColor: 'black'
            }
        },

    },

});