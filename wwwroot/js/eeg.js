function drawEegChart(signal) {
    const container = document.getElementById('charts-container');
    container.innerHTML = '';

    for (let i = 0; i < signal[0].length; i++) {
        console.log(signal[0].length);
        const canvas = document.createElement('canvas');
        canvas.id = `chart-${i}`;
        container.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: signal.map((_, index) => index),
                datasets: [
                    {
                        label: `Канал ${i + 1}`,
                        data: signal.map(row => row[i]),
                        fill: false,
                        borderColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0)`,
                        tension: 0.1,
                        pointRadius: 0
                    }
                ]
            },
            options: {
                responsive: false,
                scales: {
                    x: {
                        display: true,
                        ticks: {
                            maxTicksLimit: 5
                        }
                    },
                    y: {
                        display: true,
                        ticks: {
                            maxTicksLimit: 15
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        enabled: false,
                        intersect: false
                    }
                }
            }
        });
    }
}