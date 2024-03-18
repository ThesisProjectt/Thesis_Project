import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './Paymentscreen';

function Payment() {
  return (
    <StripeProvider
      publishableKey="pk_test_51Ov6yNRqMF5Ty4zD8d61wVm1NM1z7AqjOLNYaD2hNpXUF38E9Q0hXmkfHloNrzKlloQGII97HcOAAXYgTYZtWTGB00Af0qD1Bj"
    //   urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    //   merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
    <PaymentScreen/>
    </StripeProvider>
  );
}

export default Payment