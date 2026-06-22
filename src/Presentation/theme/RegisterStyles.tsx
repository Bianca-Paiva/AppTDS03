import { StyleSheet } from "react-native";
import { COLORS } from "./AppTheme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgBlack,
        alignItems: 'center',
        justifyContent: 'center',
    },

    ImgBg: {
        opacity: 0.8,
        width: '100%',
        height: '100%',
        bottom: '30%',
    },

    logoContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: '5%',
    },

    userImg: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },

    textoLogo: {
        color: COLORS.bgColor,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
        fontSize: 26,
    },

    form: {
        width: '100%',
        height: '74%',
        backgroundColor: COLORS.bgColor,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
    },

    tituloForm: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    formInput: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
    },

    formIco: {
        width: 25,
        height: 25,
        marginTop: 10,
    },

    txtInput: {
        flex: 1,
        marginLeft: 15,
        borderBottomColor: '#CCC'
    },
})

export default styles;