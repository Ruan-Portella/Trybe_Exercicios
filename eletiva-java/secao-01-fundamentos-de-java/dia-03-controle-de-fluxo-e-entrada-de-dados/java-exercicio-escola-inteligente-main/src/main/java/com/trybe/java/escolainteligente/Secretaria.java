package com.trybe.java.escolainteligente;

import java.util.Scanner;

public class Secretaria {

  /**
   * Método calcularMedia.
   */
  public static double calcularMedia(double nota1, double nota2, double nota3, double nota4) {
    return ((nota1 + nota2 + nota3 + nota4) / 4.0);
  }

  /**
   * Método coletarInformacoes.
   */
  public static void coletarInformacoes() {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Digite o nome do estudante: ");
    String nome = scanner.nextLine();
    System.out.println("Digite a nota 1 do estudante: ");
    double nota1 = scanner.nextDouble();
    System.out.println("Digite a nota 2 do estudante: ");
    double nota2 = scanner.nextDouble();
    System.out.println("Digite a nota 3 do estudante: ");
    double nota3 = scanner.nextDouble();
    System.out.println("Digite a nota 4 do estudante: ");
    double nota4 = scanner.nextDouble();
    double media = calcularMedia(nota1, nota2, nota3, nota4);
    System.out.println("A média do estudante " + nome + " é " + media);
    scanner.close();
  }
}
