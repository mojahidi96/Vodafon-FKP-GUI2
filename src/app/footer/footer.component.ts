import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { Footer } from './footer.interface';

@Component({
  selector: 'sncr-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer: Footer;
  constructor(private footerService: FooterService) { }

  ngOnInit() {
    this.footerService.getFooter()
      .subscribe(items => this.footer = items);
    console.log(this.footer)
  }

}
