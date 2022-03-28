async function employeeTable() {
	
	let response = await fetch('/users');
	
	let userList = await response.json();
	
	let tableBody = document.getElementById("tableBody");
	
	console.log(userList);

	for(let index = 0; index < userList.length; index++) {
		
		let element = userList[index];
		
		tableBody.innerHTML +=
		`
		<tr>
      
        <td class = "text-center">${element.id}</td>
        <td class = "text-center">${element.username}</td>
        <td class = "text-center">${element.password}</td>
        <td class = "text-center">${element.firstName}</td>
        <td class = "text-center">${element.lastName}</td>
        <td class = "text-center">${element.email}</td>
        
        </tr>`;
}
}

async function reimbursementTable() {
	
	let response = await fetch('/reimbursement');
	
	let rembList = await response.json();
	
	let rembBody = document.getElementById("rembBody");
	
	console.log(rembList);

	for(let index = 0; index < rembList.length; index++) {
		
		let element = rembList[index];
		
		rembBody.innerHTML +=
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
}
async function managerViewbyID() {
	
	let input = document.getElementById("empId").value;
	
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
}

async function updateStatus() {
	
	var reqId = document.getElementById("reqId").value;
	
	var newStatus = document.getElementById("reqStatus").value;
	
	
	let response = await fetch(`/reimbursement/${reqId}`, {
		 method: "PUT",
  		headers: {'Content-Type': 'application/json'}, 
  		body: newStatus
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

function signOut() {
	window.location="index.html"; 
	

	
}

function approveDeny() {
	
	window.location="approveDeny.html";
}

function viewbyID(){
	window.location="viewRequestbyID.html";
	
}
function viewAllEmployees() {
	window.location="viewAllEmployees.html";
}

function viewAllRequests() {
	
window.location="managerAllRequests.html"; 
}