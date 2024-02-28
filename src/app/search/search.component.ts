import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  searchTerm:string = "";

  constructor(private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm)
        this.searchTerm = params.searchTerm;
    })
  };

  search():any {
    if(this.searchTerm)
      this.router.navigateByUrl('/search/'+ this.searchTerm);
  }


}
