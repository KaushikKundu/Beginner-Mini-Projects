const btn = document.getElementById("btn");
const sum = document.getElementById("sum")  

btn.addEventListener("onClick", () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;    
    fetch('/sum?num1='+num1+'&num2='+num2)
    .then(res => res.json())
    .then(data => {
        sum.innerText = "sum = "+ data.sum;
       
    })
})