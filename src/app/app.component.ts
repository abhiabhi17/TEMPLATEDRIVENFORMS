import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'TEMPLATEDRIVENFORMS';
  defaultGender:String="Male";
  defaultCountry:String="india";
// 5 Varibles are declared to display on template after click on submit
  firstname:string|any;
  lastname:string|any;
  email:string|any;
  gen:string|any;
  country:string|any;


  @ViewChild('myForm') form:NgForm | any // To Access the form if sumbit() with empty parameters
  gender=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},
    {id:'3',value:'Other'}
  ]
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(form:NgForm)
  {
console.log(this.form);
        //  this is for displaying data after clcking on submit 
this.firstname=this.form.value.personDetails.firstname;
this.lastname=this.form.value.personDetails.lastname;
this.email=this.form.value.personDetails.email;
this.gen=this.form.value.gender;
this.country=this.form.value.country;
this.form.reset();
  }
 // This is for to set default values using setValue.(In setValue  need to mention total object structure)

  // setDefaultValues()
  // {
  //  this.form.setValue
  //  ({
  //    country:'',
  //    gender:'',
  //    hobbies:'',
  //    personDetailss:{
  //     firstname:'John',
  //     lastname:'smith',
  //     email:'abc@example.com'
  //    }
  //  })
  // }

            // This is for to set default values using pacthValue.(In patch no need to mention total object structure)
  setDefaultValues()
  {
    this.form.form.patchValue({
      personDetails:{  // personDetails is the (ngModelGroup=personDetails )
        firstname:'john',
        lastname:'smith',
        email:'abc@gmail.com'
      }
    })
  }
}


