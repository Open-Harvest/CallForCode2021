import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { IconModule, IconService, UIShellModule,InputModule,ButtonModule,ComboBoxModule } from 'carbon-components-angular';
import Notification20 from '@carbon/icons/es/notification/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import AppSwitcher20 from '@carbon/icons/es/app-switcher/20';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DocsComponent } from './pages/docs/docs.component';
import { SupportComponent } from './pages/support/support.component';
import { Link1Component } from './pages/link1/link1.component';
import { LotFormComponent } from './pages/lot-form/lot-form.component';
import { CropFormComponent }from './pages/crop-form/crop-form.component';
import { FarmerViewComponent } from './pages/farmer-view/farmer-view.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { ButtonComponentComponent } from './button-component/button-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CatalogComponent,
		DocsComponent,
		SupportComponent,
		Link1Component,
		LotFormComponent,
		CropFormComponent,
		FarmerViewComponent,
		InputComponentComponent,
		ButtonComponentComponent,
		SearchComponentComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		UIShellModule,
		IconModule,
		InputModule,
		ButtonModule,
		ComboBoxModule

	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(protected iconService: IconService) {
		iconService.registerAll([
			Notification20,
			UserAvatar20,
			AppSwitcher20
		]);
	}
}
