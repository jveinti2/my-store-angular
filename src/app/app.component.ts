import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-store';
  name = 'Johnatan Becerrass';
  age = 27;
  btnDisabled = true;
  person = {
    name: 'Johnatan Becerrass',
    age: 27,
  };

  btnToggle() {
    this.btnDisabled = !this.btnDisabled;
  }

  incrementAge() {
    this.person.age += 1
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
    
  }
  viewInput(event: Event) {
    const input = event.target as HTMLInputElement
    this.person.name = input.value    
  }
}
