export function updateIndex(updateValue,arr,newValue) {//input
    //process
    let ketQua = false;
    for(let index = 0;index < arr.length; index++){
        if(arr[index] == updateValue){
            arr[index] = newValue;
            ketQua = true;
        }
    }
    //output
    return ketQua;
}