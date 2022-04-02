const CalculateTemp = () => {
    event.preventDefault()
    const tempNum = document.getElementById('temp').value;


    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
 
    const celtoFah = (cel) => {
       let fahrenheit =  Math.round((cel*9/5) +32)
       return fahrenheit;
    }
    const fahToCel = (fah) => {
       let celsius =  Math.round((fah - 32)* 5/9)
       return celsius;
    }

    let result;

    if (valueTemp == 'cel') {
        result = celtoFah(tempNum);
        document.getElementById('resultcontainer').innerHTML = `= ${result}°Fahrenheit`

    } else {
        result = fahToCel(tempNum);
        document.getElementById('resultcontainer').innerHTML = `= ${result}°Celsius`

    }

}
