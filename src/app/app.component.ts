import { Component , OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/layout/navbar/navbar.component";
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { initFlowbite } from 'flowbite';
import { FlowbitService } from './shared/services/flowbit/flowbit.service';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router'; // ضيف الـ Imports دي
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'freshCart';

constructor(
    private _flowbitService: FlowbitService, 
    private _router: Router // حقن الروتر هنا
  ) {}
  
  
ngOnInit(): void {
    // 1. تشغيل الفلوبايت أول ما التطبيق يفتح
    this.initFlow();

    // 2. إعادة تشغيل الفلوبايت مع كل انتقالة بين الصفحات
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.initFlow();
    });
  }

  private initFlow() {
    this._flowbitService.loadFlowbite((flowbite) => {
      // الـ setTimeout ده مهم جداً عشان نضمن إن الـ DOM الجديد اترسم
      setTimeout(() => {
        flowbite.initFlowbite();
      }, 100); 
    });
  }
}



