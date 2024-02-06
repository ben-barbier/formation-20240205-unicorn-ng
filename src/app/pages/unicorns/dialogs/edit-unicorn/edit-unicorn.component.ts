import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { JsonPipe } from '@angular/common';
import { Unicorn } from '../../../../shared/models/unicorn.model';
import { MatButton } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-edit-unicorn',
  standalone: true,
  imports: [
    JsonPipe,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatLabel,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    FormsModule,
  ],
  templateUrl: './edit-unicorn.component.html',
  styleUrl: './edit-unicorn.component.scss',
})
export class EditUnicornComponent {
  public editUnicornForm = this.fb.group({
    name: [this.data.name, [Validators.required]],
    weight: [this.data.weight, [Validators.required]],
  });

  constructor(
    public dialogRef: MatDialogRef<EditUnicornComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Unicorn,
    public fb: FormBuilder
  ) {}

  public save() {
    this.dialogRef.close({ ...this.data, ...this.editUnicornForm.value });
  }
}
