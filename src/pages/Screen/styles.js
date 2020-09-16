import { StyleSheet } from 'react-native'


export default StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
        },
        title: {
          textAlign: 'center',
          marginTop: 25,
          fontSize: 30,
          paddingBottom: 30
        },
        button: {
          justifyContent: 'center',
          alignSelf: 'center',
          flexDirection:'row',
          margin: 15,
          backgroundColor: 'grey',
          padding: 10,
          borderRadius: 5,
          width: 150,
          shadowOffset: { width: 0, height: .95 },
          shadowOpacity: 0.5,
          shadowRadius: 3,
        },
      
        input: {
          backgroundColor: '#fff',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: .95 },
          shadowOpacity: 0.5,
          shadowRadius: 3,
          borderRadius: 5,
          margin: 10,
          padding: 10,
          width: 325,
          borderColor: "red",
        },
        buttonText: {
          color: '#fff',
          fontSize: 25
        },
        names: {
          flexDirection: 'row',
        },
        fab1:{
          position: 'absolute',
          width: 30,
          height: 30, 
          alignItems: 'center',
          justifyContent: 'center',
          right: 15,
          bottom: 13,
          margin: 10,
          padding: 10,
        },
      
});