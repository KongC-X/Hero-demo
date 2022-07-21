import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

function forbiddenNameValidator(reg: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // console.log('control', control);
    const forbidden = reg.test(control.value);
    return forbidden ? { forbiddenName: { value: '名字不能包含bob' } } : null;
  };
}

@Component({
  selector: 'profile-editor',
  templateUrl: './profile-editor.component.html',
  styles: [
    `
      .profile-editor{
        width:500px;
        margin-top:30px
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditorComponent implements OnInit {

  // profileForm = new FormGroup({
  //   firstName : new FormControl('aaa'),
  //   lastName : new FormControl('bbb'),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // })

  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',[
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bob/i)
    ]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    // 动态表单
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.profileForm.value);
    console.log(this.profileForm.get("firstName").value);
  }

  // setValue() 方法会严格遵循表单组的结构，并整体性替换控件的值。
  // patchValue() 用此对象中定义的任意属性对表单模型进行替换。
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}
