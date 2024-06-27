import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "./useChartColors";

const OrderStatisticsChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    //Order Statistics
    const series = [{
        name: 'Pending',
        data: [17, 16, 19, 22, 24, 29, 25, 20, 25, 31, 28, 35,]
    }, {
        name: 'New Orders',
        data: [30, 24, 32, 27, 16, 22, 32, 21, 24, 20, 38, 28]
    }];
    var options: any = {
        chart: {
            type: 'line',
            height: 310,
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: chartColors,
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true,
            padding: {
                top: -20,
                right: 0,
            }
        },
        markers: {
            hover: {
                sizeOffset: 4
            }
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-purple-500", "bg-sky-500"]'
                id={chartId}
                className="apex-charts"
                type='line'
                height={310}
            />
        </React.Fragment>
    );
};

const OrdersOverviewChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);
    //  Total Employee
    const series = [{
        name: 'Orders',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 3.4, 5.5, 8.8]
    }];

    var options: any = {
        chart: {
            height: 238,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val: any) {
                return val + "%";
            },
            style: {
                fontSize: '12px',
            }
        },
        grid: {
            padding: {
                bottom: -10,
            }
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'top',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            tooltip: {
                enabled: true,
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val: any) {
                    return val + "%";
                }
            }

        },
        colors: chartColors,
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                data-chart-colors='["bg-custom-500"]'
                id={chartId}
                className="apex-charts"
                type='bar'
                height={238}
            />
        </React.Fragment>
    );
};

export { OrdersOverviewChart, OrderStatisticsChart };
