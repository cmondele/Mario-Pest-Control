let goombaPrice = 0

document.getElementById('goombaBtn').addEventListener('click', function(){
    goombaPrice = document.getElementById('input1').value * 5
    document.getElementById('goombaTotal').textContent = goombaPrice
})

bobPrice = 0

document.getElementById('bobBtn').addEventListener('click', function(){
    bobPrice = document.getElementById('input2').value * 7
    document.getElementById('bobTotal').textContent = bobPrice
})

cheepPrice = 0

document.getElementById('cheepBtn').addEventListener('click', function(){
    cheepPrice = document.getElementById('input3').value * 11
    document.getElementById('cheepTotal').textContent = cheepPrice
})