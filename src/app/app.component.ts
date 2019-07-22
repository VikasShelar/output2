import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interview';

  companyDb = [
    {name:'Vikas',company:'InnovativeLab',address:'Baner',phone:'9665909353'},
    {name:'Abhishekh',company:'Techno',address:'Pune',phone:'9875909353'},
    {name:'SHyAM',company:'TechM',address:'Mumbai',phone:'9065909353'},
    {name:'Preya',company:'Nexus',address:'Nashik',phone:'9165909353'}
  ];


}
