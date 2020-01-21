import {Validators} from '@angular/forms';

export class Patterns {

  static emailPattern = Validators.pattern('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$');
  static passwordPattern =  Validators.pattern('^(?=.*[0-9])(?=.*[$~\\-_])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$~\\-_]{8,}$');
  static namePattern =  Validators.pattern('^[a-zA-Z0-9 -]+$');
  static addressPattern =  Validators.pattern('^[a-zA-Z 0-9,;\\-//]+$');
  static carNumberPattern = Validators.pattern('^([0-9]{2}-[0-9]{3}-[0-9]{2})|([0-9]{3}-[0-9]{2}-[0-9]{3})$');
  static passportNumberPattern = Validators.pattern('^[0-9-]{9,11}$');
}
