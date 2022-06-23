import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { FooterService } from '../../../shared/services/service-footer/footer.service';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  createUser:any= FormGroup;
  formAdmin: Boolean = false;
  WordTotlaUser:boolean=false;
  loaderTotalUser:boolean=false;
  loader: boolean = false;
  loaderBtn:boolean=false;
  wordSaveInBtn:boolean=true;
  show: boolean=false
  userData:any= {};
  users:any[]=[]

  constructor(
    private toastr: ToastrService,
    private _activedRoute: ActivatedRoute,
    private loc: Location,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    public ftr : FooterService
) { }


  ngOnInit() {
 // form group addAdmin
 this.ftr.hide()
 this.createUser = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(4)]],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required,Validators.minLength(8)]],
  Repassword: ['', [Validators.required]],
  Role: "user",
  id:this.users.length + 1
}, { validator: this.checkPasswords });
console.log( this.createUser.valid)


  }

  //check password
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let password = group.controls['password'].value;
  let Repassword = group.controls['Repassword'].value;
  return password === Repassword ? null : { notSame: true }
};

showPass(){
  this.show = !this.show;
}
get f(){
  return this.createUser.controls;
}
submitForm():any{

  if (this.createUser.controls.name.invalid) {
    return this.toastr.error(
      "Please enter correct Name!"
    );

  }
  else   if (this.createUser.controls.email.invalid) {
    return this.toastr.error(
      "Please enter correct email!"
    );

  }

  else   if (this.createUser.controls.password.invalid) {
    return this.toastr.error(
      "Please enter correct password!"
    );

  }
  else   if (this.createUser.controls.Repassword.invalid) {
    return this.toastr.error(
      "Password Doesnot match!"
    );

  }


  else {
    localStorage.setItem('userdata',  JSON.stringify( this.createUser.value ));
    this.users.push(this.createUser.value)
    localStorage.setItem('users',  JSON.stringify( this.users ));

    this.router.navigateByUrl("/")
    this.createUser.reset();
    this.toastr.success("you have create account successfully");
  //   this.authService.register(this.userData).subscribe(
  //   res=>{
  //     localStorage.setItem('userdata',  JSON.stringify(res));

  //     this.router.navigateByUrl("/")
  //     this.createUser.reset();
  //     this.toastr.success("you have create account successfully");
  //     // JSON.parse( localStorage.getItem('userdata'));

  //   },
  //   err=>{
  //     console.log(err);
  //     this.toastr.error(err.error.message);
  //   }

  // )
}}

}
