import { Alert, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Button from '@/components/Button/index';
import Input from '@/components/input/index';

export default function Home() {
  const [timeA, setTimeA] = useState(0)
  const [timeB, setTimeB] = useState(0)

  const [vitoriasA, setVitoriasA] = useState(0)
  const [vitoriasB, setVitoriasB] = useState(0)

  const MAX = 12

  const [jogoEncerrado, setJogoEncerrado] = useState(false)

  function atualizarPlacar(time: string, valor: number) {
    if (jogoEncerrado) return

    const placarAtual = time === 'A' ? timeA : timeB

    let placar = placarAtual + valor

      if (placar < 0) placar = 0
      if (placar > MAX) placar = MAX

      if (time === 'A') {
        setTimeA(placar)
      } else {
      setTimeB(placar)
      }

      if (placar === MAX) {
        setJogoEncerrado(true)
        if (time === 'A') {
          setVitoriasA(vitoriasA + 1)
        } else {
          setVitoriasB(vitoriasB + 1)
        }
        Alert.alert('Fim de jogo', `O time ${time} venceu!`)
        setTimeA(0);
        setTimeB(0);
        setJogoEncerrado(false);
      }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Time A {vitoriasA} x Time B {vitoriasB}</Text>
      <View style={styles.row} >
        <Input value={timeA.toString()} readOnly />
        <Input value={timeB.toString()} readOnly />
      </View>

      <View style={styles.row} >
        <Button titulo="+3"
          onPress={() => atualizarPlacar('A', 3)} />
        <Button titulo="+3"
          onPress={() => atualizarPlacar('B', 3)} />
      </View>

      <View style={styles.row} >
        <Button titulo="+1"
          onPress={() => atualizarPlacar('A', +1)} />
        <Button titulo="+1"
          onPress={() => atualizarPlacar('B', +1)} />
      </View>

      <View style={styles.row} >
        <Button titulo="-1"
          onPress={() => atualizarPlacar('A', -1)} />
        <Button titulo="-1"
          onPress={() => atualizarPlacar('B', -1)} />
      </View>

      <View style={[styles.row, { paddingTop: 32 }]}>
        <Button titulo="Zerar"
          onPress={() => {
            setTimeA(0);
            setTimeB(0);
            setJogoEncerrado(false);
          }} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
    paddingHorizontal: 24,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 16
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    color: 'black',
    padding: 16,
    fontWeight: 700
  }
});