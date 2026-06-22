import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Alert, ToastAndroid, Platform } from 'react-native';

//Componentes
import { CustomTextInput } from "../../Components/CustomTextInput";
import { RoundedButton } from "../../Components/RoundedButton";
import styles from '../../theme/RecoveryRequisitionStyles'

//navegação
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParameList } from '../../../../Aula03_App';

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

