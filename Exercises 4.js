//join, split, slice, splice, dan sort

//contoh output
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

//result ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
function dataHandling2 (param){
    param.splice
    param.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    param.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(param);

    var intBulan = param[3].split("/");
    var intBulan2 = param[3].split("/");
    
    var strBulan = '';
    switch (parseInt(intBulan[1])) {
        case 1:
            strBulan = 'Januari';
            break;
        case 2:
            strBulan = 'Februari';
            break;
        case 3:
            strBulan = 'Maret';
            break;
        case 4:
            strBulan = 'April';
            break;
        case 5:
            strBulan = 'Mei';
            break;
        case 6:
            strBulan = 'Juni';
            break;
        case 7:
            strBulan = 'Juli';
            break;
        case 8:
            strBulan = 'Agustus';
            break;
        case 9:
            strBulan = 'September';
            break;
        case 10:
            strBulan = 'Oktober';
            break;
        case 11:
            strBulan = 'November';
            break;
        case 12:
            strBulan = 'Desember';
            break;
    }
    console.log(strBulan);
    console.log(intBulan.sort(function(a, b){return b-a}));
    console.log(intBulan2.join("-"));
    console.log(param[1].slice(0,15));
}

dataHandling2(input);