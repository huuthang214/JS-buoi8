// Thêm số vào mảng

let myArray = [];
document.getElementById('showArray').innerHTML = myArray;
function addNumber(){
    numbers = +document.getElementById('addNumbers').value;
    myArray.push(numbers);
    document.getElementById('showArray').innerHTML = myArray;
}
// ========================Tính tổng số dương========================================

function tinhTong(){
    // let sum = 0;
    // for(i = 0; i < myArray.length; i++){
    //     if(myArray[i] < 0){
            
    //     }else{
    //         sum += myArray[i]
    //     }
        
    // }
    let positive = [];
    positive = myArray.filter(function(a){
        return a > 0;
    })
    sum = positive.reduce(function(a, b){
        return a + b;
    })
    
    console.log(positive);
    document.getElementById('showTinhTong').innerText = sum;
}

// =========================Đếm số dương =======================================
function countPositiveNumber(){
    let positive = [];
    positive = myArray.filter(function(a){
        return a > 0;
    })
    document.getElementById("showCount").innerHTML = positive.length;
}

// ==========================Tìm số nhỏ nhất trong mảng========================

function findMinNumber(){
    min = Math.min(...myArray);
    console.log(min);
    document.getElementById("showMin").innerHTML = min;

}

// ==========================Tìm số dương nhỏ nhất trong mảng========================

function findMinPositive(){
    let positive = [];
    positive = myArray.filter(function(a){
        return a > 0;
    });
    let min = Math.min(...positive);
    console.log(min);
    document.getElementById("showMinPositive").innerHTML = min;

}

// ==========================Tìm số chẵn cuối cùng trong mảng========================

function findLastEven(){
    let numberEven = 0;
    for(i = (myArray.length -1); i >= 0 ; i--){
        
        if(myArray[i] % 2 === 0){
            // console.log(myArray[i])
            document.getElementById('showLastEven').innerHTML = 'Số Chẳn Cuối Cùng trong mảng là ' + myArray[i];
            numberEven++
            break
        }
            
            if(numberEven === 0){
                document.getElementById('showLastEven').innerHTML = "-1";
            }
        
            
    }
  
}

// ==========================Đổi chỗ=========================================


// ==============================Sắp xếp tăng dần===============================
function sortUp(){
//    sortArray = myArray.sort(function(a, b) {return a - b});
//     document.getElementById('showSortUp').innerHTML = sortArray;


    myArray.sort(
        function(a, b) {
            return a - b;
        }
    );
    console.log(myArray)
    var ascending = ' ';
    for (var i = 0; i < myArray.length; i++) {
        ascending =  ascending + ' ' + myArray[i];
        document.getElementById('showSortUp').innerHTML = '[' + ascending + ' ]';
    }
}

// ==================================Tìm số nguyên tố đầu tiên trong mảng============
function findFirstPrime(){
    let prime = 0;
    for(i = 0; i < myArray.length; i++){
        if((myArray[i] % myArray[i] === 0) && (myArray[i] % 1 === 0)){
            document.getElementById('showPrime').innerHTML = myArray[i];
            
            break
        }
        if(prime===0){
            document.getElementById('showPrime').innerHTML = "-1";
        }
    }

}




















