import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  produtos = [
    {
      titulo: 'Produto 1',
      descricao: 'Descrição do produto',
      preco: 'R$30,00',
      imagemSrc: './assets/img/Mobile/produtos/bolsa.png',
      imagemAlt: 'Image cap'
    },
    {
      titulo: 'Produto 2',
      descricao: 'Descrição do produto',
      preco: 'R$40,00',
      imagemSrc: './assets/img/Mobile/produtos/calca.png',
      imagemAlt: 'Image cap'
    },
    {
      titulo: 'Produto 3',
      descricao: 'Descrição do produto',
      preco: 'R$30,00',
      imagemSrc: './assets/img/Mobile/produtos/camiseta.png',
      imagemAlt: 'Image cap'
    },
    {
      titulo: 'Produto 4',
      descricao: 'Descrição do produto',
      preco: 'R$40,00',
      imagemSrc: './assets/img/Mobile/produtos/jaqueta-jeans.png',
      imagemAlt: 'Image cap'
    },
    {
      titulo: 'Produto 5',
      descricao: 'Descrição do produto',
      preco: 'R$30,00',
      imagemSrc: './assets/img/Mobile/produtos/oculos.png',
      imagemAlt: 'Image cap'
    },
    {
      titulo: 'Produto 6',
      descricao: 'Descrição do produto',
      preco: 'R$40,00',
      imagemSrc: './assets/img/Mobile/produtos/tenis.png',
      imagemAlt: 'Image cap'
    },
  ];


  categorias = [
    {
      nome: 'Categoria 1',
      imagemSrc: './assets/img/Mobile/categorias/categoria-camiseta.png',
      imagemAlt: 'Image cap'
    },
    {
      nome: 'Categoria 2',
      imagemSrc: './assets/img/Mobile/categorias/categoria-casacos.png',
      imagemAlt: 'Image cap'
    },
    {
      nome: 'Categoria 3',
      imagemSrc: './assets/img/Mobile/categorias/categoria-calcas.png',
      imagemAlt: 'Image cap'
    },
    {
      nome: 'Categoria 4',
      imagemSrc: './assets/img/Mobile/categorias/categoria-calcados.png',
      imagemAlt: 'Image cap'
    },
    {
      nome: 'Categoria 5',
      imagemSrc: './assets/img/Mobile/categorias/categoria-bolsas.png',
      imagemAlt: 'Image cap'
    },
    {
      nome: 'Categoria 6',
      imagemSrc: './assets/img/Mobile/categorias/categoria-oculos.png',
      imagemAlt: 'Image cap'
    },
    // Adicione mais categorias conforme necessário
  ];

}
