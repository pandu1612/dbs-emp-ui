import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee!: Employee;
  employee1: Employee | undefined;
  userlogin: any;
  
  constructor(
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(data: { emailId: string; password: string; }) {
    
     this.employeeService.validateEmployee(data)
      .subscribe(response => {
        console.log(response)
        this.employee = response;
        if(this.employee.role=='EMPLOYEE')
        {
          this.router.navigate(["employees", this.employee.id]);
        }
        if(this.employee.role=='ADMIN')
        {
          this.router.navigate(["employeeslist"]);
        }
      }, error => console.log(error));

 }

}
