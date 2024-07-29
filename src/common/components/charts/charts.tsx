import React from "react";
import ReactApexChart from "react-apexcharts";
import useChartColors from "./useChartColors";

const OrderStatisticsChart = ({ chartId }: any) => {

    const chartColors = useChartColors(chartId);

    //Order Statistics
    const series = [{
        name: 'Pending',
        data: []
    }, {
        name: 'New Orders',
        data: []
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
        data: []
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
