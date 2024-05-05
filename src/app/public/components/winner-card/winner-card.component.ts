import {Component, OnInit} from '@angular/core';
import {ParticipantService} from "../../../shared/service/participant.service";
import {Participant} from "../../../shared/model/participant.entity";
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'winner-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent
  ],
  templateUrl: './winner-card.component.html',
  styleUrl: './winner-card.component.css'
})
export class WinnerCardComponent implements OnInit {
  participantData:any;
  participants:any[]=[];
  participantWinner:any;
  ngOnInit(): void {
    this.getWinner();
  }
  constructor(private participantService: ParticipantService) {
  }

  getWinner(){
    this.getParticipants();
    this.participantWinner = this.participants.find((participant:any) => participant.ranking === "1");
    console.log(this.participantWinner);
    console.log(this.participants);
  }


  getParticipants(){
    this.participantService.getParticipants().subscribe((data:any)=>{
         data.forEach((participant:any) => {
             this.participantData = new Participant(participant.id,participant.firstName,participant.lastName,participant.photoUrl,participant.centerId,participant.ranking,participant.recordTime );
              this.participants.push(this.participantData);
         });
    });
  }


}
