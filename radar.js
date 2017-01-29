var ctx = document.getElementById("myChart");
Chart.defaults.global.animation.duration =6000;
Chart.defaults.scale.ticks.beginAtZero = true;
var myLineChart = new Chart(ctx, {
    type: 'radar',
    data:  {
        labels: ['Strength','Skill','Health','Speed','Luck'],
        datasets:[
        {
            label: 'Points',
            borderColor: '#00ff7f',
            backgroundColor: 'rgba(00,255,00,0.1)',
            borderWidth: 2,
            data: [10,20,55,30,10]
        },
        {
            label: 'Points',
            borderColor: '#00ffff',
            backgroundColor: 'rgba(0,255,00,0.1)',
            borderWidth: 2,
            data: [5,100,20,70,80]
        },
        {
            label: 'Points',
            borderColor: '#f1c40f',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderWidth: 2,
            data: [55,200,30,40,50]
        }
    ]
    }
});
