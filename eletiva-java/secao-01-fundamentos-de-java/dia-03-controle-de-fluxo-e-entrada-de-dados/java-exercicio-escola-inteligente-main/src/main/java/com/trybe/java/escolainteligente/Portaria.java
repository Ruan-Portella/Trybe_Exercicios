package com.trybe.java.escolainteligente;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Scanner;

public class Portaria {

  /**
   * Método emitirRelatorio.
   */
  public static void emitirRelatorio(int qtdFundamental1, int qtdFundamental2, int qtdMedio) {
    int numPessoas = qtdFundamental1 + qtdFundamental2 + qtdMedio;
    DecimalFormat df = new DecimalFormat("0.00");
    double porcMedio = 0.0f;
    double porcFundamental1 = 0.0f;
    double porcFundamental2 = 0.0f;

    if (numPessoas > 0) {
      porcMedio = (qtdMedio * 100.0) / numPessoas;
      porcFundamental1 = (qtdFundamental1 * 100.0) / numPessoas;
      porcFundamental2 = (qtdFundamental2 * 100.0) / numPessoas;
    }

    porcMedio = Double.parseDouble(df.format(porcMedio).replace(',', '.'));
    porcFundamental1 = Double.parseDouble(df.format(porcFundamental1).replace(',', '.'));
    porcFundamental2 = Double.parseDouble(df.format(porcFundamental2).replace(',', '.'));

    System.out.println("------ Quantidade ------");
    System.out.println("Quantidade de alunos do Ensino Médio: " + qtdMedio);
    System.out.println("Quantidade de alunos do Ensino Fundamental 1: " + qtdFundamental1);
    System.out.println("Quantidade de alunos do Ensino Fundamental 2: " + qtdFundamental2);
    System.out.println("------ Porcentagem ------");
    System.out.println("Porcentagem de alunos do Ensino Médio: " + porcMedio + "%");
    System.out.println("Porcentagem de alunos do Ensino Fundamental 1: " + porcFundamental1 + "%");
    System.out.println("Porcentagem de alunos do Ensino Fundamental 2: " + porcFundamental2 + "%");
    System.out.println("------ Total ------");
    System.out.println("Total de alunos: " + numPessoas);
  }

  /**
   * Método coletarInformacoes.
   */
  public static void coletarInformacoes() {
    Scanner scanner = new Scanner(System.in);
    int qtdFundamental1 = 0;
    int qtdFundamental2 = 0;
    int qtdMedio = 0;
    boolean emLoop = true;

    while (emLoop) {
      System.out.println("Selecione uma opção:");
      System.out.println("1 - Cadastrar estudante");
      System.out.println("2 - Emitir relatório");

      int opcao = scanner.nextInt();
      if (opcao == 1) {
        System.out.println("Informe a idade da pessoa estudante:");
        int idade = scanner.nextInt();
        if (idade >= 15) {
          System.out.println("Pessoa estudante do Ensino Médio");
          qtdMedio++;
        } else if (idade >= 11) {
          System.out.println("Pessoa estudante do Ensino Fundamental 2");
          qtdFundamental2++;
        } else {
          System.out.println("Pessoa estudante do Ensino Fundamental 1");
          qtdFundamental1++;
        }
      } else if (opcao == 2) {
        emLoop = false;
      } else {
        System.out.println("Opção inválida!");
      }

      emitirRelatorio(qtdFundamental2, qtdFundamental1, qtdMedio);
      scanner.close();
    }
  }
}
