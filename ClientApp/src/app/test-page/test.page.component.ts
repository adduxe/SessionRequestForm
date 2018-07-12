import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'test-page',
  templateUrl: './test.page.component.html'
})

export class TestPageComponent{

  public username: string = '';

  constructor(){
  }

  ngOnInit() {
  }

}
