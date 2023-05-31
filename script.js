document.getElementById('calculator').addEventListener('input', function(e) {
    var goldPrice = document.getElementById('goldPrice').value;
    var exchangeRate = document.getElementById('exchangeRate').value;

    // 檢查兩個 input 是否都有值
    if (goldPrice !== "" && exchangeRate !== "") {
        var output1 = (goldPrice * 32.1507).toFixed(2);
        var output2 = (output1 * exchangeRate).toFixed(2);
        var output3 = (output2 / 266.66).toFixed(2);

        document.getElementById('output1').innerText =  numberWithCommas(output1);
        document.getElementById('output2').innerText = numberWithCommas(output2);
        document.getElementById('output3').innerText = numberWithCommas(output3);
    } else {
        // 其中一個或兩個 input 是空的，清空所有 output
        document.getElementById('output1').innerText = "";
        document.getElementById('output2').innerText = "";
        document.getElementById('output3').innerText = "";
    }
});

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
