import './componen/chart.js';
import './componen/tabel.js';
import DataChart from './data/data-chart.js';
import DataTabel from './data/data-tabel.js';
import chartdata from './view/chart-data.js';
import tabeldata from './view/tabel-data.js';


function main() {

    const ChartElement = document.querySelector("chart-elemen");
    const TabelElement = document.querySelector("tabel-elemen");
    //Chart
    const getChart = async () => {

            try{
               const result = await DataChart.DataAngka();
               renderChart(result);
               chartdata(result);
            } catch (message) {
              fallbackResultChart(message);
            }
    };

    const renderChart =  results => {
        ChartElement.chart = results;
    };

    
    
    //Tabel
    const getTabel = async () => {
        try{
            const result = await DataTabel.DataKota();
            tabeldata(result);
         } catch (message) {
           fallbackResultTabel(message);
         }
    };

    
    
    const fallbackResultChart = message => {
        ChartElement.renderError(message);
    };
    const fallbackResultTabel = message => {
        TabelElement.renderError(message);;
    };

    document.addEventListener("DOMContentLoaded", () => {
        getChart();
        getTabel();
    });
    
};
export default main;