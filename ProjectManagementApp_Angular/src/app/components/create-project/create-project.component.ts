import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIEndpoint } from 'src/app/shared/constants/apiEndpoint';
import { dateConverter } from 'src/app/shared/constants/common-function';
import { APIService } from 'src/app/shared/services/api.service';
import { CommonToasterService } from 'src/app/shared/services/common-toaster.service';

@Component({
    selector: 'app-create-project',
    templateUrl: './create-project.component.html',
    styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
    protected createProjectFormGroup!: FormGroup;
    protected currentDate: string = "";
    protected isCreating: boolean = false;
    
    constructor(private router: Router, private apiService: APIService,
        private toaster: CommonToasterService) { }

    ngOnInit() {
        this.currentDate = dateConverter(new Date());

        this.createProjectFormGroup = new FormGroup({
            title: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]),
            description: new FormControl(''),
            dueDate: new FormControl('')
        });
    }

    get createProjformGroupControl() {
        return this.createProjectFormGroup.controls;
    }

    create() {
        this.isCreating = true;

        if (this.createProjectFormGroup.invalid) {
            return;
        }

        var project = this.createProjectFormGroup.value;
        this.apiService.postRequest(APIEndpoint.home.createProject, project).subscribe({
            next: (res) => {
                if (res) {
                    this.toaster.showSuccess('Created Successfully...');
                    this.cancel();
                }
                else {
                    this.toaster.showError('An error occured while creating!!!');
                }
            },
            error: (error) => {
                this.apiService.handleErrorRequest(error);
            },
            complete: () => {
                this.isCreating = false;
            }
        });
    }

    cancel() {
        this.router.navigate(['/home']);
    }
}