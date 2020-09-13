import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public customCardForm: FormGroup;

  public saveCustomCard(): void {
    if (this.customCardForm.valid) {
      console.log(this.customCardForm.value);
    }
  }

  public ngOnInit(): void {
    this.customCardForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imgLink: new FormControl('', [Validators.required]),
      videoLink: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    });
  }

}
