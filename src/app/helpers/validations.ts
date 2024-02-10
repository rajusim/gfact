import { FormGroup, FormControl } from "@angular/forms";
// Form Validation Check 2
export default class Validation{
    static  validateAllFromFields(formGroup:FormGroup)
    {
      Object.keys(formGroup.controls).forEach(field=> {
        const control = formGroup.get(field);
        if (control instanceof FormControl)
        {
          control.markAsDirty({onlySelf:true});
        }else if (control instanceof FormGroup)
        {
          this.validateAllFromFields(control)
        }
       }
      )
      
    }
}