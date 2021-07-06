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

test("Given a number 2.2222222222222223 in celsius degree the getCelsiusToFahrenheit function it should be return a number 36 in fahrenheit value degree", ()=>{
    const degreeCalculatorObj = new DegreeCalculator(2.2222222222222223, 'celsius', 'fahrenheit');
    expect(degreeCalculatorObj.getCelsiusToFahrenheit()).toBe(36);
}); 


test("Given a number 0 in kelvin degree the getKelvinToCelsius function it should be return a number -273.15 in celsius value degree", ()=>{
    const degreeCalculatorObj = new DegreeCalculator(0, 'kelvin', 'celsius');
    expect(degreeCalculatorObj.getKelvinToCelsius()).toBe(-273.15);
}); 

test("Given a number -273.15 in celsius degree the getCelsiusToKelvin function it should be return a number 0 in celsius value degree", ()=>{
    const degreeCalculatorObj = new DegreeCalculator(-273.15, 'celsius', 'kelvin');
    expect(degreeCalculatorObj.getCelsiusToKelvin()).toBe(0);
}); 


test("Given a number 100 in celsius degree the getCelsiusToKelvin function it should be return a number 373.15 in kelvin value degree", ()=>{
    const degreeCalculatorObj = new DegreeCalculator(100, 'celsius', 'kevin');
    expect(degreeCalculatorObj.getCelsiusToKelvin()).toBe(373.15);
}); 

test("Given a number 212 in fahrenheit degree the getFahrenheitToKelvin function it should be return a number 373.15 in kelvin value degree", ()=>{
    const degreeCalculatorObj = new DegreeCalculator(212, 'fahrenheit', 'kevin');
    expect(degreeCalculatorObj.getFahrenheitToKelvin()).toBe(373.15);
}); 

test("Given a number 375.15 in kelvin degree the getKelvinToFahrenheit function it should be return a number 212 in fahrenheit value degree", ()=>{
    const degreeCalculatorObj = new DegreeCalculator(373.15, 'fahrenheit', 'kevin');
    expect(degreeCalculatorObj.getKelvinToFahrenheit()).toBe(212);
}); 

test("Give a Mock for moveTo function it should called", ()=>{
    const cvs = {
        width: 640,
        height: 480,
        getContext: jest.fn()
    }
    const ctx = {
        moveTo : jest.fn(),
        lineTo : jest.fn(),
        stroke : jest.fn()
    }

    const degreeCalculatorObj = new DegreeCalculator(373.15, 'fahrenheit', 'kevin');
    degreeCalculatorObj.drawGraphics(ctx);
    expect(ctx.moveTo).toHaveBeenCalledWith(0, 0);
}); 

test("Give a Mock for stroke function it should called", ()=>{
    const cvs = {
        width: 640,
        height: 480,
        getContext: jest.fn()
    }
    const ctx = {
        moveTo : jest.fn(),
        lineTo : jest.fn(),
        stroke : jest.fn()
    }

    const degreeCalculatorObj = new DegreeCalculator(373.15, 'fahrenheit', 'kevin');
    degreeCalculatorObj.drawGraphics(ctx);
    expect(ctx.stroke).toHaveBeenCalled();
}); 






