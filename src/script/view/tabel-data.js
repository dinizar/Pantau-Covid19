import 'datatables.net/js/jquery.dataTables.min.js';
import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-buttons-bs4';


function tabeldata (dataProv) {

    let tabel = $('#bootstrap-data-table-export').DataTable({
        lengthMenu: [[8, 20, -1], [8, 20, "All"]],
        buttons: ['copy', 'csv', 'excel', 'pdf'],
        "responsive": true,
		"paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "data": [],
        "columns": [{
            "title": "fid",
            "data": "fid"
        }, {
            "title": "kode Prov",
            "data": "kodeProvi"
        }, {
            "title": "Provinsi",
            "data": "provinsi"
        }, {
            "title": "Total Positif",
            "data": "kasusPosi"
        }, {
            "title": "Total Sembuh",
            "data": "kasusSemb"
        }, {
            "title": "Total Meninggal",
            "data": "kasusMeni"
        }]
	});
	
	tabel.clear();
    $.each(dataProv, function(index, value) {
        tabel.row.add(value);
    });
    tabel.draw();
	
};
export default tabeldata;