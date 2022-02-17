import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function Header() {
    return (
            <View style={styles.head}>
                <Image 
                style={styles.star}
                source={require('/home/david/Documentos/Trolling/QuestComponents/Pics/starm.png')} 
                />
                <Text style={styles.headtext}>Main Quests</Text>
            </View>
    )
}

const styles=StyleSheet.create({
    head: {
        backgroundColor: '#228b22',
        flexDirection: 'row',
        alignContent: 'center',
        height: 60,
        alignItems:'center',
    },
    headtext: {
        color: "white",
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        marginTop: 8
    },
    star: {
        marginLeft: 20,
        height: 30,
        width: 30,
    }
})