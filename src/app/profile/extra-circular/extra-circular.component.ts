import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-extra-ciricular',
  templateUrl: './extra-circular.component.html',
  styleUrls: ['./extra-ciricular.component.scss']
})
export class ExtraCiricularComponent implements OnInit {
  extras: any
  constructor(private profileService: ProfileService) { }
  ngOnInit() {
    this.extras = this.profileService.extraCircularInfo()
  }
}
