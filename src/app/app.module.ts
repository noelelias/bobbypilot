import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraSelectorComponent } from './camera-selector/camera-selector.component';
import { RouterModule, RouterEvent } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControllerComponent } from './controller/controller.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { SteeringIndicatorComponent } from './steering-indicator/steering-indicator.component';
import { TestTrainingComponent } from './test-training/test-training.component';
import { MachineComponent } from './machine/machine.component';
import { MlService } from './ml.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileDownloadComponent } from './file-download/file-download.component';
import { LoadingComponent } from './loading/loading.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TrafficLightTrainingComponent } from './traffic-light-training/traffic-light-training.component';
import { QuickSaveComponent } from './quick-save/quick-save.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TrafficSignsTrainingComponent } from './traffic-signs-training/traffic-signs-training.component';
import { TrainWithImagesComponent } from './train-with-images/train-with-images.component';
import { ConnectUsbComponent } from './connect-usb/connect-usb.component';

@NgModule({
	declarations: [
		AppComponent,
		CameraSelectorComponent,
		DashboardComponent,
		ControllerComponent,
		CarInfoComponent,
		SteeringIndicatorComponent,
		TestTrainingComponent,
		MachineComponent,
		FileUploadComponent,
		FileDownloadComponent,
		LoadingComponent,
		NavigationComponent,
		TrafficLightTrainingComponent,
		QuickSaveComponent,
		TrafficSignsTrainingComponent,
		TrainWithImagesComponent,
		ConnectUsbComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot([
			{path: '', component: DashboardComponent, resolve: {mlService: MlService}},
		]),
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
