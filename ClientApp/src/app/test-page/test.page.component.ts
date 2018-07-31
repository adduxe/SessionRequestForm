import { Component, OnInit } from '@angular/core';
import { ChildPageComponent } from './child-page/child.page.component';

@Component({
  selector: 'test-page',
  templateUrl: './test.page.component.html'
})

export class TestPageComponent implements OnInit {

  public fromParent: string = "From Parent Component";
 
  constructor(){

  }

  ngOnInit() {

  }

  public HandleChildClick(childData: string) {
    alert(childData);
  }

}
