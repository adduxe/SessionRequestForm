import { Component } from '@angular/core';

@Component({
  selector: 'test-page',
    template: `
              <kendo-dateinput [(value)]="initialDate">
              </kendo-dateinput>
              `
})

export class TestPageComponent{
  public initialDate: Date = new Date(2008, 12, 23);
}
