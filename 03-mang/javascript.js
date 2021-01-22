function listNumber(n) {
    let listNumber = [];
    for (let index = 0; index <= n; index++) {
        listNumber.push(index);
    }
    console.log(listNumber);
    return listNumber;
}
function listFavorite() {
    let listFavorite = ["Bóng đá", "Bóng chuyền", "Cầu lông", "Cờ vua", "Bóng bàn"];
    return listFavorite;
}
function getLessThan(n) {
    let list = [];
    for (let index = 0; index < n; index++) {
        if (index < n) {
            list.push(index);
        }
    }
    return list;
}
function getOddLessThan(n) {
    let list = [];
    for (let index = 0; index < n; index++) {
        if (index < n && index % 2 == 1) {
            list.push(index);
        }
    }
    return list;
}
function findFirst(arr, chuoiCanTim) {
    return (arr.indexOf(chuoiCanTim))+1;
}
function findLast(arr, chuoiCanTim) {
    let array = arr;
    return array.lastIndexOf(chuoiCanTim) + 1;
}