package com.trybe.java.escolainteligente;

import java.util.Scanner;

public class PessoaEstudante {

  public static int calcularIdadeEmDias(int anos, int meses, int dias) {
    int diasPorMes = 30;
    int diasPorAno = 365;

    return ((anos * diasPorAno) + (meses * diasPorMes) + dias);
  }

  /**
   * Método coletarInformacoes.
   */
  public static void coletarInformacoes() {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Digite o nome do estudante: ");
    String nome = scanner.nextLine();
    System.out.println("Digite o ano de nascimento do estudante: ");
    int anoNascimento = scanner.nextInt();
    System.out.println("Digite o mês de nascimento do estudante: ");
    int mesNascimento = scanner.nextInt();
    System.out.println("Digite o dia de nascimento do estudante: ");
    int diaNascimento = scanner.nextInt();

    int idadeEmDias = calcularIdadeEmDias(anoNascimento, mesNascimento, diaNascimento);
    System.out.println("O estudante " + nome + " tem " + idadeEmDias + " dias de vida.");
    scanner.close();
  }
}