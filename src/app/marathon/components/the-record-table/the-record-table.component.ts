import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableModule, MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {ParticipantService} from "../../../shared/service/participant.service";
import {Participant} from "../../../shared/model/participant.entity";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'the-record-table',
  standalone: true,
  imports: [MatTableModule, MatPaginator],
  templateUrl: './the-record-table.component.html',
  styleUrl: './the-record-table.component.css'
})
export class TheRecordTableComponent implements OnInit{
  participantData:any;
  participants:any[] = [];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'marathonCenterName','ranking','recordTime'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private participantsService:ParticipantService) {}

  ngOnInit(): void {
      this.getParticipants();
      this.dataSource.sort = this.sort;
  }
  getParticipants(){
      this.participantsService.getParticipants().subscribe((data:any) => {
            data.forEach((participant: any) => {
                 this.participantData = new Participant(participant.id, participant.firstName, participant.lastName, participant.photoUrl, participant.centerId, participant.ranking, participant.recordTime);
                  this.participants.push(this.participantData);
            });
            this.dataSource.data = this.participants;
            this.dataSource.paginator = this.paginator;
      });
  }



}
