function showMessage(message, n) {
    let strings  = "";
    for (let i = 0; i < n; i++) {
        strings += `<p>${message}</p>`;
    }
    return strings;
}
function tong1ToiN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function tongAToiB(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
            sum += i;        
    }
    return sum;
}
function tongLeAToiB(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
            if(i % 2 != 0){
                sum += i;
            }        
    }
    return sum;
}
function listOdds(num) {
    let list = new Array();
    let i = 1;
    while (list.length < num) {
        if (i % 2 != 0) {
            list.push(i);
        }
        i++;
    }
    return list;
}
function danhSachSoLe(from, num) {
    let list = new Array();
    let i = from;
    while (list.length < num) {
        if (i % 2 != 0) {
            list.push(i);
        }
        i++;
    }
    return list;
}
function checkSNT(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
function listSNT(n) {
    var danhSachSNT = new Array();
    var dem = 0;
    var soHienTai = 2;

    while (danhSachSNT.length < n) {
        if (checkSNT(soHienTai) == true) {
            danhSachSNT[dem] = soHienTai;
            dem++;
        }
        soHienTai++;
    }
    return danhSachSNT;
}
function listSNTFrom(from, n) {
    var danhSachSNT = new Array();
    var dem = 0;
    var soHienTai = from;

    while (danhSachSNT.length < n) {
        if (checkSNT(soHienTai) == true) {
            danhSachSNT[dem] = soHienTai;
            dem++;
        }
        soHienTai++;
    }
    return danhSachSNT;
}