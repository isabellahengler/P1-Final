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


async function newReimbursementReq() {
	
	let amount = document.getElementById("amount").value;
	
	let description = document.getElementById("description").value
	
	let empId = document.getElementById("empId").value
	
	let rembInfo = {amount: amount, description: description, author: empId}
	
	console.log(rembInfo);
	
	let response = await fetch(`/reimbursement`, {
		 method: "POST",
  		headers: {'Content-Type': 'application/json'}, 
  		body: JSON.stringify(rembInfo)
	});
	
	if(response.status !== 200) {
			
			//if login attempt fails
			alert("Failed to Create New Request");
		}
		
		else {
			
			
			alert("Request Created Successfully!") 
		}
		
	  console.log("Request complete! response:", response);
	
}

async function employeeInfoById() {
	
	let input = document.getElementById("acctId").value;
	
	let response = await fetch(`/users/${input}/reimbursement`);
	
	let idRembList = await response.json();
	
	let idRembBody = document.getElementById("idRembBody");
	
	console.log(idRembList);

	for(let index = 0; index < idRembList.length; index++) {
		
		let element = idRembList[index];
		
		idRembBody.innerHTML +=
		`
		<tr>
      
        <td class = "text-center">${element.id}</td>
        <td class = "text-center">${element.amount}</td>
        <td class = "text-center">${element.description}</td>
        <td class = "text-center">${element.author}</td>
        <td class = "text-center">${element.submitted}</td>
        <td class = "text-center">${element.resolved}</td>
        <td class = "text-center">${element.resolver}</td>
        <td class = "text-center">${element.status}</td>
        <td class = "text-center">${element.type}</td>

        </tr>`;
}

async function updateInfo() {
	
	let id = document.getElementById("userId").value;
	
	let fname = document.getElementById("userFirst").value;
	
	let lname = document.getElementById("userLast").value;
	
	let username = document.getElementById("username").value;
	
	let pass = document.getElementById("pass").value;
	
	let email = document.getElementById("userEmail").value;
	
	let user = {id: id, firstName: fname, lastName: lname, username: username, password: pass, email: email, roleId: 1};
	
	console.log(user);
	
	let response = await fetch(`/users`, {
		 method: "PUT",
  		headers: {'Content-Type': 'application/json'}, 
  		body: JSON.stringify(user)
	});
	
	if(response.status !== 200) {
			
			//if login attempt fails
			alert("Failed to Update");
		}
		
		else {
			
			
			alert("Updated Successfully!") 
		}
		
	  console.log("Request complete! response:", response);
	
}

}
function employeeInfo() {
	
	window.location="employeeInfo.html"; 
}


function signOut() {
	
	window.location = "index.html";
	}

function employeeTickets() {
	window.location="employeeTickets.html"; 
}

function employeeRequest() {
	window.location ="newEmployeeRequest.html"
}

