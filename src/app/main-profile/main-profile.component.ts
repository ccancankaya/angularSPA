import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressAdd } from '../models/addressAdd';
import { Address } from '../models/address';
import { RegisterUser } from '../models/RegisterUser';
import { User } from '../models/user';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css'],
  providers:[AddressService,AuthService]
})
export class MainProfileComponent implements OnInit {

  constructor(private addressService:AddressService,private authService:AuthService,private alertifyService:AlertifyService,private formBuilder:FormBuilder) { }

  address:AddressAdd
  Address:Address
  addAddressForm:FormGroup
  user:User
  updateUserForm:FormGroup

  
  ngOnInit(): void {
    this.createAddressForm();
    this.authService.getCurrentUser().subscribe(data=>{
      console.log(data)
    })
  
  }

  createAddressForm(){
    this.addAddressForm=this.formBuilder.group({
      userid:['',Validators.required],
      name:['',Validators.required],
      addressline:['',Validators.required],
      addressdetail:['',Validators.required],
      neighborhood:['',Validators.required],
      district:['',Validators.required],
      city:['',Validators.required]
    })
  }

  createUserForm(dataum){
    return this.formBuilder.group({
      name:this.formBuilder.control({value:dataum.name}),
      surname:this.formBuilder.control({value:dataum.surname}),
      age:({}),
      gender:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }


  addAddress(){
    this.address=Object.assign({},this.addAddressForm.value)
    this.address.userid=this.authService.getCurrentUserId()
    this.addressService.addAddress(this.address)
    this.alertifyService.success("Adres başarıyla eklendi")
  }

}
