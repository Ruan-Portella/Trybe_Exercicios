package com.trybe.java.escolainteligente;

import java.util.Scanner;

public class App {

  public static void main(String[] args) {
    System.out.println("Boas vindas a Escola Inteligente!");
    System.out.println("Escolha um departamento:");
    System.out.println("1 - Pessoa Estudante - Calcular idade em dias");
    System.out.println("2 - Secretaria - Calcular a média das notas");
    System.out.println("3 - Portaria - Gerar relatório de controle de acesso");

    Scanner scanMenu = new Scanner(System.in);
    short menuOption = scanMenu.nextShort();

    switch (menuOption) {
      case 1:
        PessoaEstudante.coletarInformacoes();
        break;
      case 2:
        Secretaria.coletarInformacoes();
        break;
      case 3:
        Portaria.coletarInformacoes();
        break;
      default:
        System.out.println("Opção Inválida.");
    }

    scanMenu.close();
  }
}