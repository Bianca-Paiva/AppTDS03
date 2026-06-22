import React from "react";
import { View, Text, Image, TextInput, Button, ToastAndroid, Platform, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import { COLORS } from "../../theme/AppTheme";
import { RoundedButton } from "../../Components/RoundedButton";
import styles from '../../theme/RegisterStyles'

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
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <Image source={require('../../../../assets/img/chef.jpg')} style={styles.ImgBg} />

                <View style={styles.logoContainer}>
                    <Image source={require('../../../../assets/img/user_image.png')} style={styles.userImg} />
                    <Text style={styles.textoLogo}>Selecione uma imagem</Text>
                </View>

                {/* Formulário */}
                <View style={styles.form}>
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1 }}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                    >
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
                    </ScrollView>
                </View>
            </View>
        </KeyboardAvoidingView >
    )
}

