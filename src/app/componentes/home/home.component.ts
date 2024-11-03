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
      imagemAlt: 'Image cap'
    },
    {
      titulo: 'Produto 2',
      descricao: 'Descrição do produto',
      preco: 'R$40,00',
      imagemAlt: 'Image cap'
    },
    {
      titulo: 'Produto 3',
      descricao: 'Descrição do produto',
      preco: 'R$30,00',
      imagemAlt: 'Image cap'
    },
    {
      titulo: 'Produto 4',
      descricao: 'Descrição do produto',
      preco: 'R$40,00',
      imagemAlt: 'Image cap'
    },
    {
      titulo: 'Produto 5',
      descricao: 'Descrição do produto',
      preco: 'R$30,00',
      imagemAlt: 'Image cap'
    },
    {
      titulo: 'Produto 6',
      descricao: 'Descrição do produto',
      preco: 'R$40,00',
      imagemAlt: 'Image cap'
    },
  ];


  categorias = [
    {
      nome: 'Categoria 1',
      imagemAlt: 'Image cap'
    },
    {
      nome: 'Categoria 2',
      imagemAlt: 'Image cap'
    },
    {
      nome: 'Categoria 3',
      imagemAlt: 'Image cap'
    },
    {
      nome: 'Categoria 4',
      imagemAlt: 'Image cap'
    },
    {
      nome: 'Categoria 5',
      imagemAlt: 'Image cap'
    },
    {
      nome: 'Categoria 6',
      imagemAlt: 'Image cap'
    },
    // Adicione mais categorias conforme necessário
  ];

}
