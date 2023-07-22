import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  newMovieForm: FormGroup = this.formBuilder.group({
    moviename: ['', Validators.required],
    description : ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private movieService: MovieService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.newMovieForm.valid) {
      const newMovie = this.newMovieForm.value;
      // Call the movie service to create a new movie
      this.movieService.createMovie(newMovie).subscribe(
        (response) => {
          // Handle the success response from the server
          console.log('New movie created:', response);
          // Optionally, you can reset the form after successful submission
          this.newMovieForm.reset();
          // Optionally, you can show a success message to the movie
          // For example: this.toastr.success('Movie created successfully!');
        },
        (error) => {
          // Handle the error response from the server
          console.error('Error creating movie:', error);
          // Optionally, you can show an error message to the movie
          // For example: this.toastr.error('Failed to create movie. Please try again.');
        }
      );
    } else {
      // Handle form validation errors if necessary
      console.log('Form is not valid');
      // Optionally, you can show a validation error message to the movie
      // For example: this.toastr.error('Please fill in all required fields.');
    }
  }

  // ... Rest of the code
}
