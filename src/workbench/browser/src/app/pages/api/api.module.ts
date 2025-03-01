import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiRoutingModule } from './api-routing.module';
import { ApiEditModule } from './edit/api-edit.module';
import { ApiDetailModule } from './detail/api-detail.module';
import { ApiTestModule } from './test/api-test.module';
import { EnvModule } from '../../shared/components/env/env.module';
import { EouiModule } from '../../eoui/eoui.module';

import { ApiComponent } from './api.component';
import { ApiGroupEditComponent } from './group/edit/api-group-edit.component';
import { ExportApiComponent } from '../../shared/components/export-api/export-api.component';
import { SyncApiComponent } from '../../shared/components/sync-api/sync-api.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';

import { MessageService } from '../../shared/services/message';
import { ApiGroupTreeComponent } from './group/tree/api-group-tree.component';
import { ApiTabComponent } from './tab/api-tab.component';
import { ApiService } from './api.service';
import { ElectronService } from '../../core/services';
import { StorageService } from '../../shared/services/storage';
import { ApiOverviewComponent } from './overview/api-overview.component';
const COMPONENTS = [ApiComponent, ApiGroupEditComponent, ApiGroupTreeComponent, ExportApiComponent, SyncApiComponent];
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ApiRoutingModule,
    ApiEditModule,
    ApiDetailModule,
    ApiTestModule,
    NzButtonModule,
    NzIconModule,
    NzTabsModule,
    NzLayoutModule,
    NzTreeModule,
    NzFormModule,
    NzInputModule,
    NzRadioModule,
    NzDropDownModule,
    NzDividerModule,
    EouiModule,
    EnvModule,
    NzCardModule,
  ],
  declarations: [...COMPONENTS, ApiTabComponent, ApiOverviewComponent],
  exports: [],
  providers: [ElectronService, MessageService, ApiService, StorageService],
})
export class ApiModule {}
