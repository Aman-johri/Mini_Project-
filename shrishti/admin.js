const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
function login()
{
    var email = document.getElementById("raktsangrahalay@gmail.com").value;
    var password = document.getElementById("123456").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        window.location.href = "instruction.html";
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
}