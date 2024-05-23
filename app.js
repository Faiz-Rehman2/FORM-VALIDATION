// const form = document.querySelector('#form');
// const username = document.querySelector('#username');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const cnic = document.querySelector('#cnic');



// let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let regex = /^(?=.*!)[a-zA-Z0-9!]{4,5}$/;
// let cnicRegex = /^42\d{11}$/;

// form.addEventListener('submit' , (event)=>{
//     event.preventDefault()
//     console.log(username.value)
//     console.log(email.value)
//     console.log(password.value)

//     console.log(emailRegex.test(email.value))
//     console.log(regex.test(password.value))
//     console.log(cnicRegex.test(cnic.value))

//     if(cnicRegex.test(email.value)){
//         console.log(email.value);
//     }
// })



document.getElementById('registrationForm').addEventListener('submit', function(event) {
    
    const usernamePattern = /^[a-zA-Z0-9]{4,15}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const cnicPattern = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
    const agePattern = /^(1[89]|[2-5][0-9]|60)$/;


    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const cnic = document.querySelector('#cnic');
    const age = document.querySelector('#age');

    
    if (usernamePattern.test(username.value)) {
        event.preventDefault();
        console.log(username.value);
    }

    if (emailPattern.test(email.value)) {
        event.preventDefault();
        console.log(email.value);
        
    }

    if (passwordPattern.test(password.value)) {
        event.preventDefault();
        console.log(password.value);
    
    }

    if (cnicPattern.test(cnic.value)) {
        event.preventDefault();
        console.log(cnic.value);
        
    }

    if (agePattern.test(age.value)) {
        event.preventDefault();
        console.log(age.value);

    }

    alert('Form submitted successfully!');
});