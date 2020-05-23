class DataTabel {
    static DataKota() {
        return fetch("https://indonesia-covid-19.mathdro.id/api/provinsi")
            .then(response => response.json())
            .then(responseJson => {
                if(responseJson.data) {
                    return Promise.resolve(responseJson.data);
                } else {
                    return Promise.reject("Gagal memuat Data Kota")
                }
            })
    }

}

export default DataTabel;