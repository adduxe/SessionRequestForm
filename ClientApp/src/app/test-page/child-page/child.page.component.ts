import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TestService } from '../../shared/services/test.service';

@Component({
  selector: 'child-page',
  templateUrl: './child.page.component.html'
})

export class ChildPageComponent implements OnInit {

  public fromChild: string = "A value coming from the child.";
  public fromService: string = '';
  public sampleInput: string = "Sample Input";

  @Input() public parentValue: string;
  @Output() public ChildEvent = new EventEmitter();
  
  constructor(private testService: TestService) {
    this.fromService = testService.testSvcValue;
  }   // constructor()

  ngOnInit() {

  }   // ngOnInit()

  public ChildClick(childValue) {
    alert("On ChildClick: " + childValue);
    this.ChildEvent.emit(childValue);
  }   // ChildClick()


  public SendToService(fromChild): boolean {
    this.testService.UpdateSession(fromChild);
    if ()
    return true;
  }   // SendToService()
}
