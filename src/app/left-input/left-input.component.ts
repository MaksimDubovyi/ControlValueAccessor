import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-left-input',
  templateUrl: './left-input.component.html',
  styleUrls: ['./left-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftInputComponent implements ControlValueAccessor {
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

    if (this.onChangeRight) {
      this.onChangeRight(content);
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

  private onChangeRight!: (value: string) => void;

  public setOnChangeRight(fn: (value: string) => void): void {
    this.onChangeRight = fn;
  }
}
