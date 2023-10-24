package com.trybe.java.escolainteligente;

import static org.junit.jupiter.api.Assertions.*;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.PrintStream;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class SecretariaTest {

  @Test
  @DisplayName("4 - Escreva um método que calcule a média anual da pessoa estudante")
  public void testCalcularMedia() {
    assertEquals(9.52, Secretaria.calcularMedia(9.85, 9.58, 9.90, 8.75), 0.001);
    assertEquals(8.2625, Secretaria.calcularMedia(7.80, 6.5, 10.00, 8.75), 0.001);
  }

  @Test
  @DisplayName("5 - Faça com que o cálculo da média retorne um valor do tipo Double")
  public void testCalcularMediaReturnType() {
    double avg = Secretaria.calcularMedia(7.80, 6.5, 10.00, 8.75);
    assertTrue(Double.class.isInstance(avg));
    assertEquals(8.2625, avg);
  }

  @Test
  @DisplayName("6 - Implemente o método que coleta as notas da Pessoa Estudante")
  public void testColetarInformacoes() {
    String input = "Carla\n" + "8.5\n" + "7.2\n" + "6.8\n" + "9.0\n";
    String expectedOutput = "A média das notas de Carla é 7.875\n";

    InputStream sysInBackup = System.in;
    PrintStream sysOutBackup = System.out;

    try {
      ByteArrayInputStream inStream = new ByteArrayInputStream(input.getBytes());
      ByteArrayOutputStream outStream = new ByteArrayOutputStream();

      System.setIn(inStream);
      System.setOut(new PrintStream(outStream));

      Secretaria.coletarInformacoes();

      String actualOutput = outStream.toString();
      assertTrue(actualOutput.contains(expectedOutput));
    } finally {
      System.setIn(sysInBackup);
      System.setOut(sysOutBackup);
    }
  }
}
