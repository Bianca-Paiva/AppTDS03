import React, { useState } from "react";
import { View, Text, Image, ToastAndroid, Platform, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';

//Componentes
import { RoundedButton } from "../../Components/RoundedButton";
import { CustomTextInput } from "../../Components/CustomTextInput";
import { COLORS } from '../../theme/AppTheme';

//ViewModel
import HomeViewModel from "./ViewModel";

//importação dos elementos de navegação
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParameList } from '../../../../Aula03_App';
import styles from '../../theme/HomeStyles';

export const HomeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParameList>>();

    const { onChange, userEmail, userPassword, login } = HomeViewModel();


    const testOS = () => {
        if (Platform.OS === 'android') {
            ToastAndroid.show("Login realizado com sucesso!", ToastAndroid.SHORT);
        } else if (Platform.OS === 'web') {
            alert('Teste de Login! - WEB');
        } else {
            Alert.alert('Aviso', 'Teste de Login! - iPhone');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                {/* Imagem de Fundo */}
                <Image
                    source={require('../../../../assets/img/bg-smartphone.jpg')}
                    style={styles.ImgBg}
                />

                {/* Container do Logo */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../../../assets/img/logo.png')}
                        style={styles.logoImg}
                    />
                    <Text style={styles.logoTxt}>Restaurante | Pizzaria TITO</Text>
                </View>

                {/* Formulário Branco */}
                <View style={styles.frm}>

                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1 }}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                    >
                        <Text style={styles.frmTitle}>Entrar</Text>

                        <CustomTextInput
                            image={require('../../../../assets/img/user.png')}
                            placeholder="Digite seu Email / Usuário"
                            keyboardType="email-address"
                            secureTextEntry={false}
                            property="userEmail"
                            onChangeText={onChange}
                            value={userEmail}
                        />

                        <View>
                            <CustomTextInput
                                image={require('../../../../assets/img/password.png')}
                                placeholder="Digite a senha"
                                keyboardType="default"
                                secureTextEntry={true}
                                property="userPassword"
                                onChangeText={onChange}
                                value={userPassword}
                            />
                            <TouchableOpacity onPress={() => navigation.navigate('RecoveryRequisitionScreen')}>
                                <Text style={{ color: COLORS.secundary, marginTop: 10, textAlign: 'right' }}>Esqueci minha senha</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Botão de Entrar */}
                        <View style={{ marginTop: 40 }}>
                            <RoundedButton text="Login" onPress={() => login()} />
                        </View>

                        {/* Texto de Registro */}
                        <View style={styles.frmRegistre}>
                            <Text>Crie sua conta!</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                                <Text style={styles.txtRegistre}> Registre-se </Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </View>
            </View>
        </KeyboardAvoidingView >
    );
};
