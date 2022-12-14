import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Breed } from './../shared/types';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { setBreed } from '../shared/store/app.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-acordion-card',
  templateUrl: './acordion-card.component.html',
  styleUrls: ['./acordion-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AcordionCardComponent implements OnInit {
  @Input() details!: Breed
  panelOpenState = false
  starIcon = faStar
  ranks!: [string, number][]

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.ranks = this.getEntryesOfRanks()
    console.log(this.details);
  }

  getImg() {
    return this.details.image.url
  }

  getArrayFromNumber(num: number) {
    return [...Array(num).keys()]
  }

  getEntryesOfRanks(): [string, number][] {
    const mapDetails = Object.entries(this.details)
      .filter(item => typeof item[1] === 'number' && item[1] > 0)
      .sort((a, b) => b[1] - a[1])

    return mapDetails
  }

  goToBreed(id: string) {
    this.store.dispatch(setBreed({breedId: id}))
  }

}
