function largerNumber() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = document.getElementById('result');
    
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = 'Please enter valid numbers.';
        result.style.color = 'red';
    } else {
        const largerNumber = num1 > num2 ? num1 : num2;
        result.innerHTML = `The larger number is: ${largerNumber}`;
        result.style.color = 'green';
    }
}

function resetFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = '';
}