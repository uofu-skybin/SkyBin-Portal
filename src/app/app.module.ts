import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyFilesComponent } from './components/my-files/my-files.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { MyWalletComponent } from './components/my-wallet/my-wallet.component';
import { RenterRegistrationComponent } from './components/dialogs/renter-registration/renter-registration.component';
import { SharedWithMeComponent } from './components/shared-with-me/shared-with-me.component';
import { ProvideStorageComponent } from './components/provide-storage/provide-storage.component';
import { RoutingModule } from './modules/routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxElectronModule } from 'ngx-electron';
import {
    MatCheckboxModule,
    MatDialogModule,
    MatListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatMenuModule,
    MatOptionModule,
    MatProgressBarModule,
    MatSelectModule, MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSnackBar,
    MatProgressSpinnerModule,
    MatTooltipModule, MatExpansionModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FilebrowserComponent } from './components/filebrowser/filebrowser.component';
import { NewFolderDialogComponent } from './components/dialogs/new-folder-dialog/new-folder-dialog.component';
import { ShareDialogComponent } from './components/share-dialog/share-dialog.component';
import { BytesPipe } from './pipes/bytes.pipe';
import { ViewFileDetailsComponent } from './components/view-file-details/view-file-details.component';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { AddStorageComponent } from './components/dialogs/add-storage/add-storage.component';
import { ConfigureProviderComponent } from './components/dialogs/configure-provider/configure-provider.component';
import { NotificationComponent } from './components/notification/notification.component';
import { RenterService } from './services/renter.service';
import { ToHtmlPipe } from './pipes/to-html/to-html.pipe';
import { ReserveStorageProgressComponent } from './components/dialogs/reserve-storage-progress/reserve-storage-progress.component';
import {NgDragDropModule} from 'ng-drag-drop';
import { RenameFileDialogComponent } from './components/dialogs/rename-file-dialog/rename-file-dialog.component';


@NgModule({
    entryComponents: [
        AddStorageComponent,
        ConfigureProviderComponent,
        NewFolderDialogComponent,
        NotificationComponent,
        ReserveStorageProgressComponent,
        ShareDialogComponent,
        ViewFileDetailsComponent,
        RenterRegistrationComponent,
        RenameFileDialogComponent
    ],
    declarations: [
        AddStorageComponent,
        AppComponent,
        AuthenticationComponent,
        BytesPipe,
        FilebrowserComponent,
        RenterRegistrationComponent,
        MyFilesComponent,
        MyWalletComponent,
        NewFolderDialogComponent,
        NotificationComponent,
        ProvideStorageComponent,
        ConfigureProviderComponent,
        RenterRegistrationComponent,
        ReserveStorageProgressComponent,
        ShareDialogComponent,
        SharedWithMeComponent,
        ToHtmlPipe,
        TruncatePipe,
        ViewFileDetailsComponent,
        RenameFileDialogComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserAnimationsModule,
        NgDragDropModule.forRoot(),
        BrowserModule,
        CdkTableModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatDialogModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatOptionModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSliderModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatTabsModule,
        MatExpansionModule,
        NgxElectronModule,
        RoutingModule,
    ],
    providers: [
        RenterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
