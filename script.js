const form = document.getElementById('item-form');

// function onsubmit(e) {
//     e.preventDefault();
//     // console.log('submit'); 
//     const item = document.getElementById('item-input').value;
//     const priority = document.getElementById('priority-input').value;

//     if(item === '' || priority === '0') {
//         alert('please fill in all fields');
//         return;
//     }

//     console.log(item,priority);

// }



// form.addEventListener('submit',onSubmit);
function onSubmit2(e) {
    e.preventDefault();
    const formData = new FormData(form );
    console.log(formData)

    const item = formData.get('item');
    console.log(item)
    const priority = formData.get('priority');
    
    console.log(item,priority);

    
    }


form.addEventListener('submit',onSubmit2);