import { ValidatorFn } from "@angular/forms";


export function appEmailValidator(domains: string[]): ValidatorFn {

    const domainStrings = domains.join('|');
    const regExp = new RegExp(`[^@]{6,}@gmail\.(${domainStrings})$`);

    return (control) => {
        return control.value === '' || regExp.test(control.value) // control.value идва от самата контролкта в HTML  на която го прилагаме;
            ? null
            : { appEmailValidator: true };
    }
}