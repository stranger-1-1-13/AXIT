// Car-1

document.getElementById('TAB-1').addEventListener('click', function () {
    
    const hide1 = document.getElementById('hide-1');
    hide1.classList.remove("d-none");

    const hide2 = document.getElementById('hide-2');
    hide2.classList.add('d-none');    

    const hide3 = document.getElementById('hide-3');
    hide3.classList.add('d-none');  
    

      
    
    // Hover color 


    

    const tab1 = document.getElementById('TAB-1');
    tab1.classList.add('t-color');

    const hoverColor = document.getElementById('TAB-2');
    hoverColor.classList.remove('t-color');


    const tab3 = document.getElementById('TAB-3');
    tab3.classList.remove('t-color');


})

// Car-2

document.getElementById('TAB-2').addEventListener('click', function () {

    const hide1 = document.getElementById('hide-1');
    hide1.classList.add("d-none");

    const hide2 = document.getElementById('hide-2');
    hide2.classList.remove('d-none');


    const hide3 = document.getElementById('hide-3');
    hide3.classList.add('d-none'); 


    // TAB Color

    const hoverColor = document.getElementById('TAB-2');
    hoverColor.classList.add('t-color');

    const tab1 = document.getElementById('TAB-1');
    tab1.classList.remove('t-color');

    const tab3 = document.getElementById('TAB-3');
    tab3.classList.remove('t-color');
            
})


document.getElementById('TAB-3').addEventListener('click', function () {
    
    const hide1 = document.getElementById('hide-1');
    hide1.classList.add("d-none");

    const hide2 = document.getElementById('hide-2');
    hide2.classList.add('d-none');    

    const hide3 = document.getElementById('hide-3');
    hide3.classList.remove('d-none');   
    
    // TAB Color

    const hoverColor = document.getElementById('TAB-2');
    hoverColor.classList.remove('t-color');

    const tab1 = document.getElementById('TAB-1');
    tab1.classList.remove('t-color');

    const tab3 = document.getElementById('TAB-3');
    tab3.classList.add('t-color');
})


// nav


    	var header = document.querySelector('header');
    	window.addEventListener('scroll',function(){
    		header.classList.toggle('sticky',window.scrollY>0)
    	});