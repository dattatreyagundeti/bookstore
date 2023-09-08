import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RuserserviceService } from '../ruserservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public img_url:any;
  public upId:any;
  public upUser:any;
  public registraionForm = new FormGroup({

    Name: new FormControl(''),
    fatherName: new FormControl(''),
    email: new FormControl(''),
    mobNo: new FormControl(''),
    image: new FormControl(null),
    gender: new FormControl(''),
    isaccept: new FormControl('')
  });
  errorMsg : string ='';
  public array:{Name:string,fatherName:string,mobNo:number,email:string,image : string, gender:string,_id:string }[] = []

  constructor(private _myser: RuserserviceService) { }
  ngOnInit(): void { 
    this.getUser()

    
  }
  getUser(){
    this._myser.getUser().subscribe((user)=>{
      this.array = user
      console.log(this.array)
  
    } 
    )
  }

 

  

  submitForm() {
    console.log(this.registraionForm.value);
    
    this._myser.enroll(this.registraionForm.value)
      .subscribe(
       (data)  =>{console.log("suc", data)} 
        ,error => this.errorMsg = error.statusText
      );
   
  }
  updating(id:string,p:any): void{
    this.upId = id;
   

    this.registraionForm.patchValue /*patchValue*/({
      fatherName: p.fatherName,
      Name :p.Name,
      email : p.email,
      mobNo : p.mobNo,
      image: p.image,
      gender : p.gender

  })
    
  }
  upadatingUser(){
    if (this.upId) {
      this._myser.updateuser(this.upId, this.registraionForm.value).subscribe(
        (res) => {
          console.log('User updated successfully:', res);
          this.upId = ''; 
          this.registraionForm.reset();// Reset the user ID after successful update
          this.getUser();
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    }


  }

  deleting(id:string) {
    console.log(id);

    this._myser.deleteUser(id).subscribe((res)=>console.log("cvdf",res))
  }
  filetourl(e:any){
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) =>{
      this.img_url = e.target?.result as string
      this.registraionForm.get('image')?.setValue(this.img_url)      
    }

    
  }
}
