import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postsList: Post[] = [];
  isLoading: boolean = true;
  // thereAreNoPosts: boolean = false; // Това го правим ако нямаме постове да се изпише

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getPosts(5).subscribe({   // Вариант в който хващаме ако има грешка;
      next: (posts) => {
        this.postsList = posts;

        // if(this.postsList.length === 0){
        //   this.thereAreNoPosts = true;   //Това го правим ако нямаме постове да се изпише
        // }

        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(`Error ${err}`);
      }
    })

    // this.apiService.getPosts(5).subscribe(posts => {   // По лесен вариант без хващане на грешка
    //   this.postsList = posts;
    //   console.log(posts);
    // })
  }

}
