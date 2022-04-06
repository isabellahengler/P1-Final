# P1-Final
Executive Summary
The Expense Reimbursement System (ERS) will manage the process of reimbursing employees for expenses incurred while on company time.
All employees in the company can login and submit requests for reimbursement and view their past tickets and pending requests.
Finance managers can log in and view all reimbursement requests and past history for all employees in the company.
Finance managers are authorized to approve and deny requests for expense reimbursement.
Employee User Stories
An Employee can login
An Employee can view the Employee Homepage
An Employee can logout
An Employee can submit a reimbursement request
An Employee can upload an image of his/her receipt as part of the reimbursement request (extra credit)
An Employee can view their pending reimbursement requests
An Employee can view their resolved reimbursement requests
An Employee can view their information
An Employee can update their information
An Employee receives an email when one of their reimbursement requests is resolved (optional)
Manager User Stories
A Manager can login
A Manager can view the Manager Homepage
A Manager can logout
A Manager can approve/deny pending reimbursement requests
A Manager can view all pending requests from all employees
A Manager can view images of the receipts from reimbursement requests (extra credit)
A Manager can view all resolved requests from all employees and see which manager resolved it
A Manager can view all Employees
A Manager can view reimbursement requests from a single Employee
State-chart Diagram (Reimbursement Statuses) 
![image](https://user-images.githubusercontent.com/99217378/162024818-30b80f83-b7fc-4ebf-84df-af3c132bffc9.png)


Reimbursement Types

Employees must select the type of reimbursement as: LODGING, TRAVEL, FOOD, or OTHER.
![image](https://user-images.githubusercontent.com/99217378/162024914-09a58fbc-546b-4ac0-8473-2af06a3e8c9f.png)


Logical Model 

Physical Model ![image](https://user-images.githubusercontent.com/99217378/162024940-f15d6ddf-5294-43af-8a11-70dbb1c9c6a1.png)


Use Case Diagram ![image](https://user-images.githubusercontent.com/99217378/162024969-f26ade79-4382-44f9-beee-c0a08d7f61c3.png)


Activity Diagram ![image](https://user-images.githubusercontent.com/99217378/162025008-bbcbd510-6d07-4b61-a748-faacb54cf64d.png)



Technical Requirements
The back-end system shall use JDBC connect to an AWS RDS Postgres database.
The application shall deploy onto a Tomcat Server.
The middle tier shall use Servlet technology for dynamic Web application development.
The front-end view shall use HTML/JavaScript to make an application that can call server-side components.
The middle tier shall follow proper layered architecture, have reasonable test coverage of the service layer, and implement log4j for appropriate logging.
Stretch Goals: These will count for extra credit and are entirely optional

Users can upload a document or image of their receipt when submitting reimbursements which can stored in the database and reviewed by a financial manager.
Passwords shall be encrypted in Java and securely stored in the database.
Application shall be hosted remotely on an EC2.
