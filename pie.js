var ctx = document.getElementById("myChart");
Chart.defaults.global.animation.duration =3000;
var data = {

    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: [
            "#96ceb4",
            "#ffeead",
            "#ff6f69",
            "#ffcc5c",
            "#88d8b0"
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        "C#",
        "JavaScript",
        "PHP",
        "HTML5",
        "MySQL"
    ]
};
var myLineChart = new Chart(ctx, {
    type: 'doughnut',
    data,
    options: {
        cutoutPercentage:20,
        animation: {
            animateScale:true
        }
    }
});
