import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatInputModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTabsModule,
  MatSelectModule,
  MatGridListModule,
  MatDialogModule
} from '@angular/material';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import {AppRoutingModule} from '../app-routing.module';

// import { ShowAuthedDirective } from './show-authed.directive';
// import { Nl2brPipe } from './nl2br.pipe';

const ANGULAR_MODULES: any[] = [FormsModule, ReactiveFormsModule];

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatInputModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTabsModule,
  MatSelectModule,
  MatGridListModule
];

const FLEX_LAYOUT_MODULES: any[] = [FlexLayoutModule];

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    FLEX_LAYOUT_MODULES
  ],
  exports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    FLEX_LAYOUT_MODULES
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class SharedModule {}
