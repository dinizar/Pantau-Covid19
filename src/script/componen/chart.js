class Chart extends HTMLElement {

    set chart(data) {
                      this._data = data;
                      this.render();
    }

    renderError(message) {
        this.innerHTML =`<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        let PMeninggal= (this._data.meninggal/this._data.jumlahKasus)*100;
        PMeninggal=PMeninggal.toFixed(2);
        let PSembuh= (this._data.sembuh/this._data.jumlahKasus)*100;
        PSembuh=PSembuh.toFixed(2);
        this.innerHTML = `<div class="content mt-3">
              <div class="animated fadeIn">
                <div class="col-md-6 col-lg-3">
                        <div class="card text-white bg-flat-color-1">
                            <div class="card-body pb-0">
                                <div class="float-right">
                                  <i class="fa fa-file-medical"></i>
                                </div>
                                <h4 class="mb-0">
                                  <span class="count">${this._data.jumlahKasus}</span>
                                </h4>
                                <p class="text-light" style="margin-bottom:0px;">Total Kasus</p>
    
                                <div class="chart-wrapper px-0" style="height:50px;margin-bottom:10px;" height="50" />
                                    <canvas id="widgetChart1"></canvas>
                                </div>
                            </div>
                        </div>
                </div>
    
                <div class="col-md-6 col-lg-3">
                        <div class="card text-white bg-flat-color-5">
                            <div class="card-body pb-0">
                                <div class="float-right">
                                   <i class="fa fa-shield-virus"></i>
                                </div>
                                <h4 class="mb-0">
                                    <span class="count">${this._data.sembuh}</span>
                                </h4>
                                <p class="text-light" style="margin-bottom:0px;">Total Sembuh</p>
    
                                <div class="chart-wrapper px-0" style="height:50px;margin-bottom:10px;" height="50"/>
                                    <canvas id="widgetChart2"></canvas>
                                </div>
                            </div>
                        </div>
                </div>
            
                <div class="col-md-6 col-lg-3">
                    <div class="card text-white bg-flat-color-4">
                        <div class="card-body pb-0">
                            <div class="float-right">
                                <i class="fa fa-book-dead"></i>
                            </div>
                            <h4 class="mb-0">
                                <span class="count">${this._data.meninggal}</span>
                            </h4>
                            <p class="text-light" style="margin-bottom:0px;">Total Meninggal</p>
    
                            <div class="chart-wrapper px-0" style="height:50px;margin-bottom:10px;" height="50" />
                                <canvas id="widgetChart3"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
      
                <div class="col-md-6 col-lg-3">
                    <div class="card text-white bg-flat-color-3">
                        <div class="card-body pb-0">
                            <div class="float-right">
                                <i class="fa fa-hand-holding-medical"></i>
                            </div>
                            <h4 class="mb-0">
                                <span class="count">${this._data.perawatan}</span>
                            </h4>
                            <p class="text-light" style="margin-bottom:0px;">Dalam Perawatan</p>

                            <div class="chart-wrapper px-0" style="height:50px;margin-bottom:10px;" height="50" />
                                <canvas id="widgetChart4"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
           
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="mb-3">Perbandingan Data</h5>
                            <div class="row" style="padding-left:20px;">
                               <h6 class="mb-3" style="color:#f86c6b;"><i class="fa fa-book-dead"></i> Meninggal ${PMeninggal} %</h6>
                               <h6 class="mb-3" style="padding-left:20px;color:#4dbd74;"><i class="fa fa-shield-virus"></i> Sembuh ${PSembuh} %</h6>
                            </div>
                            <canvas id="lineChart"></canvas>
                        </div>
                    </div>
                </div>
              </div>
        </div>`;
    }
}

customElements.define("chart-elemen", Chart);