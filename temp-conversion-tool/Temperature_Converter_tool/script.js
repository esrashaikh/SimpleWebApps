document.addEventListener('DOMContentLoaded', function () {
    const convertBtn = document.getElementById('convertBtn');
    const resultArea = document.getElementById('resultArea');
  
    convertBtn.addEventListener('click', function () {
      const temperatureInput = document.getElementById('temperatureInput').value;
      const fromUnit = document.getElementById('fromUnit').value;
      const toUnit = document.getElementById('toUnit').value;
  
      if (!temperatureInput || isNaN(temperatureInput)) {
        resultArea.innerHTML = 'Please enter a valid temperature.';
        return;
      }
  
      const convertedTemperature = convertTemperature(parseFloat(temperatureInput), fromUnit, toUnit);
      resultArea.innerHTML = `${temperatureInput} ${fromUnit} = ${convertedTemperature.toFixed(2)} ${toUnit}`;
    });
  
    function convertTemperature(value, fromUnit, toUnit) {
      if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        return (value * 9 / 5) + 32;
      } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        return (value - 32) * 5 / 9;
      } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        return value + 273.15;
      } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        return value - 273.15;
      } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        return (value - 32) * 5 / 9 + 273.15;
      } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        return (value - 273.15) * 9 / 5 + 32;
      } else {
        return value; 
      }
    }
  });
  