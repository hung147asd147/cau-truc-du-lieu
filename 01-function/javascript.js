function tong(a, b) {
    return a + b;
}
function hieu(a, b) {
    return a - b;
}
function tich(a, b) {
    return a * b;
}
function thuong(a, b) {
    if (b != 0) {
        return a / b;
    } else {
        return "Khong chia dc";
    }
}
function powOfNumber(a) {
    return a ** 2;
}
function max(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Hai so nay bang nhau";
    }
}
function min(a, b) {
    if (a < b) {
        return a;
    } else if (b < a) {
        return b;
    } else {
        return "Hai so nay bang nhau";
    }
}
function avgNumber(a, b) {
    return (a + b) / 2;
}
function modNumber(a, b) {
    return a % b;
}
function checkModNumber(a, b) {
    if (a % b == 0) {
        return a + " chia hết cho " + b;
    } else {
        return a + " không chia hết cho " + b;
    }
}
function cvHinhChuNhat(a, b) {
    return (a + b) * 2;
}
function dtHinhChuNhat(a, b) {
    return a * b;
}
function cvHinhTron(a) {
    return 2 * a * 3.14;
}
function dtHinhTron(a) {
    return (a ** 2) * 3.14;
}
function addString(s1, s2, s3, s4, s5) {
    let s = "";
    return s = s1 + s2 + s3 + s4 + s5;
}
function upperString(s1, s2, s3, s4, s5) {
    let s = "";
    s = s1 + s2 + s3 + s4 + s5;
    return s.toUpperCase();
}
function checkExistString(s1, s2) {
    let firstIndex = 0;
    let check = false;
    if (s1.length < s2.length) {
        let swap = new Array();
        swap = s1;
        s1 = s2;
        s2 = swap;
    }
    for (let i = 0; i < s1.length; i++) {
        if (s2[firstIndex] == s1[i]) {
            var existIndex = i;
            check = true;
            break;
        }
    }
    if (check != false && s2.length > 1) {
        while (firstIndex < s2.length - 1 && existIndex < s1.length - 1) {
            firstIndex++;
            existIndex++;
            if (s2[firstIndex] != s1[existIndex]) {
                check = false;
                break;
            }
        }
    }
    return check;
}
function stringLength(s1, s2, s3, s4, s5) {
    let s = "";
    s = s1 + s2 + s3 + s4 + s5;
    return s.length;
}
function changeString(s1, s2, s3, s4, s5) {
    let s = "";
    s = s1 + s2 + s3 + s4 + s5;
    return s.substring(1, 3);
}
function checkString(s1, s2) {
    if (s1.includes(s2) == true) {
        return "s1 tồn tại trong s2";
    } else {
        return "s1 không tồn tại trong s2";
    }
}
