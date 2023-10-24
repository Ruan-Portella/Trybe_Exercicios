package com.trybe.java.escolainteligente;

import static org.junit.jupiter.api.Assertions.*;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.PrintStream;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class PortariaTest {

  @Test
  @DisplayName("7 - Escreva um método que emite o relatório de acessos das pessoas estudantes")
  public void testEmitirRelatorio() {
    int qtdFundamental1 = 20;
    int qtdFundamental2 = 30;
    int qtdMedio = 50;

    ByteArrayOutputStream outStream = new ByteArrayOutputStream();
    System.setOut(new PrintStream(outStream));

    Portaria.emitirRelatorio(qtdFundamental1, qtdFundamental2, qtdMedio);

    String expectedOutput = "----- Quantidade -----\n" +
        "Ensino Fundamental I: 20\n" +
        "Ensino Fundamental II: 30\n" +
        "Ensino Médio: 50\n" +
        "\n" +
        "----- Percentual -----\n" +
        "Ensino Fundamental I: 20.0%\n" +
        "Ensino Fundamental II: 30.0%\n" +
        "Ensino Médio: 50.0%\n" +
        "\n" +
        "TOTAL: 100\n";

    String actualOutput = outStream.toString();
    assertEquals(expectedOutput, actualOutput);
  }

  @Test
  @DisplayName("8 - Implemente o método que registra as idades no acesso das pessoas estudantes")
  public void testColetarInformacoes() {
    String input = "1\n" + "14\n" + "1\n" + "16\n" + "1\n" + "10\n" + "2\n";
    String expectedOutput = "----- Quantidade -----\n" +
        "Ensino Fundamental I: 1\n" +
        "Ensino Fundamental II: 1\n" +
        "Ensino Médio: 1\n" +
        "\n" +
        "----- Percentual -----\n" +
        "Ensino Fundamental I: 33.33%\n" +
        "Ensino Fundamental II: 33.33%\n" +
        "Ensino Médio: 33.33%\n" +
        "\n" +
        "TOTAL: 3\n";

    InputStream sysInBackup = System.in;
    PrintStream sysOutBackup = System.out;

    try {
      ByteArrayInputStream inStream = new ByteArrayInputStream(input.getBytes());
      ByteArrayOutputStream outStream = new ByteArrayOutputStream();

      System.setIn(inStream);
      System.setOut(new PrintStream(outStream));

      Portaria.coletarInformacoes();

      String actualOutput = outStream.toString();
      assertTrue(actualOutput.contains(expectedOutput));
    } finally {
      System.setIn(sysInBackup);
      System.setOut(sysOutBackup);
    }

  }

  @Test
  @DisplayName("9 - Implemente a mensagem que para uma opção inválida")
  public void testColetarInformacoesOpcaoInvalida() {
    String input = "3\n" + "2\n";
    String expectedOutput = "Entre com uma opção válida!\n";

    InputStream sysInBackup = System.in;
    PrintStream sysOutBackup = System.out;

    try {
      ByteArrayInputStream inStream = new ByteArrayInputStream(input.getBytes());
      ByteArrayOutputStream outStream = new ByteArrayOutputStream();

      System.setIn(inStream);
      System.setOut(new PrintStream(outStream));

      Portaria.coletarInformacoes();

      String actualOutput = outStream.toString();
      assertTrue(actualOutput.contains(expectedOutput));
    } finally {
      System.setIn(sysInBackup);
      System.setOut(sysOutBackup);
    }
  }
}
