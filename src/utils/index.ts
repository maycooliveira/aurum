import APP from '../../configs/app';
import { Alert } from 'react-native';
import { showMessage } from 'react-native-flash-message';

const flashInfo = (message) => {
  showMessage({
    message: APP.NAME,
    icon: 'info',
    description: message ?? 'Notificação',
    type: 'info',
  });
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const flashError = (message, title = APP.NAME) => {
  showMessage({
    message: title,
    icon: 'danger',
    description: message,
    type: 'danger',
  });
};

const flashSuccess = (message) => {
  showMessage({
    message: APP.NAME,
    icon: 'success',
    description: message,
    type: 'success',
  });
};

const showAlert = (msg) => {
  Alert.alert(APP.NAME, msg);
};

const formatMoney = (n) => {
  if (n == null || n === 0) {
    return 'R$0,00';
  }
  return `R$ ${n
    .toFixed(2)

    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}`;
};

const confirmDenyMessage = (msg, action, cancelar, confirmTitle, cancelTitle) => {
  Alert.alert(APP.NAME, msg, [
    {
      text: cancelTitle ? cancelTitle : 'Cancelar',
      onPress: () => {
        cancelar && cancelar();
      },
    },
    {
      text: confirmTitle ? confirmTitle : 'OK',
      onPress: () => {
        action();
      },
    },
  ]);
};

export { flashError, flashSuccess, flashInfo, showAlert, delay, formatMoney, confirmDenyMessage };
