import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = []; // Initialize moviess as an empty array

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      console.log(movies); // Check the response in the console
      this.movies = movies;
    });
  }
  

  editMovie(movie: Movie): void {
    // Implement the edit functionality here
  }

  deleteMovie(movie: Movie): void {
    // Implement the delete functionality here
  }
}
