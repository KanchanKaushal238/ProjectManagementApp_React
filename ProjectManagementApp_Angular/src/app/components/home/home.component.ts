import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    protected noProject: boolean = true;

    constructor(private router: Router) {}

    ngOnInit() {}

    navigate() {
        this.router.navigate([this.noProject ? '/create-project' : '/my-projects']);
    }
}
