import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
​
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
​
import { AngularSplitModule } from 'angular-split';
import { FlexLayoutModule } from "@angular/flex-layout";
​
// carbon-components-angular default imports
import {
    IconModule,
    IconService,
    UIShellModule,
    PlaceholderModule,
    ModalModule,
    GridModule,
    ListModule,
    TabsModule,
    TilesModule,
    ButtonModule,
    InputModule,
    TableModule,
    ComboBoxModule,
    NotificationModule,
    Loading,
    LoadingModule,
    DatePickerModule,
    AccordionModule,
    StructuredListModule,
    SkeletonPlaceholder,
    SkeletonModule, 
    CheckboxModule
} from 'carbon-components-angular';
​
import { ChartsModule } from '@carbon/charts-angular'
​
import Notification20 from '@carbon/icons/es/notification/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import AppSwitcher20 from '@carbon/icons/es/app-switcher/20';
import Download20 from '@carbon/icons/es/download/20';
import Add20 from '@carbon/icons/es/add/20';
​
import { DeleteModule, AddModule, SproutModule, CornModule, SaveModule } from "@carbon/icons-angular";
​
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { CropComponent } from './crop/crop.component';
import { AddCropComponent } from './crop/add-crop/add-crop.component';
import { UpdateCropComponent } from './crop/update-crop/update-crop.component';
import { DeleteCropComponent } from './crop/delete-crop/delete-crop.component';
import { LotComponent } from './lot/lot.component';
import { AddLotComponent } from './lot/add-lot/add-lot.component';
import { UpdateLotComponent } from './lot/update-lot/update-lot.component';
import { DeleteLotComponent } from './lot/delete-lot/delete-lot.component';
import { SearchCropComponent } from './crop/search-crop/search-crop.component';
import { SearchLotComponent } from './lot/search-lot/search-lot.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { LandAreasComponent } from "./pages/land-areas/land-areas.component";
import { TileComponentComponent } from './tile-component/tile-component.component';
import { LotAssignmentComponent } from './lot/lot-assignment/lot-assignment.component';
import { LotCropFormComponent } from './lot/lot-crop-form/lot-crop-form.component';
import { CropDetailsComponent } from './crop/crop-details/crop-details.component';
import { LotCropEditModalComponent } from './lot/lot-crop-edit-modal/lot-crop-edit-modal.component';
import { LotCropHarvestDateModalComponent } from './lot/lot-crop-harvest-date-modal/lot-crop-harvest-date-modal.component';
​
​
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		DashboardComponent,
		LoginComponent,
		FooterComponent,
		RegistrationComponent,
		CropComponent,
		AddCropComponent,
		UpdateCropComponent,
		DeleteCropComponent,
		LotComponent,
		AddLotComponent,
		UpdateLotComponent,
		DeleteLotComponent,
		SearchCropComponent,
		SearchLotComponent,
		RecommendationComponent,
		LandAreasComponent,
		TileComponentComponent,
		LotAssignmentComponent,
		LotCropFormComponent,
		CropDetailsComponent,
		LotCropEditModalComponent,
		LotCropHarvestDateModalComponent,
	],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        UIShellModule,
        LeafletModule,
        FlexLayoutModule,
        IconModule,
        DeleteModule,
        AddModule,
        SproutModule,
        CornModule,
        SaveModule,
        ModalModule,
        PlaceholderModule,
        GridModule,
        ListModule,
        TabsModule,
        TilesModule,
        ButtonModule,
        InputModule,
        HttpClientModule,
        TableModule,
        ReactiveFormsModule,
        ChartsModule,
        ComboBoxModule,
        NotificationModule,
        LoadingModule,
        DatePickerModule,
        AccordionModule,
        StructuredListModule,
        AngularSplitModule,
        SkeletonModule,
        CheckboxModule
    ],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(protected iconService: IconService) {
		iconService.registerAll([
			Notification20,
			UserAvatar20,
			AppSwitcher20,
            Download20,
            Add20
		]);
	}
}
