import React from "react";
import { StyleSheet, View, Text, Image, TextInput, Button, ToastAndroid, Platform, Alert,  } from 'react-native';
import { COLORS } from "../../theme/AppTheme";
import { RoundedButton } from "../../Components/RoundedButton";

export const RegisterScreen = () => {
    const testOS = () => {
        if (Platform.OS === 'android') {
            // Android: mostra o Toast nativo
            ToastAndroid.show("Teste de Cadastro - Android!", ToastAndroid.SHORT);
        } else if (Platform.OS === 'web') {
            // Navegador: usa o alert do JS clássico
            alert("Teste de Cadastro!");
        } else {
            // iOS: usa o Alert nativo do iPhone
            Alert.alert("Teste de Cadastro!");
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/img/chef.jpg')} style={styles.ImgBg} />

            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/img/user_image.png')} style={styles.userImg} />
                <Text style={styles.textoLogo}>Selecione uma imagem</Text>
            </View>

            {/* Formulário */}
            <View style={styles.form}>
                <Text style={styles.tituloForm}>Registre-se</Text>


                {/* Input de nome */}
                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/img/user.png')}
                        style={styles.formIco}
                    />
                    <TextInput
                        placeholder="Digite seu Nome"
                        keyboardType="default"
                        style={styles.txtInput}
                    />
                </View>

                {/* Input de nome de usuário */}
                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/img/my_user.png')}
                        style={styles.formIco}
                    />
                    <TextInput
                        placeholder="Digite seu Nome de Usuário"
                        keyboardType="default"
                        style={styles.txtInput}
                    />
                </View>

                {/* Input de Usuário/Email */}
                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/img/email.png')}
                        style={styles.formIco}
                    />
                    <TextInput
                        placeholder="Digite seu Email"
                        keyboardType="email-address"
                        style={styles.txtInput}
                    />
                </View>

                {/* Input de Telefone */}
                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/img/phone.png')}
                        style={styles.formIco}
                    />
                    <TextInput
                        placeholder="Digite seu Telefone"
                        keyboardType="phone-pad"
                        style={styles.txtInput}
                    />
                </View>

                {/* Input de Senha */}
                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/img/password.png')}
                        style={styles.formIco}
                    />
                    <TextInput
                        placeholder="Digite a senha"
                        secureTextEntry
                        style={styles.txtInput}
                    />
                </View>

                {/* Input de confirmação de Senha */}
                <View style={styles.formInput}>
                    <Image
                        source={require('../../../../assets/img/confirm_password.png')}
                        style={styles.formIco}
                    />
                    <TextInput
                        placeholder="Confirme a senha"
                        secureTextEntry
                        style={styles.txtInput}
                    />
                </View>

                {/* Botão de Entrar */}
                <View style={{ marginTop: 30 }}>
                    <RoundedButton
                        text="Cadastre-se"
                        onPress={testOS}
                    />
                </View>
            </View>
        </View>
    )
}

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
