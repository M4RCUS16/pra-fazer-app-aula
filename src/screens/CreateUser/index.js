import React, { useState } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'

export default function CreateUser({navigation}) {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorCreateUser, setErrorCreateUser] = useState(null)

    function validate() {
        if (nome == "") {
            setErrorCreateUser("informe o seu nome")
        } else if (email == "") {
            setErrorCreateUser("informe seu email")
        } else if (password == "") {
            setErrorCreateUser("informe uma senha")
        } else {
            setErrorCreateUser(null)
            // caso não haja erro chama a função de criação de usuario
            createUser();
        }
    }

    function createUser() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            //direcionado o usuario para as telas internas do app
            navigation.navigate('Tabs')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // mostra o erro para o usuario
            setErrorCreateUser(errorMessage)
          
          });
    }

    return (
        <View style={styles.container}>
            {errorCreateUser != null && (
                <Text style={styles.alert}>{errorCreateUser}</Text>
            )}

            <TextInput
                style={styles.input}
                placeholder='Nome'
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={validate}
            >
                <Text style={styles.textButton}>Criar usuário</Text>
            </TouchableOpacity>
        </View>
    )
}