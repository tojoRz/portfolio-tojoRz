import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'portfolio-tojoRz';
  
  constructor(private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.openSpinner();
  }

  openSpinner(){
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide()      
    }, 3000);
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

