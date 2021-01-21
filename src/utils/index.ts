import APP from '../../configs/app';
import { Alert } from 'react-native';
import { showMessage } from 'react-native-flash-message';

const flashInfo = (message: string) => {
  showMessage({
    message: APP.NAME,
    icon: 'info',
    description: message ?? 'Notificação',
    type: 'info',
  });
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const flashError = (message: string, title = APP.NAME) => {
  showMessage({
    message: title,
    icon: 'danger',
    description: message,
    type: 'danger',
  });
};

const flashSuccess = (message: string) => {
  showMessage({
    message: APP.NAME,
    icon: 'success',
    description: message,
    type: 'success',
  });
};

const showAlert = (msg: string) => {
  Alert.alert(APP.NAME, msg);
};

export { flashError, flashSuccess, flashInfo, showAlert, delay };
