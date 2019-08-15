import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 30
    },

    body: {
        flex: 3,
        justifyContent: 'flex-end',
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

    buttonSign: {
        height: 48,
        backgroundColor: '#4EACDB',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonLogin: {
        height: 48,
        borderColor: '#4EACDB',
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

    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 40
    },

    buttonTextLogin: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#4EACDB'
    },toast: {
        backgroundColor: 'tomato',
    },

    toastText: {
        color: '#fff',
        fontSize: 20
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