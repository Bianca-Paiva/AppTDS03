import { StyleSheet } from "react-native";
import { COLORS } from "./AppTheme";

// Folha de estilo
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgBlack,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: '15%',
    },

    logoImg: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },

    ImgBg: {
        opacity: 0.8,
        width: '100%',
        height: '100%',
        bottom: '30%',
    },

    logoTxt: {
        color: COLORS.primary,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
        fontSize: 26,
    },

    frm: {
        width: '100%',
        height: '40%',
        backgroundColor: COLORS.bgColor,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
    },
    
    frmTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    frmRegistre: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },

    txtRegistre: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        borderBottomColor: COLORS.secundary,
        borderBottomWidth: 1,
        marginLeft: 5,
        color: COLORS.secundary,
    },
});

export default styles;