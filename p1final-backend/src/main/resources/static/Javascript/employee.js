async function displayInfo() {
	
	let input = document.getElementById("userName").value;
	
	let response = await fetch(`users/${input}`);
	
	let userData = await response.json();
	
	console.log(userData);
	
	document.getElementById("userId").value = userData.id;
	
	document.getElementById("userFirst").value = userData.firstName;
	
	document.getElementById("userLast").value = userData.lastName;
	
	document.getElementById("username").value = userData.username;
	
	document.getElementById("pass").value = userData.password;
	
	document.getElementById("userEmail").value = userData.email;

}

function employeeInfo() {
	
	window.location="employeeInfo.html"; 
}


function signOut() {
	
	window.location = "index.html";
	}



