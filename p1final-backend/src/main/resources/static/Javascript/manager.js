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

async function reimbersementTable() {
	
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