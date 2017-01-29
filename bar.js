var ctx = document.getElementById("myChart");
Chart.defaults.global.animation.duration =6000;
Chart.defaults.scale.ticks.beginAtZero = true;
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data:  {
        labels: ['Jan','Feb','Mar','Apr'],
        datasets:[
        {
            label: 'A Per Month',
            borderColor: '#00ff7f',
            backgroundColor: 'rgba(00,255,00,0.1)',
            borderWidth: 2,
            data: [10,20,55,75]
        },
        {
            label: 'B Per Month',
            borderColor: '#00ffff',
            backgroundColor: 'rgba(0,255,00,0.1)',
            borderWidth: 2,
            data: [15,26,40,35]
        },
    ]
    }
});
