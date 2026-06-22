import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Image, Platform, ScrollView } from 'react-native';

// components
import { RoundedButton } from "../../Components/RoundedButton";
import { CustomTextInput } from "../../Components/CustomTextInput";
import styles from '../../theme/RecoveryPasswordStyles'

//navegação
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParameList } from '../../../../Aula03_App';

// View
import useViewModel from './ViewModel';

export const RecoveryPasswordScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParameList>>();
    const { userEmail, userPassword, userConfirmPassword, userToken, onChange, redefinirSenha } = useViewModel();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <Image source={require('../../../../assets/img/chef.jpg')} style={styles.ImgBg} />

                <View style={styles.logoContainer}>
                    <Image source={require('../../../../assets/img/user_image.png')} style={styles.userImg} />
                    <Text style={styles.textoLogo}>Digite seu Token</Text>
                </View>

                {/* Formulário */}
                <View style={styles.form}>

                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1 }}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                    >

                        {/* Input de token */}
                        <CustomTextInput
                            image={require('../../../../assets/img/user_menu.png')}
                            placeholder="Digite o token recebido por email"
                            keyboardType="numeric"
                            value={userToken}
                            onChangeText={onChange}
                            secureTextEntry={false}
                            property="userToken"
                        />


                        {/* Input Email */}
                        <CustomTextInput
                            image={require('../../../../assets/img/email.png')}
                            placeholder="Digite seu email"
                            keyboardType="email-address"
                            value={userEmail}
                            onChangeText={onChange}
                            secureTextEntry={false}
                            property="userEmail"
                        />

                        {/* Input de Senha */}
                        <CustomTextInput
                            image={require('../../../../assets/img/password.png')}
                            placeholder="Digite sua nova senha"
                            keyboardType="default"
                            value={userPassword}
                            onChangeText={onChange}
                            secureTextEntry={true}
                            property="userPassword"
                        />

                        {/* Input de confirmação de Senha */}
                        <CustomTextInput
                            image={require('../../../../assets/img/confirm_password.png')}
                            placeholder="Confirme sua nova senha"
                            keyboardType="default"
                            value={userConfirmPassword}
                            onChangeText={onChange}
                            secureTextEntry={true}
                            property="userConfirmPassword"
                        />

                        {/* Botão para concluir */}
                        <View style={{ marginTop: 30 }}>
                            <RoundedButton
                                text="Concluir"
                                onPress={() => {
                                    console.log('Sucesso: Senha alterada');

                                    redefinirSenha();

                                    navigation.navigate('HomeScreen');
                                }}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}