import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-right-input',
  templateUrl: './right-input.component.html',
  styleUrls: ['./right-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightInputComponent implements ControlValueAccessor {
  public value: string | undefined;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(
    @Self() private readonly ngControl: NgControl,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    this.ngControl.valueAccessor = this;
  }

  public onEditorValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLDivElement;
    const content = targetDivElement.innerText;
    this.onChange(content);

    if (this.onChangeLeft) {
      this.onChangeLeft(content);
    }

    if (this.onTouched) {
      this.onTouched();
    }
  }

  public writeValue(value: string): void {
    this.value = value;
    this.changeDetector.detectChanges();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private onChangeLeft!: (value: string) => void;

  public setOnChangeLeft(fn: (value: string) => void): void {
    this.onChangeLeft = fn;
  }
}
