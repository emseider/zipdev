import { Component, OnInit, Input } from '@angular/core';
import { FormEntity } from 'src/app/_common/entities/form.entity';
import { TechnologiesEnum } from 'src/app/_common/entities/technologies.entity';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {

  @Input() results: FormEntity;

  public technologies: any;
  public palindrome: any;
  public sentence: any;

  constructor() {
    this.technologies = {};
    this.palindrome = {};
    this.sentence = {};
  }

  ngOnInit() {
    if (this.results.technologies) {
      const isRight = this.evalTechnology();
      this.technologies = {
        color: this.getColor(isRight),
        name: this.getIcon(isRight)
      };
    }

    let isPalindrome = this.evalPalindrome(this.results.palindrome);
    this.palindrome = {
      color: this.getColor(isPalindrome),
      name: this.getIcon(isPalindrome)
    };

    isPalindrome = this.evalSentence(this.results.sentence, this.results.reverse);
    this.sentence = {
      color: this.getColor(isPalindrome),
      name: this.getIcon(isPalindrome)
    };
  }

  evalTechnology() {
    return this.results.technologies.every((item) =>
      item === TechnologiesEnum.AngularJS ||
      item === TechnologiesEnum.Ember ||
      item === TechnologiesEnum.VueJS);
  }

  evalPalindrome(palindrome: string) {
    return palindrome.trim() === palindrome.trim().split('').reverse().join('');
  }

  evalSentence(sentence: string, reverse: string) {
    return reverse.trim() === sentence.trim();
  }

  getColor(isRight: boolean) {
    return isRight ? 'success' : 'danger';
  }

  getIcon(isRight: boolean) {
    return isRight ? 'checkmark-circle' : 'close';
  }
}
