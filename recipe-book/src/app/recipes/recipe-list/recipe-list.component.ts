import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Bacon Wrapped Asparagus', 'Whole-30 Approved, Bacon Wrapped Asparagus', 'https://farm4.staticflickr.com/3150/2473562774_d3761ebdcf.jpg')
    , new Recipe('Creamy Taco Soup', 'Whole-30 Approved, Creamy Taco Soup', 'https://themovementmenu.com/wp-content/uploads/2017/01/Whole30-Taco-Soup-1-2-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
