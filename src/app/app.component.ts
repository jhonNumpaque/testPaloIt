import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  str: string = null;
  form: FormGroup = new FormGroup({});

  constructor(private fg: FormBuilder) {
    this.form = fg.group({
      number: ['', [Validators.pattern("^[0-9]*$"), Validators.maxLength(16), Validators.minLength(14)]]
    });
  }

  get f(){
    return this.form.controls;
  }

  processText() : void {    
    let str = this.form.value.number;
    let array = str.split('');
    for (let i = 0; i < array.length; i++) {
      console.log('Cuantas veces esta repetido ', array[i], ': ', this.countChars(str, array[i]));
    }
  }
  
  countChars(str: string, char: string): number {
    return str.split(char).length - 1;
  }
}
