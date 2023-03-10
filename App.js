//Notifications
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';
//Tab Navigation
import TabNavigation from './navigation/TabNavigation';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    //Referente as Notificações ao iniciar o app
      registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      }; 
    //--FIM
  }, []);

  return (
    <TabNavigation/>
  );
}

//Função de notificação interna.
async function inPushNotification(title, message) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: {title},
      body: {message},
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

//Fução que GERA o Token do dispositivo para Push Notification
async function registerForPushNotificationsAsync() {
  let token;
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Falha ao gerar o Token do aparelho para push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Use um aparelho físico para o Push Notifications');
  }

  return token;
}

