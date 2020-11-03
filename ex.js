//ex1
function checkN() {
    let result = prompt('nhap so N')
    for (let i = 0; i < result.length; i ++){
        if (i%2 === 1){
            checkN()
            return "so ban vua nhap la: " +result
        }
    }
}
//ex2
function checkPrimeNumber(){
    let number = +document.getElementById("ex2").value;
    if(isPrime(number)){
        alert("Đây là số nguyên tố");
    } else {
        alert("Đây không phải số nguyên tố")
    }
}
function isPrime(number){
    if (number < 2){
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(number) ; i++) {
            if(number % i === 0){
                return false;
            }
        }
    }
    return true;
}
//ex3
function displayPrimeNumber() {
    let numberCount = +prompt("Nhập số lượng số nguyên tố cần in ra:");
    let count = 0;
    let integer = 0;
    while(count < numberCount){
        if (isPrime(integer)){
            document.write(integer + " ; ");
            count ++;
        }
        integer++;
    }
}

function isPrime(num) {
    for(let i = 2; i < parseInt(Math.sqrt(num)); i++)
        if(num % i === 0) return false;
    return num > 1;
}
//ex4
let arr = [];
function addArray(){
    let value = +document.getElementById("ex4").value;
    arr.push(value);
    document.getElementById("ex4").value = "";
    console.log(arr);
}
function resetArray() {
    arr = [];
    console.log(arr);
}
// ex5
function printArray(){
    document.write(arr);
}
//ex6
function printPrimeList() {
    arr.forEach(item => {
        if (isPrime(item)) {
            document.write(item + ", ");
        }
    })
}
// ex7
function isInArray() {
    let N = document.getElementById("ex7").value;
    if(arr.indexOf(N) === -1){
        alert(N + " not năm in arr");
    } else {
        alert(N + " nằm tron arr có index là " + arr.indexOf(N));
    }
}
// ex8
function deleteItemOfArray() {
    let value = document.getElementById("ex8").value;
    if(arr.indexOf(value) === -1){
        alert(value + " not năm in arr");
    } else {
        alert("Đã xóa " +value+" out arr");
        arr.splice(arr.indexOf(value),1);
    }
    console.log(arr);
}
// ex9
function sortArray() {
    let temp = 0;
    if(arr.length === 0) {
        return;
    }
    else{
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if(arr[j] > arr[j+1]){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
    console.log(arr);
}
// ex10
function addAndSort() {
    let number = +document.getElementById("ex10").value;
    arr.push(number);
    sortArray();
    document.getElementById("ex10").value = "";
}