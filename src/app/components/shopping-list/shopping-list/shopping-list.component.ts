import {Component, OnInit} from '@angular/core';
import { Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("TestIngredient", 3),
    new Ingredient("AssFruit", 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient){
    this.ingredients.push(ingredient);
  }

}
