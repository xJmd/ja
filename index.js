let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
 
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
                //me to break den grafi pleon "C" otan kanis clear.
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1)
                    
                }
                break;
                //to slice aferi ena psifio (karacter)
            case '=':
                try{
                    display.innerText = eval(display.innerText); 
                }   catch{
                    display.innerText = 'Error!';
                }
                break;
        
        
            default:
                display.innerText += e.target.innerText;
                //to display ine to onoma to field gia numera (html)
            
            
        }
    })
})