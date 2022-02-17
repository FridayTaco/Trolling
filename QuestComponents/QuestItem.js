import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';


export default function QuestItem({item, Click}) {
    return(
        <TouchableOpacity 
            onPress={() => Click(item.key)}
            style={styles.touch}>
            <Image
                style={styles.image}
                source={require('/home/david/Documentos/Trolling/QuestComponents/Pics/bullet.jpeg')} 
            />
            <Text style={styles.quest}>{item.name}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    touch: {
        flexDirection: 'row',
        borderWidth:1,
        padding: 10,
        borderRadius: 5,
        margintop: 10,
        borderStyle: 'dotted',
        marginTop: 10
    },
    quest: {
        fontSize: 20,
        textAlignVertical: 'center',
        padding:10,
        marginTop: 5
    },
    image: {
        height: 20,
        width: 12.3,
        marginop: 10,
        alignSelf: 'center'
    }
})