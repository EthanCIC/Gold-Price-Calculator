document.getElementById('calculator').addEventListener('input', function(e) {
    var goldPrice = document.getElementById('goldPrice').value;
    var exchangeRate = document.getElementById('exchangeRate').value;

    var output1 = goldPrice * 32.1507;
    var output2 = output1 * exchangeRate;
    var output3 = output2 / 266.66;

    document.getElementById('output1').innerText = '一公斤價格：' + output1.toFixed(2) + ' (USD/kg)';
    document.getElementById('output2').innerText = '一公斤價格：' + output2.toFixed(2) + ' (TWD/kg)';
    document.getElementById('output3').innerText = '一台斤價格：' + output3.toFixed(2) + ' (TWD/台斤)';
});
