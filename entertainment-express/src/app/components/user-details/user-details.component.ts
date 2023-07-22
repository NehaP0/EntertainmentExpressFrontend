import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  newUserForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    status: [true, Validators.required],
    gender: ['', Validators.required],
    membership_type: ['', Validators.required],
    bio: [''],
    date_of_birth: [''],
  });

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.value;
      // Call the user service to create a new user
      this.userService.createUser(newUser).subscribe(
        (response) => {
          // Handle the success response from the server
          console.log('New user created:', response);
          // Optionally, you can reset the form after successful submission
          this.newUserForm.reset();
          // Optionally, you can show a success message to the user
          // For example: this.toastr.success('User created successfully!');
        },
        (error) => {
          // Handle the error response from the server
          console.error('Error creating user:', error);
          // Optionally, you can show an error message to the user
          // For example: this.toastr.error('Failed to create user. Please try again.');
        }
      );
    } else {
      // Handle form validation errors if necessary
      console.log('Form is not valid');
      // Optionally, you can show a validation error message to the user
      // For example: this.toastr.error('Please fill in all required fields.');
    }
  }

  // ... Rest of the code
}
