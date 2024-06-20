import { Component, OnInit } from '@angular/core';
import { Sponsor } from 'src/app/models/sponsor';
import { SponsorService } from 'src/app/services/sponsor/sponsor.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {
  sponsors: Sponsor[] = [];
  selectedSponsor: Sponsor | null = null;

  constructor(private sponsorService: SponsorService) {}

  ngOnInit(): void {
    this.getAllSponsors();
  }

  getAllSponsors(): void {
    this.sponsorService.getSponsors().subscribe(
      (res: Sponsor[]) => {
        this.sponsors = res;
      },
      error => {
        console.error('Error fetching sponsors', error);
      }
    );
  }

 
}
