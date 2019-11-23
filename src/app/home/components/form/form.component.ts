import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DescribeEnum } from 'src/app/_common/entities/describe.entity';
import { Utils } from 'src/app/_common/utils/utils';
import { UtilsEntity } from 'src/app/_common/entities/utils.entity';
import { TechnologiesEnum } from 'src/app/_common/entities/technologies.entity';
import { FormEntity } from 'src/app/_common/entities/form.entity';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSubmit: EventEmitter<FormEntity>;

  public quizForm: FormGroup;
  public describeList: UtilsEntity[];
  public technologiesList: UtilsEntity[];
  private utils: Utils;
  public current: string;
  public steps: string[];
  public progress: number;
  public timer: string;
  private interval: any;

  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({
      describe: ['', Validators.required],
      technologies: ['', Validators.required],
      palindrome: ['', Validators.required],
      sentence: ['', Validators.required],
      reverse: ['', Validators.required]
    });
    this.onSubmit = new EventEmitter();

    this.utils = new Utils();
    this.describeList = this.utils.mapList(DescribeEnum);
    this.technologiesList = this.utils.mapList(TechnologiesEnum);
    this.current = 'describe';
    this.steps = ['describe', 'technologies', 'palindrome', 'sentence', 'reverse'];
    this.progress = 0;
    this.timer = '';
  }

  ngOnInit() {
    this.interval = this.setTimer();
  }

  doSubmit() {
    this.progress = 1;

    const { quizForm } = this;
    const map: FormEntity = {};
    for (const key of Object.keys(quizForm.controls)) {
      map[key] = quizForm.get(key).value;
    }
    this.onSubmit.emit(map);
  }

  doNext() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    const { steps } = this;
    this.current = steps[steps.indexOf(this.current) + 1];
    this.progress = (steps.indexOf(this.current)) / steps.length;
    const index = steps.indexOf(this.current);
    if (index === 1) {
      this.interval = this.setTimer();
    } else {
      this.timer = '';
    }
  }

  private setTimer() {
    let seconds = 10;
    const interval = setInterval(() => {
      this.timer = `You have ${seconds--} seconds`;
      if (seconds === -1) {
        this.doNext();
        clearInterval(interval);
      }
    }, 1000);
    return interval;
  }

}
