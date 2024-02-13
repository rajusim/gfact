import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-modelpopup',
  standalone: true,
  imports: [],
  templateUrl: './modelpopup.component.html',
  styleUrl: './modelpopup.component.scss'
})
export class ModelpopupComponent {

  @ViewChild('mymodal',{ static: false}) exampleModal?: ElementRef;

  close(){
    (this.exampleModal?.nativeElement as HTMLElement).style.display = 'none';
  }
}

