import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressAdd } from '../models/addressAdd';
import { Address } from '../models/address';
import { RegisterUser } from '../models/RegisterUser';
import { User } from '../models/user';
import { Description } from '../models/description';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css'],
  providers: [AddressService, AuthService]
})
export class MainProfileComponent implements OnInit {

  constructor(private addressService: AddressService, private authService: AuthService, private alertifyService: AlertifyService, private formBuilder: FormBuilder) { }

  address: AddressAdd
  Address: Address
  addAddressForm: FormGroup
  user: User
  updateUserForm: FormGroup
  descriptionForm: FormGroup
  descripiton:Description



  ngOnInit(): void {
    this.createAddressForm();
    this.createUserForm();
    this.createDescriptionForm();

  }

  createAddressForm() {
    this.addAddressForm = this.formBuilder.group({
      userid: ['', Validators.required],
      name: ['', Validators.required],
      addressline: ['', Validators.required],
      addressdetail: ['', Validators.required],
      neighborhood: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required]
    })
  }


  createUserForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  createDescriptionForm() {
    this.descriptionForm = this.formBuilder.group({
      description: ['', Validators.required]
    })
  }

  addAddress() {
    this.address = Object.assign({}, this.addAddressForm.value)
    this.address.userid = this.authService.getCurrentUserId()
    this.addressService.addAddress(this.address)
    this.alertifyService.success("Adres başarıyla eklendi")
  }

  updateUser() {
    this.user = Object.assign({}, this.updateUserForm.value)
    this.authService.updateUer(this.user)
    this.alertifyService.success("Profiliniz başarıyla güncellendi")
  }

  updateDescripiton(){
    this.descripiton=Object.assign({},this.descriptionForm.value)
    this.authService.updateDescription(this.descripiton)
    this.alertifyService.success("Açıklama başarıyla eklendi")    
  }
}
