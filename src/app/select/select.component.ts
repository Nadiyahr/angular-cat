import { SelectList } from '../shared/types';
import { invokeBreedsAPI } from '../shared/store/breeds/breeds.actions';
import { selectBreeds } from '../shared/store/breeds/breeds.selector';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import { setBreed } from '../shared/store/app.actions';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class SelectComponent implements OnInit {
  breedsControl = new FormControl('')
  breedsList: SelectList[] = []
  breeds$ = this.store.pipe(select(selectBreeds))

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(invokeBreedsAPI())
    this.breeds$.subscribe(breeds => {
      this.breedsList = breeds
    })
    this.breedsControl.valueChanges.subscribe((value) => {
      if (typeof value === 'string') {
        this.store.dispatch(setBreed({breedId: value}))
      }
    })
  }
}
