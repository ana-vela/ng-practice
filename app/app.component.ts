import {Component} from "@angular/core";

@Component({
	// Update selector with YOUR_APP_NAME-app. This needs to match the custom tag in webpack/index.php
	selector: 'ng-practice-app',

	// templateUrl path to your public_html/templates directory.
	templateUrl: './templates/ng-practice-app.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}