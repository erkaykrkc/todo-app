import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  work: string = '';
  works: string[] = [];
  isEmpty: boolean = false;
  updateWork: string = '';
  isUpdateFormActive: boolean = false;
  index: number = 0;

  ngOnInit() {}

  save() {
    if (this.work.length !== 0) {
      this.works.push(this.work);
      this.work = '';
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }

  remove(index: number): void {
    this.works.splice(index, 1);
  }

  removeAll(): void {
    if (this.works.length !== 0) {
      this.works.splice(0, this.works.length);
    } else {
      alert('You can not delete, there is no lists!');
    }
  }

  cancel() {
    this.isUpdateFormActive = false;
  }

  get(work: string, index: number) {
    this.updateWork = work;
    this.index = index;
    this.isUpdateFormActive = true;
  }

  update() {
    this.works[this.index] = this.updateWork;
    this.cancel();
  }

  changeInputClass() {
    if (this.work.length < 3) {
      return 'form-control is-invalid';
    } else {
      return 'form-control is-valid';
    }
  }
}
