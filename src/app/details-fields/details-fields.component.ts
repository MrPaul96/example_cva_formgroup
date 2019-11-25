import {Component, Input, Output, EventEmitter, OnInit, OnDestroy, forwardRef} from '@angular/core';
import {AbstractControl, FormGroup, Validators,
   FormArray, FormControl, Validator, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-details-fields',
  templateUrl: './details-fields.component.html',
  styleUrls: ['./details-fields.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DetailsFieldsComponent)
    }
  ]
})

export class DetailsFieldsComponent implements ControlValueAccessor, OnInit {

 // Initialize nested form components.
    formGroup: FormGroup;

    @Input() dadForm: FormGroup;
    @Input() formName: string;

    ngOnInit() {
      this.formGroup =  new FormGroup({
        make: new FormControl('', [Validators.required]),
        year: new FormControl('', [Validators.required]),
        color: new FormControl('', [Validators.required]),
    });

      this.dadForm.addControl(this.formName, this.formGroup);
      console.log(this.dadForm.controls);
    }

    onTouched: () => void = () => {};

    disableYear() {
      (<FormGroup>this.formGroup).get('year').disable();
    }

    enableYear() {
      (<FormGroup>this.formGroup).get('year').enable();
    }
    
    writeValue(v: any) {
        this.formGroup.setValue(v, {emitEvent: true});
    }

    registerOnChange(fn: (v: any) => void) {
      console.log('hola');
        this.formGroup.valueChanges.subscribe((val) => {
          console.log(val);
          fn(val);
        });
    }

    setDisabledState(disabled: boolean) {
        disabled ? this.formGroup.disable() : this.formGroup.enable();
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }

    ngOnDestroy() {}
}
