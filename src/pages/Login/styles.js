import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 30
    },

    logo : {
        width: 80,
        height: 80,
        alignSelf: 'center'
    },

    input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#4EACDB',
        borderRadius: 10,
        fontSize: 20,
        paddingHorizontal: 20,
        marginTop: 20,
    },

    button: {
        height: 48,
        backgroundColor: '#4EACDB',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF'
    },

    toast: {
        backgroundColor: 'tomato',
    },

    toastText: {
        color: '#fff',
        fontSize: 20
    }

})

export default styles