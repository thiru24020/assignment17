
function Numbers() {
    const n = document.getElementById('numberInput').value;
    // const resultElement = document.getElementById('answer1');
    // const resultElement1 = document.getElementById('answer2');

    const result = document.getElementById('factor');
    const number = parseInt(n);
    // n=parseInt(prompt("Enter the number")) 9600277401
    let output = '';
    for(let i=1;i<=number;i++){
        // resultElement.textContent = `Factorial of ${number} is ${i}.`;
        output += i + '\n'
    }
    document.getElementById('answer1').textContent = output;

var total = 0;
for(var j = 1; j <= n; j++){
    total =total + j;
    }
    document.getElementById('answer2').textContent = total;
let output1='';
    for(var k=1;k<=n;k++){
        if(k%2===1){
        output1+=k + "\n"
        }
    }document.getElementById('answer3').textContent = output1;
}
