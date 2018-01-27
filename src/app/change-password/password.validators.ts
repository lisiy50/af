import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PasswordValidators {

    // static matchTo(control: AbstractControl): ValidationErrors | null {
    //     return { matched: false };
    //     if (control.parent.get('newPassword').value != control.value) {
    //         return { matched: false };
    //     } else {
    //         return null;
    //     }
    // }


    static passwordsAreMatch (control: AbstractControl) : ValidationErrors | null {
        
        let newPassword = control.get('newPassword');
        let repeatPassword = control.get('repeatPassword');
        
        if (newPassword.value !== repeatPassword.value)
            return {notMatch: true};
        return null;
    }

    static isWrong (control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === '1234') {
                    resolve(null);
                } else {
                    resolve({ isWrong: true });
                }
            }, 300);
        });
    }
    
}