import { Component, OnInit } from '@angular/core';
import { Country } from './template-form.interface';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }
  countries:Country[] = [
    {name: 'Egypt'},
    {name: 'USA'},
    {name: 'UK'},
    {name: 'Australia'},
    {name: 'Canada'},
    {name: 'Germany'},
    {name: 'France'},
    {name: 'Italy'}
  ]

  onSubmit(form:any) {
    console.log(form);
  }
    
  ngOnInit(): void {
  }

}
