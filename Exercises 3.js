var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

function dataHandling(param){
    var hasil = '';

    for (var i =0; i< param.length; i++) {
        hasil += 'Nomor ID: ' + param[i][0] + '\n';
        hasil += 'Nama Lengkap: ' + param[i][1] + '\n';
        hasil += 'TTL: ' + param[i][2] + ', ' + param[i][3] + '\n';
        hasil += 'Hobi: ' + param[i][4] + '\n';

        hasil += '\n';
    }
    return hasil;
}

console.log(dataHandling(input));