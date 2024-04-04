import { Injectable } from "@angular/core";
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { isNullOrUndefined } from "../constants/common-function";

@Injectable({
    providedIn: 'root'
})

export class CommonToasterService {
    defaultToasterConfig: Partial<IndividualConfig> = {
        closeButton: true,
        timeOut: 3000,
        positionClass: 'toast-top-right',
        tapToDismiss: true
    };

    constructor(private toastrService: ToastrService) { }

    showSuccess(title?: string, message?: string, configuration?: object) {
        this.toastrService.toastrConfig.preventDuplicates = true;
        this.toastrService.success(message, title, 
            isNullOrUndefined(configuration) ? this.defaultToasterConfig : configuration);
    }

    showError(title?: string, message?: string, configuration?: object) {
        this.toastrService.toastrConfig.preventDuplicates = true;
        this.toastrService.error(message, title, 
            isNullOrUndefined(configuration) ? this.defaultToasterConfig : configuration);
    }

    showWarning(title?: string, message?: string, configuration?: object) {
        this.toastrService.toastrConfig.preventDuplicates = true;
        this.toastrService.warning(message, title, 
            isNullOrUndefined(configuration) ? this.defaultToasterConfig : configuration);
    }

    showInfo(title?: string, message?: string, configuration?: object) {
        this.toastrService.toastrConfig.preventDuplicates = true;
        this.toastrService.info(message, title, 
            isNullOrUndefined(configuration) ? this.defaultToasterConfig : configuration);
    }

    removeAllToasterOrById(toastId?: number) {
        !isNullOrUndefined(toastId) ? this.toastrService.clear(toastId) : this.toastrService.clear();
    }
}