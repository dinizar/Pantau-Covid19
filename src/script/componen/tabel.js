class Tabel extends HTMLElement {

    connectedCallback(){
        this.render();
    }
   
    renderError(message) {
        this.innerHTML =`<h2 class="placeholder">${message}</h2>`;
    }


    render() {
        this.innerHTML = `<div class="content mt-3">
                            <div class="animated fadeIn">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <strong class="card-title">Data Covid-19 PerProvinsi</strong>
                                        </div>
                                        <div class="card-body">
                                            <table id="bootstrap-data-table-export" class="table table-striped table-bordered" style="width:100%;">
                                            <thead>
                                                <tr>
                                                    <th>fid</th>
                                                    <th>kode Prov</th>
                                                    <th>Provinsi</th>
                                                    <th>Total Positif</th>
                                                    <th>Total Sembuh</th>
                                                    <th>Total Meninggal</th>
                                                </tr>
                                            </thead>
                                            
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>`;
            
    }
}
    
customElements.define("tabel-elemen", Tabel);