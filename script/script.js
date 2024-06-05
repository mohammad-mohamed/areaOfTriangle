

calculate_button = document.getElementById('calculate_button');
calculate_button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicked');
    area_of_triangle();
})
console.log('click addEventListener');


function area_of_triangle()  {
    base = document.getElementById('base').value
    console.log('base: ' + base);
    height = document.getElementById('height').value
    console.log('height: ' + height);    
    area = (base / 2) * height;
    document.getElementById('result').innerText = 'Area of triangle ' + area + ' cm2'
}
    
    
