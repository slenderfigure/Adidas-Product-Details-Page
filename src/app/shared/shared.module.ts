import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSupportChatComponent } from './customer-support-chat/customer-support-chat.component';



@NgModule({
  declarations: [
    CustomerSupportChatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomerSupportChatComponent
  ]
})
export class SharedModule { }
