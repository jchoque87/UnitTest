export class DegreeCalculator{

    constructor(currentValue, typeValue, convertType){
        this.currentValue = currentValue;
        this.typeValue    = typeValue;
        this.convertType  = convertType;
        this.answer       = "undefined";
        this.toConvert();
    }

    toConvert(){
        if(this.typeValue=='celsius'){
            switch(this.convertType)
            {
                case 'celsius':     this.answer = this.currentValue;   break;
                case 'fahrenheit':  this.answer = this.getCelsiusToFahrenheit(); break;
                case 'kelvin':      this.answer = this.getCelsiusToKelvin();     break;
                default: 
                    this.answer = "undefined Convert Type";
                break;
            }
        }else if(this.typeValue=='fahrenheit'){
            switch(this.convertType)
            {
                case 'celsius':     this.answer = this.getFahrenheitToCelsius();   break;
                case 'fahrenheit':  this.answer = this.currentValue;     break;
                case 'kelvin':      this.answer = this.getFahrenheitToKelvin();    break;
                default: 
                    this.answer = "undefined Convert Type";
                break;
            }
        }else if(this.typeValue=='kelvin'){
            switch(this.convertType)
            {
                case 'celsius':     this.answer = this.getKelvinToCelsius();        break;
                case 'fahrenheit':  this.answer = this.getKelvinToFahrenheit();     break;
                case 'kelvin':      this.answer = this.currentValue;      break;
                default: 
                    this.answer = "undefined Convert Type";
                break;
            }
        }else {
            this.answer = "undefined Type";
        }
    }

    getCelsiusToFahrenheit()
    {
        let answer = (parseFloat(this.currentValue)*1.8) + 32;
        return answer;
    }

    getFahrenheitToCelsius()
    {
        let answer = (parseFloat(this.currentValue) - 32)/ 1.8 ;
        return answer;
    }    

    getCelsiusToKelvin()
    {
        let answer = parseFloat(parseFloat(this.currentValue) + 273.15);
        return answer;
    }

    getKelvinToCelsius()
    {
        let answer = parseFloat(parseFloat(this.currentValue) - 273.15);
        return answer;
    }

    getFahrenheitToKelvin()
    {
        let answer = (5/9)*(parseFloat(this.currentValue) - 32) + 273.15;
        return answer;
    }
    
    getKelvinToFahrenheit()
    {
        let answer = 1.8*(parseFloat(this.currentValue) - 273.15) + 32;
        return answer;
    }

    getAnswer()
    {
        return this.answer;
    }

}