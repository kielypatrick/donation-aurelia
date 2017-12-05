import {inject} from 'aurelia-framework';
import DonationService from '../../services/donation-service';

@inject(DonationService)
export class Candidate {

  candidates = [];

  constructor(ds) {
    this.donationService = ds;


    this.candidates = ds.candidates;
  }

  addCandidate() {
    this.donationService.addCandidate(this.firstName, this.lastName, this.office);
  }

}
