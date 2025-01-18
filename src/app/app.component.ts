import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { SimpleComponent } from './components/simple/simple.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  imports: [UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice_with_chatgpt';
}
