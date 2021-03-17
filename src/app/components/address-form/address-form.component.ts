import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styles: [
  ]
})
export class AddressFormComponent implements OnInit {
  addressForm!: FormGroup;
  coloniesGroup:any[]=[]
  toggleField:Boolean = true;
  constructor(private formBuild:FormBuilder, private api:ApiService) {
    this.createForm()
   }

  ngOnInit(): void {
    
  }

  createForm(){
    this.addressForm = this.formBuild.group({
      name:['',Validators.required],
      lastName:['',Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+[a-zA-Z0-9-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['',[Validators.required, Validators.pattern('^[0-9]+$'),Validators.minLength(10)]],
      postal_code:['',Validators.required],
      colony:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
      town:['',Validators.required],
      street:['',Validators.required],
      use_address:[null],
    })
  }
  get errorControl(){
    return this.addressForm.controls
  }
  get validName(){
    // return this.addressForm.get('name')?.touched && this.addressForm.get('name')?.invalid
    return this.addressForm.get('name')?.invalid && this.addressForm.get('name')?.touched
  }
  get validLastName(){
    return this.addressForm.get('lastName')?.touched && this.addressForm.get('lastName')?.invalid
  }
  get validEmail(){
    return this.addressForm.get('email')?.touched &&  this.addressForm.get('email')?.invalid
  }
  get validPhone(){
    return this.addressForm.get('phone')?.touched &&  this.addressForm.get('phone')?.invalid
  }
  get validPostal(){
    return this.addressForm.get('postal_code')?.touched &&  this.addressForm.get('postal_code')?.invalid
  }
  get validColony(){
    return this.addressForm.get('colony')?.touched &&  this.addressForm.get('colony')?.invalid
  }
  get validRegion(){
    return this.addressForm.get('state')?.touched &&  this.addressForm.get('state')?.invalid
  }
  get validCity(){
    return this.addressForm.get('city')?.touched &&  this.addressForm.get('city')?.invalid
  }
  get validtown(){
    return this.addressForm.get('town')?.touched &&  this.addressForm.get('town')?.invalid
  }
  get validStreet(){
    return this.addressForm.get('street')?.touched &&  this.addressForm.get('street')?.invalid
  }
 
  
  handleData(dataForm:any){

    if(dataForm.invalid){
      return Object.values(dataForm.controls).forEach( (control:any) => {
        control.markAsTouched()
      });
    }
    console.log(dataForm.value);
    this.api.sendData(dataForm.value).subscribe(resp =>{
      console.log("la respuesta",resp);
      alert("El servidor está respondiendo Estado 204")
    })
    
  }

  handlePostalCode(code:any){
    const { value } = code.target;
    
    this.api.getPostalInfo(value).subscribe((resp:any) => {
      const { colonies, state, city, town } = resp;

      this.coloniesGroup = colonies;

      if(colonies.length === 1){
        this.toggleField = true;
        this.updateForm(this.coloniesGroup.toString(), state, city, town )
      } else{
        this.toggleField = false
        this.updateForm(null, state, city, town )
      }
      
    })
    
  }
  updateForm(colony:any, state:any, city:any, town:any ){
    this.addressForm.patchValue({
      colony,
      state,
      city,
      town
    });
  }

}
