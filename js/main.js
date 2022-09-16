// Khai báo mảng
var mang = [];

document.getElementById('btnLuuSo').addEventListener('click', function () {
  var so = +document.getElementById('luuSo').value;
  // Thêm số vào mảng
  mang.push(so);
  // Làm trống ô nhập sau khi thêm số
  document.getElementById('luuSo').value = null;
  document.getElementById('inMang').innerHTML = mang.join(', ');
});

// Hàm đổi chỗ
function doiCho(a, b) {
  // Tạo biến tạm và gán giá trị của phần tử ở vị trí 1 vào biến tạm
  var bienTam = mang[a];
  // Gán giá trị của phần tử ở vị trí 2 vào vị trí 1
  mang[a] = mang[b];
  // Gán giá trị biến tạm vào vị trí 2
  mang[b] = bienTam;
}

/**
 * BÀI 1
 *
 */

document.getElementById('btnTinhTong').addEventListener('click', function () {
  var tong = 0;
  // Xét tất cả phần tử trong mảng và cộng phần tử vào tồng nếu phần tử > 0
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] > 0) {
      tong += mang[i];
    }
  }
  document.getElementById('ketQua1').innerHTML =
    'Tổng các số dương trong mảng: ' + tong;
});

/**
 * BÀI 2
 *
 */

document.getElementById('btnDemSoDuong').addEventListener('click', function () {
  var soDuong = 0;
  // Xét tất cả phần tử trong mảng và cộng 1 vào số dương nếu phần tử > 0
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] > 0) {
      soDuong++;
    }
  }
  document.getElementById('ketQua2').innerHTML =
    'Có ' + soDuong + ' số dương trong mảng';
});

/**
 * BÀI 3
 *
 */

document.getElementById('btnSoNhoNhat').addEventListener('click', function () {
  // Gán số nhỏ nhất là phần tử đầu tiên của mảng
  var soNhoNhat = mang[0];
  // Xét tất cả phần tử còn lại trong mảng, nếu phần tử nhỏ hơn số nhỏ nhất => gán số nhỏ nhất cho phần tử đó
  for (var i = 1; i < mang.length; i++) {
    if (mang[i] < soNhoNhat) {
      soNhoNhat = mang[i];
    }
  }
  document.getElementById('ketQua3').innerHTML =
    'Số nhỏ nhất trong mảng: ' + soNhoNhat;
});

/**
 * BÀI 4
 *
 */

document
  .getElementById('btnSoDuongNhoNhat')
  .addEventListener('click', function () {
    // Gán số dương nhỏ nhất là phần tử dương đầu tiên của mảng
    for (var i = 0; i < mang.length; i++) {
      if (mang[i] > 0) {
        var soDuongNhoNhat = mang[i];
        break;
      }
    }
    // Xét tất cả phần tử còn lại trong mảng, nếu phần tử dương nhỏ hơn số dương nhỏ nhất => gán số dương nhỏ nhất cho phần tử đó
    for (var i = mang.indexOf(soDuongNhoNhat); i < mang.length; i++) {
      if (mang[i] < soDuongNhoNhat && mang[i] > 0) {
        soDuongNhoNhat = mang[i];
      }
    }
    document.getElementById('ketQua4').innerHTML =
      'Số dương nhỏ nhất trong mảng: ' + soDuongNhoNhat;
  });

/**
 * BÀI 5
 *
 */

document
  .getElementById('btnSoChanCuoiCung')
  .addEventListener('click', function () {
    // Trả về -1 nếu mảng không có số chẵn nào
    var soChanCuoiCung = -1;
    // Xét tất cả phần tử trong mảng, nếu là số chẵn => gán số đó là số chẵn cuối
    for (var i = 0; i < mang.length; i++) {
      if (mang[i] % 2 === 0) {
        soChanCuoiCung = mang[i];
      }
    }
    document.getElementById('ketQua5').innerHTML =
      'Số chẵn cuối cùng trong mảng: ' + soChanCuoiCung;
  });

/**
 * BÀI 6
 *
 */

document.getElementById('btnDoiCho').addEventListener('click', function () {
  var viTri1 = document.getElementById('viTri1').value;
  var viTri2 = document.getElementById('viTri2').value;
  // Đổi chỗ dùng hàm đổi chỗ đã khai báo
  doiCho(viTri1, viTri2);
  document.getElementById('ketQua6').innerHTML =
    'Mảng sau khi đổi: ' + mang.join(', ');
});

/**
 * BÀI 7
 *
 */

document
  .getElementById('btnSapXepTangDan')
  .addEventListener('click', function () {
    // Xét tất cả các cặp số trong mảng và đổi chỗ nếu số thứ nhất lớn hơn số thứ hai
    for (let i = 0; i < mang.length - 1; i++) {
      for (let j = 0; j < mang.length; j++) {
        mang[j] > mang[j + 1] && doiCho(j, j + 1);
      }
    }
    document.getElementById('ketQua7').innerHTML =
      'Mảng sau khi sắp xếp tăng dần: ' + mang.join(', ');
  });

/**
 * BÀI 8
 *
 */

function checkSoNguyenTo(n) {
  // Số <= 1 không phải số nguyên tố
  if (n <= 1) {
    return false;
  }
  // 2 và 3 là số nguyên tố
  if (n <= 3) {
    return true;
  }
  // Chia số n cho các số từ 2 đến căn bậc 2 của n => nếu không chia hết thì n là số nguyên tố
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

document
  .getElementById('btnSoNguyenToDauTien')
  .addEventListener('click', function () {
    // Trả về -1 nếu mảng không có số nguyên tố nào
    var soNguyenToDauTien = -1;
    // Xét tất cả phần tử trong mảng, nếu là số nguyên tố => gán số đó là số nguyên tố đầu tiên và dừng vòng lặp
    for (var i = 0; i < mang.length; i++) {
      if (checkSoNguyenTo(mang[i])) {
        soNguyenToDauTien = mang[i];
        break;
      }
    }
    document.getElementById('ketQua8').innerHTML =
      'Số nguyên tố đầu tiên trong mảng: ' + soNguyenToDauTien;
  });

/**
 * BÀI 9
 *
 */

// Khai báo mảng số thực
var mang2 = [];

// Thêm số vào mảng số thực
document.getElementById('btnLuuSo2').addEventListener('click', function () {
  var so = +document.getElementById('luuSo2').value;
  mang2.push(so);
  document.getElementById('luuSo2').value = null;
  document.getElementById('inMang2').innerHTML = mang2.join(', ');
});

document
  .getElementById('btnDemSoNguyen')
  .addEventListener('click', function () {
    var soNguyen = 0;
    // Xét tất cả phần tử trong mảng và cộng 1 vào số nguyên nếu phần tử là số nguyên
    for (var i = 0; i < mang2.length; i++) {
      if (Number.isInteger(mang2[i])) {
        soNguyen++;
      }
    }
    document.getElementById('ketQua9').innerHTML =
      'Có ' + soNguyen + ' số nguyên trong mảng';
  });

/**
 * BÀI 10
 *
 */

document.getElementById('btnSoSanh').addEventListener('click', function () {
  var soDuong = 0;
  var soAm = 0;
  // Xét tất cả phần tử trong mảng và cộng 1 vào số dương nếu phần tử > 0, cộng 1 vào số âm nếu phần tử < 0
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] > 0) {
      soDuong++;
    }
    if (mang[i] < 0) {
      soAm++;
    }
  }
  // So sánh số lượng của 2 loại
  if (soDuong > soAm) {
    var ketQua = 'Số dương > Số âm';
  } else if (soDuong < soAm) {
    var ketQua = 'Số dương < Số âm';
  } else {
    var ketQua = 'Số dương = Số âm';
  }
  document.getElementById('ketQua10').innerHTML = ketQua;
});
