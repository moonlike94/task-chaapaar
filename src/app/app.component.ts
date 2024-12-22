import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  template: '<app-register></app-register>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit(): void {
  }
}
