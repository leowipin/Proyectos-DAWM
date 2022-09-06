import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.component.html',
  styleUrls: ['./gracias.component.css']
})
export class GraciasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
