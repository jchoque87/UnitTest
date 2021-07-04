import { DegreeCalculator } from '../src/js/DegreeCalculator';

/*
celsius
fahrenheit
kelvin
*/

test("Given a number 36 in fahrenheit degree the getFahrenheitToCelsius function it should be return a number 2.2222222222222223 in celsius value degree", ()=>{
    const degreeCalculatorObj = new DegreeCalculator(36, 'fahrenheit', 'celsius');
    expect(degreeCalculatorObj.getFahrenheitToCelsius()).toBe(2.2222222222222223);
}); 

test("Given a number 0 in kelvin degree the getKelvinToCelsius function it should be return a number -273.15 in celsius value degree", ()=>{
    const degreeCalculatorObj = new DegreeCalculator(0, 'kelvin', 'celsius');
    expect(degreeCalculatorObj.getKelvinToCelsius()).toBe(-273.15);
}); 

test("Given a number 100 in celsius degree the getCelsiusToKelvin function it should be return a number 373.15 in kelvin value degree", ()=>{
    const degreeCalculatorObj = new DegreeCalculator(100, 'celsius', 'kevin');
    expect(degreeCalculatorObj.getCelsiusToKelvin()).toBe(373.15);
}); 

