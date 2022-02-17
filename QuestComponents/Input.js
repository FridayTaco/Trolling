import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

export default function Data({submitQuest}) {

    const [text, setText]=useState('');

    const newQuest=(val) => {
        setText(val);
    }

    return(
        <View>
            <View style={styles.viewInput}>
                <TextInput
                style={styles.input}
                defaultValue='New Quest'
                onChangeText={newQuest}
                />
            </View>
            <View style={styles.viewButton}>
                <Button onPress={() => submitQuest(text)} title='Accept new quest' color='#228b22' />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        fontSize: 20,
        borderStyle: 'dashed'
    },
    viewInput: {
        marginTop: 50,
        marginBottom: 50,
        paddingLeft: 40,
        paddingRight: 40,
    },
    viewButton: {
        paddingLeft: 100,
        paddingRight: 100,
    }
})