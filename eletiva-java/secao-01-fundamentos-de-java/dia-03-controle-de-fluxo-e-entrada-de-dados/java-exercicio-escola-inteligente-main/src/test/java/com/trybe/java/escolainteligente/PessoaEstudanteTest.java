package com.trybe.java.escolainteligente;

import static org.junit.jupiter.api.Assertions.*;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.PrintStream;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class PessoaEstudanteTest {

  @Test
  @DisplayName("1 - Implemente o método que calcule a idade da Pessoa Estudante em dias")
  public void testCalcularIdadeEmDias() {
    assertEquals(11769, PessoaEstudante.calcularIdadeEmDias(32, 2, 29));
    assertEquals(11404, PessoaEstudante.calcularIdadeEmDias(31, 2, 29));
  }

  @Test
  @DisplayName("2 - Faça com que o cálculo da idade retorne um valor do tipo inteiro")
  public void testCalcularIdadeEmDiasReturnType() {
    int days = PessoaEstudante.calcularIdadeEmDias(32, 2, 29);
    assertTrue(Integer.class.isInstance(days));
    assertEquals(11769, days);
  }

  @Test
  @DisplayName("3 - Implemente o método que coleta as informações da Pessoa Estudante")
  public void testColetarInformacoes() {
    String input = "Carla\n" + "2\n" + "6\n" + "15\n";
    String expectedOutput = "A idade de Carla em dias é 925.\n";

    InputStream sysInBackup = System.in;
    PrintStream sysOutBackup = System.out;

    try {
      ByteArrayInputStream inStream = new ByteArrayInputStream(input.getBytes());
      ByteArrayOutputStream outStream = new ByteArrayOutputStream();

      System.setIn(inStream);
      System.setOut(new PrintStream(outStream));

      PessoaEstudante.coletarInformacoes();

      String actualOutput = outStream.toString();
      assertTrue(actualOutput.contains(expectedOutput));
    } finally {
      System.setIn(sysInBackup);
      System.setOut(sysOutBackup);
    }
  }

}
