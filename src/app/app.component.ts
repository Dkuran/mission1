import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'my application';
	author = 'Andres Duran';
	count = 0;
	imgSource = './../favicon.ico';
	enabled = true;
	value = 'habilitar';

	change() {
		this.enabled = !this.enabled;
		this.value = this.enabled ? 'habilitar' : 'deshabilitar';
	}
}
