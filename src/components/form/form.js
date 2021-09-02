import React, { useState } from "react"
import {TouchableOpacity, Text, TextInput, View,} from "react-native"
import ResultImc from "./resultImc/resultImc"
import styles from './styleForm'
import Title from "../title/title"
export default function Form(props) {

    const [height, setHeight] = React.useState(null)
    const [weight, setWeight] = React.useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
  
    function imcCalculator(){
        return setImc((weight / (height * height)).toFixed(2))
     }

     function validationImc() {
        if (weight != null && height != null) {
          imcCalculator()
          setHeight(null)
          setWeight(null)
          setMessageImc("Seu imc é igual:")
          setTextButton("Calcular Novamente")
          return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha os campos corretamente")
      }
    return (
    <View style={styles.formContext}>
      <Title/>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
        style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
        style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 86.500"
          keyboardType="numeric"
        />
        <TouchableOpacity
        style={styles.buttonCalculator}
        onPress={() => {
          validationImc()}}>
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
          
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  )}