function employeeLogin() {
	
	//gets the inputs from the employee's entry and assigns them to variables'
	var username = document.getElementById("username").value;
	
	var password = document.getElementById("password").value;
	
	let data = {username: username, password: password};
	
	console.log(data);
	
	fetch("/users/login", {
		 method: "POST",
  		headers: {'Content-Type': 'application/json'}, 
  		body: JSON.stringify(data)
	}).then(res => {
		
		if(res.status !== 200) {
			
			//if login attempt fails
			alert("Incorrect Login Credentials");
		}
		
		
		else {
			
			// Redirecting to other page.
			window.location = "employees.html"; 
		}
		
	  console.log("Request complete! response:", res);
	});
};

function managerLogin() {
	
	 var manuser = document.getElementById("username").value;
	
	var manpass = document.getElementById("password").value;
	
	let data = {username: manuser, password: manpass};
	
	console.log(data);
	
	fetch("/users/login", {
		method: "POST",
		headers: {'Content-Type': 'application/json'}, 
  		body: JSON.stringify(data)
	}).then(res => {
		
		if(res.status !== 200) {
			
			//if login attempt fails
			alert("Incorrect Login Credentials");
		}
		
		else {
			
			// Redirecting to other page.
			window.location = "managers.html"; 
		}
		
	  console.log("Request complete! response:", res);
	});
	
}

function signOut() {
	
	window.location = "index.html";
}

function rembReq() {
	
	window.location = "request.html";
}

function oldReq() {
	
	window.location = "oldRequests.html";
}

function viewInfo() {
	
	window.location = "empInfo.html";
}


function appDeny() {
	
	window.location = "approveDeny.html";
}

function allPend() {
	
	window.location = "allPending.html";
}

function viewAll() {
	
	window.location = "allRequests.html";
}
function viewEmp() {
	
	window.location = "allEmployees.html";
}
function viewID() {
	
	window.location = "reqById.html";
}






