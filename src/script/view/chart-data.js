import Chart from 'chart.js';


function chartdata (data) {

    let ctx1 = document.getElementById( "widgetChart1" );
    ctx1.height = 95;
    let myChart1 = new Chart( ctx1, {
        type: 'line',
        data: {
            labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei-sekarang'],
            type: 'line',
            datasets: [ {
                data: [0, 0,1528 ,10118 , data.jumlahKasus],
                label: 'Dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }, ]
        },
        options: {

            maintainAspectRatio: true,
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    } );

    let ctx2 = document.getElementById( "widgetChart2" );
    ctx2.height = 95;
    let myChart2 = new Chart( ctx2, {
        type: 'line',
        data: {
            labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei-sekarang'],
            type: 'line',
            datasets: [ {
                data: [0, 0,81 ,1522, data.sembuh],
                label: 'Dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }, ]
        },
        options: {

            maintainAspectRatio: true,
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    } );

    let ctx3 = document.getElementById( "widgetChart3" );
    ctx3.height = 95;
    let myChart3 = new Chart( ctx3, {
        type: 'line',
        data: {
            labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei-sekarang'],
            type: 'line',
            datasets: [ {
                data: [0, 0, 136, 792, data.meninggal],
                label: 'Dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }, ]
        },
        options: {

            maintainAspectRatio: true,
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    } );

    let ctx4 = document.getElementById( "widgetChart4" );
    ctx4.height = 95;
    let myChart4 = new Chart( ctx4, {
        type: 'line',
        data: {
            labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei-sekarang'],
            type: 'line',
            datasets: [ {
                data: [0, 0, 1311, 7804, data.perawatan],
                label: 'Dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }, ]
        },
        options: {

            maintainAspectRatio: true,
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    } );


    let ctx5 = document.getElementById( "lineChart" );
    ctx5.height = 120;
    let myChart5= new Chart( ctx5, {
        type: 'line',
        data: {
            labels: [ "Januari", "Februari", "Maret", "April", "Mei-sekarang" ],
            datasets: [
                           {
                               label: "Meninggal ",
                               borderColor: "#f86c6b",
                               borderWidth: "1",
                               backgroundColor: "rgba(255,0,0,0.5)",
                               data: [ 0, 0, 136, 792, data.meninggal]
                            },
                            {
                                label: "Sembuh ",
                                borderColor: "#4dbd74",
                                borderWidth: "1",
                                backgroundColor: "rgba(0, 255, 0, 0.4)",
                                data: [0, 0,81 ,1522, data.sembuh]
                            },
                            {
                                label: "Perawatan ",
                                borderColor: "#ffc107",
                                borderWidth: "1",
                                backgroundColor: "rgba(255, 255, 0, 0.6)",
                                data: [0, 0, 1311, 7804, data.perawatan]
                            },
                            {
                                label: "Kasus ",
                                borderColor: "rgba(0, 123, 255, 0.9)",
                                borderWidth: "1",
                                backgroundColor: "rgba(0, 123, 255, 0.5)",
                                pointHighlightStroke: "rgba(26,179,148,1)",
                                data: [ 0, 0,1528 ,10118 , data.jumlahKasus ]
                            }
                
                        ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }

        }
    });
};

export default chartdata;