import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './products/products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask';
import { ActivateComponent } from './activate/activate.component'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'change-password/:token', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'account', component: RegistrationComponent },
  { path: 'user/activate/:token', component: ActivateComponent },
  // { path: 'cadastro', component: CadastroComponent, canActivate: [LoggedInAuthGuard] },
  // { path: 'carrinho', component: CarrinhoComponent },
  // { path: 'alterar-cadastro', component: AlterarCadastroComponent, canActivate: [AuthGuard] },
  // { path: 'pagamento', component: PagamentoComponent, canActivate: [AuthGuard] },
  // { path: 'pagamento/boleto/:cpf/:nomeCompleto', component: BoletoComponent },
  // { path: 'jogos', component: JogoListaComponent },
  // { path: 'jogos/:id', component: JogoComponent },
  // { path: 'jogos', component: JogoListaComponent },
  // { path: 'jogos/:id', component: JogoComponent },
  // { path: '', component: HomeComponent },
  // { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard] },
  // { path: 'jogo/adm/:id', component: AdmJogosComponent, canActivate: [AuthGuard] },
  // { path: 'jogo/adm', component: AdmJogosComponent, canActivate: [AuthGuard] },
  // { path: 'pedidos', component: PedidosComponent },
  // { path: 'sobre', component: SobreComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ProductsComponent,
    ActivateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true // ao salvar, vai manter a mascara
    }),
  ],
  providers: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
