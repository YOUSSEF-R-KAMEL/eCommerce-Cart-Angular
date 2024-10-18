import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
})
export class DarkModeComponent {
  isDark: boolean = false;
  img: string = 'moon';
  changeDark() {
    if (this.isDark) {
      this.img = 'moon'
      document.body.classList.remove('dark');
      document.querySelector('table')?.classList.remove('table-dark');
      document.querySelector('table')?.classList.add('table-striped');
      // document.querySelector('nav')!.className = 'navbar navbar-expand-lg bg-body-tertiary'
      this.isDark = !this.isDark;
    } else {
      this.img = 'sun'
      document.body.classList.add('dark');
      document.querySelector('table')?.classList.add('table-dark')
      document.querySelector('table')?.classList.remove('table-striped')
      // document.querySelector('nav')!.className = 'navbar bg-dark border-bottom border-body'
      // document.querySelector('nav')!.setAttribute('data-bs-theme',"dark")
      this.isDark = !this.isDark;
    }
  }
}
