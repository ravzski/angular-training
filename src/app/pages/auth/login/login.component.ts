import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { SessionService } from './../../../services/api'

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private return = ''
  public form: FormGroup
  public loading = false

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.buildForm()
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.return = params.return || '/')
  }

  buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit(params: any) {
    if (this.form.valid) {
      this.loading = true
      this.sessionService.login(params).subscribe(
        (resp: any) => {
          this.loading = false
          this.sessionService.setSession(resp)
          this.router.navigateByUrl(this.return)
        },
        (error: any) => {
          this.loading = false
        })
    }
  }
}
