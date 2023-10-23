const { invoke } = window.__TAURI__.tauri;
function init(){
    const regex = /^(\d+d\d+)(\+\d+)?$/;
    console.log(regex.test('1d20+5'));
    console.log(regex.test('9d20'));
    console.log(regex.test('11d20+5'));
    console.log(regex.test('1d20+50'));
    console.log(regex.test('d20'));
    const rollButton = document.getElementById('DiceInputButton');
    const rollInput = document.getElementById('DiceInputText');
    rollInput.addEventListener('input', () => {
        if (regex.test(rollInput.value)){
            rollButton.classList.remove('rollhide');
        }else{
            rollButton.classList.add('rollhide');
        }
    });
    rollButton.addEventListener('click', () => {
        invoke('roll_dice', { dice: rollInput.value }).then((result) => {
            const rollResult = document.getElementById('DiceResult');
            const rollStats = document.getElementById('DiceTotal');
            rollStats.innerHTML = result.split("<>")[0];
            rollResult.innerHTML = result.split("<>")[1];
        });
    });
}
document.addEventListener('DOMContentLoaded', init);
