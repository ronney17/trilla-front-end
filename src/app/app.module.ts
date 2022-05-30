import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
