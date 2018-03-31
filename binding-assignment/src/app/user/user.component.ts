import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<app-user>',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName = '';

  constructor() { }

  ngOnInit() {
  }

  onResetClick() {
    this.userName = '';
  }

  checkNameEmpty() {
    if(this.userName == '') {
      return true;
    } else {
      return false;
    }

  }

}
