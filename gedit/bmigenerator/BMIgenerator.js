const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const results = document.querySelector('#result')
    if (height === '' || height <= 0 || isNaN(height)){ //NaN is not a number 
      results.innerHTML = 'Please give a valid height';
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)){ //NaN is not a number 
        results.innerHTML = 'Please give a valid weight';
    }
    else {
       const bmi = (weight / ((height*height)/10000)).toFixed(2) //will give us value till 2 decimel
       let bmiCategory = '';
       if (bmi <= 18.6)
        {
          bmiCategory = 'Under Weight';

       }
       else if(bmi > 18.6 && bmi<=24.9){
        bmiCategory = 'Normal-Range';

       }
       else if(bmi > 24.9){
        bmiCategory = 'Over Weight';

       }
       results.innerHTML =`<span>BMI: ${bmi}</span><br><span>Category: ${bmiCategory}</span>`;
    }

})