import { Component } from '@angular/core';
import {TheRecordTableComponent} from "../../components/the-record-table/the-record-table.component";

@Component({
  selector: 'app-the-records-page',
  standalone: true,
  imports: [
    TheRecordTableComponent
  ],
  templateUrl: './the-records-page.component.html',
  styleUrl: './the-records-page.component.css'
})
export class TheRecordsPageComponent {

}
