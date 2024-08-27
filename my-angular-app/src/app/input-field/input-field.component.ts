import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputFieldComponent),
    multi: true
  }]
})
export class InputFieldComponent {
  @Input() type:any = '';
  @Input() label:string = '';
  @Input() name:string = '';
  @Input() placeholder:string= '';
  @Input() required:string = 'false';
  @Input() customClass: string = '';
  @Input() autocomplete: string = 'off';
  @Input() ariaLabel: string = '';

  @Output() valueChange = new EventEmitter<string>();


  value: any = '';
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle disabled state if needed
  }

  onInput(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.value = input.value;
  this.onChange(this.value); // Notify Angular form that the value has changed
  this.valueChange.emit(this.value); // Emit value to the parent component
}
}
