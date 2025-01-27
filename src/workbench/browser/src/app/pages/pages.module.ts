import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SettingModule } from '../shared/components/setting/setting.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [PagesRoutingModule, SettingModule, CommonModule, SharedModule],
  exports: [],
})
export class PagesModule {}
