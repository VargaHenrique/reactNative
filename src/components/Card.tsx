import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

 


const Card = ({item}) => {
    
  const salvar = () => {
    Alert.alert(
        'Bookmark Pressed',
        'Your tweet is saved!',
        [
            {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
                style: 'cancel'
            }
        ],
        { cancelable: true }
    );
};

const seguir = () => {
  Alert.alert(
    'Seguir',
    'Você quer seguir esse usuario?',
    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancelar Pressed'),
        style: 'cancel',
      },
      {
        text: 'Seguir',
        onPress: () => console.log('seguir pressed'),
      },
      {
        text: 'Deixar de seguir o usuario',
        onPress: () => console.log('Deixar de seguir o usuario pressed'),
      }
     
    ],
  );
}; 



const compartilhar = () => {
  Alert.alert(
    'Compartilhamento',
    'Como deseja?',
    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancelar Pressed'),
        style: 'cancel',
      },
      {
        text: 'Copiar link',
        onPress: () => console.log('Copiar link pressed'),
      },
      {
        text: 'Compartilhar',
        onPress: () => console.log('Compartilhar pressed'),
      }
     
    ],
  );
}; 


const pontinhos = () => {
  Alert.alert(
    '...',
    '...',
    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancelar Pressed'),
        style: 'cancel',
      },
      {
        text: 'Bloquear usuário',
        onPress: () => console.log('Bloquear usuário pressed'),
      },
     
      {
        text: 'Denunciar post',
        onPress: () => console.log('Denunciar post pressed'),
      }
     
    ],
  );
};




  
  
  
  return (
        <>
        <View style={styles.rectangle}>
            <MaterialIcons name="keyboard-backspace" size={24} color="white" />
            <Text style={styles.text}>POSTAR</Text>
        </View>

        <View style={styles.separator}></View>

        <View style={styles.rectangle2}>
           
        <View style={styles.accountCircle}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Image
                        source={{ uri: item.avatar }}
                        style={{ width: 50, height: 50, borderRadius: 50 }} 
                        />
                    <Text style={styles.text3}>{item.username}</Text>
                    </View>
                    <TouchableOpacity style={styles.text2} onPress={seguir}>
                    <Text>SEGUIR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.density} onPress={pontinhos}>
                    <MaterialIcons name="density-medium" size={24} color="white" />
                    </TouchableOpacity>
                </View>
               
                
                <Text style={{color: '#fff'}}>{item.content}</Text>
                <View style={styles.square}>
                   
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: 300, height: 300 }} />
                </View>

                <View style={styles.separator2}></View>

                <View style={styles.rectangle3}>
                    <Text style={styles.content}>{item.comments}</Text>
                    <MaterialIcons name="message" size={20} color="white" />
                    <Text style={styles.content}>{item.reposts}</Text>
                    <MaterialIcons name="repeat" size={24} color="white" />
                    <Text style={styles.content}>{item.likes}</Text>
                    <Entypo name="heart" size={24} color="white" />
                    
                    <TouchableOpacity style={styles.bookmarkAction} onPress={salvar}>
                       <MaterialIcons name="bookmark-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareAction} onPress={compartilhar}>
                    <Feather name="share-2" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.separator3}></View>  
         </View>
                </>
    )
}

const styles = StyleSheet.create({
 
  
  
    text: {
     color: '#ffffff',
     marginTop: -21,
     left: 50
    },
  
    text2: {
      backgroundColor: 'white',
      borderRadius: 15, 
      padding: 4,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    text3: {
      color: '#ffffff',
      marginHorizontal: 10
    },
  
    container: {
      flex: 1,
      backgroundColor: '#06202F',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    square: {
      width: 300,
      height: 300,
      backgroundColor: '#ffffff',
      marginBottom: 20,
  
    },
    
    rectangle: {
      width: 300, // Largura do retângulo
      height: 30, // Altura do retângulo
      backgroundColor: '#06202F', // Cor de fundo do retângulo
      marginBottom: 20,
    },
    rectangle2: {
      width: 300, // Largura do retângulo
    //  height: 30, // Altura do retângulo
      backgroundColor: '#06202F', // Cor de fundo do retângulo
     
      marginBottom: 20,
    },
    rectangle3: {
      width: 300, // Largura do retângulo
     // height: 30, // Altura do retângulo
      backgroundColor: '#06202F', // Cor de fundo do retângulo
      flexDirection: 'row',
      justifyContent: 'space-around',
      top: -6,
      
    },
    imagem: {
      width: 30,
      height: 30,
    }, 
  
    separator: {
      width: 300,
      height: 1, // Altura da linha de separação
      backgroundColor: 'white', // Cor da linha de separação
      marginTop: -17,
      marginBottom: 20, // Espaçamento abaixo da linha de separação
    },
  
    separator2: {
      width: 300,
      height: 1, // Altura da linha de separação
      backgroundColor: 'white', // Cor da linha de separação
      marginTop: -10,
      marginBottom: 20, // Espaçamento abaixo da linha de separação
    },
  
    separator3: {
      width: 300,
      height: 1, // Altura da linha de separação
      backgroundColor: 'white', // Cor da linha de separação
      marginTop: -1,
      marginBottom: 20, // Espaçamento abaixo da linha de separação
    },
  
  
    seguir:{
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: 'center'
    },
  
    accountCircle:{
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    }, 

    content: {
        color: '#fff'
    }, 

    shareAction:{

    }, 
  
  
    bookmarkAction:{
  
  
    },

    density:{
      
    },



  
  });

export default Card