import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iprice';
  showUpperCase: String;
  showAlterCase: String;
  showCSV: any;

  constructor(private sanitizer: DomSanitizer){ }

  onSubmit(text) {
    console.log(text, 'test');
    const input = !!text.input ? text.input : "default message";
    
    this.makeUppercase(input);
    this.makeAltercase(input);
    this.makeCSV(input);
  }

  makeUppercase(input: String): void{
    this.showUpperCase = input.toUpperCase();
  }

  makeAltercase(input: String): void{
    this.showAlterCase = '';
    input.split('').forEach((char, idx)=>{
      this.showAlterCase += (idx % 2 === 0) ? char.toUpperCase() : char.toLowerCase();
    });
  }

  makeCSV(input: String): void{
    this.showCSV = '';
    const blob = new Blob([input.split(' ').join(',')], {type : 'text/csv;charset=utf-8;'})
    this.showCSV = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

}
