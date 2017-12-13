import { Component } from '@angular/core';

@Component({
	selector: 'pokemon-app',
	template: `<h1>Hello, {{ name }} !`
})
export class AppComponent {
	name = 'Angular';
}
