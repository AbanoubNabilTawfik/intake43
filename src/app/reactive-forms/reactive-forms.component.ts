import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../validations/userName.validators';
import { ConfirmPasswordValidator } from '../validations/confirmPassword.validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  // registerationForm=new FormGroup({
  //   userName:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     state:new FormControl(''),
  //     city:new FormControl(''),
  //     postalCode:new FormControl('')
  //   })
  // })

  registerationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator(/admin/)]],
    password:[''],
    confirmPassword:[''],
    email:[''],
    subscribe:[false],
    aleternativeEmails:this.fb.array([]),
    address:this.fb.group({
      state:[''],
      city:[''],
      postalCode:['']
    })
  },{validator:[ConfirmPasswordValidator]})

  get userName()
  {
    return this.registerationForm.get('userName');
  }
  get email()
  {
    return this.registerationForm.get('email');
  }

  get aleternativeEmails()
  {
    return this.registerationForm.get('aleternativeEmails') as FormArray;
  }

  addAlternativeEmail()
  {
    this.aleternativeEmails.push(this.fb.control(''));
  }
  deleteEmail(index:any)
  {
   this.aleternativeEmails.removeAt(index);
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  loadData()
  {
    // this.registerationForm.setValue({
    //   userName:'ITI',
    //   password:'12345',
    //   confirmPassword:'12345',
    //   address:{
    //     state:'Egypt',
    //     city:'Assiut',
    //     postalCode:'71111'
    //   }
    // })

    this.registerationForm.patchValue({
      userName:'ITI',
      address:{
        state:'Egypt',
        city:'Assiut',
        postalCode:'71111'
      }
    })
  }

  setEmailValidation()
  {
    this.registerationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue)
      {
        //set validation
        this.email?.setValidators(Validators.required);
      }
      else
      {
       // clear validation
       this.email?.clearValidators();
      }
      //upadte dom
      this.email?.updateValueAndValidity();
    })
  }

  submitData()
  {
    console.log(this.registerationForm.value)
  }

}
