function calcAVG(){
    //scope
   
    // tìm tới thẻ input có id là avg1
    // let, const
    // let khai báo 1 biến và có thể cập nhật giá trị
    // const khai báo 1 hằng số (ko update đc giá trị)

    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");

    const avg1Element = document.getElementById("avg1");
    const avg1 = Number(avg1Element.value);

    const avg2Element = document.getElementById("avg2");
    const avg2 = Number(avg2Element.value);

    const avg = (avg1+avg2 *2)/3;
    console.log(avg.toFixed(1));

    resultElement.style.display = "block";
    scoreElement.textContent = avg.toFixed(1);
    //gọi result tỉnh dậy


    //console.log(avg1)
    //console.log(typeof avg1); // typeof check kiểu dữ liệu 

}

// "10" -> 10
// Number("10") -> 10