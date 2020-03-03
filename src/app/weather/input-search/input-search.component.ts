import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements AfterViewInit {
  private cityForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.cityForm = this.formBuilder.group({
        city: ['', Validators.required]
      });
    });
  }

}
