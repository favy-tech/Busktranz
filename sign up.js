const nam = document.getElementById("name");
const phonenumber = document.getElementById("phone");
const email = document.getElementById("email");
const address = document.getElementById("address");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirm");
const submit = document.getElementById("submit");

let users;

if (localStorage.getItem("user") === null){
    users = [];
}else{
    users = JSON.parse(localStorage.getItem("users"))
}

submit.addEventListener("click", function(){
    // alert("suubmitted");

    // let namevalue = nam.value;
    // let phonenumberValue = phonenumber.value;
    // let emailValue = email.value;
    // let addressValue = address.value;
    // let passwordValue = password.value;
    // let confirmpasswordValue = confirmpassword.value;

    let user = {
        nam: nam.value,
        phonenumber: phonenumber.value,
        email: email.value,
        address: address.value,
        password: password.value,
        confirmpassword: confirmpassword.value
    }

    users.push(user);
    console.log(users);
    localStorage.setItem("Users", JSON.stringify(users));

    window.location = "./login.html";
})


