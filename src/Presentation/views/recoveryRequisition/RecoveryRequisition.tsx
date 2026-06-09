import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Alert, ToastAndroid, Platform } from 'react-native';

//Componentes
import { CustomTextInput } from "../../Components/CustomTextInput";
import { COLORS } from '../../theme/AppTheme'
import { RoundedButton } from "../../Components/RoundedButton";

//navegação
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParameList } from '../../../../App';

import useViewModel from './ViewModel'

export const RecoveryRequisitionScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParameList>>();

    const { userEmail, onChange, RecoveryRequisition } = useViewModel();

    return (
        <View style={styles.container}>

            <Image source={require('../../../../assets/img/chef.jpg')} style={styles.ImgBg} />

            <Text>Recuperar Senha</Text>

            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/img/user_image.png')} style={styles.userImg} />
                <Text style={styles.textoLogo}>Digite seu email</Text>
            </View>

            <View style={styles.form}>
                <CustomTextInput
                    image={require('../../../../assets/img/email.png')}
                    placeholder="Digite seu Email"
                    keyboardType="email-address"
                    secureTextEntry={false}
                    value={userEmail}
                    property="userEmail"
                    onChangeText={onChange}
                />

                <View style={{ marginTop: 40 }}>
                    <RoundedButton
                        text="Enviar Token"
                        onPress={() => {
                            RecoveryRequisition();

                            console.log('Sucesso: Token enviado');

                            navigation.navigate('RecoveryPasswordScreen');
                        }}
                    />
                </View>

            </View>
        </View>
    );
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
})
