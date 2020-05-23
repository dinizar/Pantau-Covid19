
class DataChart {
    static DataAngka() {
        return fetch("https://indonesia-covid-19.mathdro.id/api")
            .then(response => response.json())
            .then(responseJson => {
                if(responseJson) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`Data tidak ada`)
                }
            })
    }
}

export default DataChart;