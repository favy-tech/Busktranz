

const users = JSON.parse(localStorage.getItem("Users"));

console.log(users);


const fullname = document. getElementById("name")
const password = document. getElementById("psw")
const submit = document. getElementById("sub")


submit.addEventListener("click",()=>{
    users = {
        fullname: fullname.value,
        password: password.value,

    };

    let CorrectDetails = false;

    for (let i = 0; i < users.length; i++) {
        
        if (users. fullname === users[i].fullname && users.password === users[i].password) {
            alert("Correct Details")
            CorrectDetails = true; 
        }else{
            CorrectDetails = false
        }
        
    }

    if(CorrectDetails == true){
        window.location = "./homepage.html";
    }else{
        ("Incorrect Username or Password. \n if you haven't signed up, please do.");
    }


    console.log(users);
})