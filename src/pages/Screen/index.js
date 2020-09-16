import React, { useState }from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles.js'


export default function App(){
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectButton}>
         <Text style={styles.title}>Selecionar Imagem</Text>
      </TouchableOpacity>

     <View>
        <Icon style={styles.fab1} name="user" size={25} color="grey"/>
        <TextInput style={styles.input} 
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite seu nome" 
        placeholderTextColor="black" 
        // value={name}
        // onChangeText={text => setName(text)}
         />
     </View>

     <View>
        <Icon style={styles.fab1} name="address-book" size={25} color="grey"/>
        <TextInput style={styles.input} 
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite sua idade" 
        placeholderTextColor="black" 
        // value={age}
        // onChangeText={text => setAge(text)}
        />
     </View>

     <View>
        <Icon style={styles.fab1} name="transgender-alt" size={25} color="grey"/>
        <TextInput style={styles.input} 
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite seu gênero" 
        placeholderTextColor="black" 
        // value={genre}
        // onChangeText={text => setGenre(text)}
        />
     </View>

     <View>
        <Icon style={styles.fab1} name="at" size={25} color="grey"/>
        <TextInput style={styles.input} 
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite seu email" 
        placeholderTextColor="black" 
        // value={email}
        // onChangeText={text => setEmail(text)}
        />
     </View>

     <View>
        <Icon style={styles.fab1} name="phone" size={25} color="grey"/>
        <TextInput style={styles.input} 
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite seu número" 
        placeholderTextColor="black" 
        // value={number}
        // onChangeText={text => setNumber(text)}
        />
     </View>

    <View>
      <Icon style={styles.fab1} name="home" size={25} color="grey"/>
      <TextInput style={styles.input} 
      autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite seu endereço" 
        placeholderTextColor="black" 
        // value={addres}
        // onChangeText={text => setAddres(text)}
        />
    </View>

    <View>
      <Icon style={styles.fab1} name="lock" size={25} color="grey"/>
      <TextInput style={styles.input} 
      secureTextEntry={true} 
      autoCorrect={false}
      autoCapitalize="none"
      placeholder="Digite sua senha" 
      placeholderTextColor="black" 
      // value={pass}
      // onChangeText={text => setPass(text)}
      />

    </View>
     <TouchableOpacity style={styles.button}>
       <Text style={styles.buttonText}>Salvar</Text>
     </TouchableOpacity>
    </View>
  );
}