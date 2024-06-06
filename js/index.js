import {updateIndex } from "./method.js"; 
let arrNumBer = [11,17,19,25,'Nam',17,35,31,37,'Minh'];

document.getElementById('capNhat').onclick = function(){
    //input: giá trị người dùng nhập vào 
    let giaTriGoc = document.getElementById('giaTriGoc').value;
    let giaTriMoi = document.getElementById('giaTriMoi').value;
    //output: arrNumber
    //process: Xử lý cập nhật
    let ketQua = updateIndex(giaTriGoc,arrNumBer,giaTriMoi);
    document.getElementById('update-info').innerHTML=arrNumBer;
    
    if(ketQua){
        document.getElementById('arrNumBer').innerHTML=`[${arrNumBer}]`;
        document.getElementById('update-info').innerHTML='Cập nhật thành công'
    }
    else{
        document.getElementById('update-info').innerHTML=`Không tìm thấy giá trị ${giaTriGoc} trong mảng`
    }
}