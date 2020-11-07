import { Currency, CurrencyExchangeObserver } from './example_1';
import {
  WeatherService,
  EmailNotificationListener,
  PushNotificationListener,
} from './example_2';

describe('Observer Pattern', () => {
  describe('Example 1 Tests', () => {
    it('should change the currency value dynamically', () => {
      const valueInEGP = new Currency();
      const dollarExchangeObserver = new CurrencyExchangeObserver(
        18,
        valueInEGP
      );
      valueInEGP.attach(dollarExchangeObserver);

      valueInEGP.value = 10;
      expect(dollarExchangeObserver.value).toBe(180);
    });

    it('should detach successfuly', () => {
      const valueInEGP = new Currency();
      const dollarExchangeObserver = new CurrencyExchangeObserver(
        18,
        valueInEGP
      );
      valueInEGP.attach(dollarExchangeObserver);

      valueInEGP.value = 20;
      valueInEGP.detach(dollarExchangeObserver);
      valueInEGP.value = 10;

      expect(dollarExchangeObserver.value).toBe(360);
    });
  });

  describe('Example 2 Tests', () => {
    const service = new WeatherService();
    const emailObserver = new EmailNotificationListener();
    const pushNotificationObserver = new PushNotificationListener();

    it('should send email on cold weather', () => {
      service.events.subscribe('cold', emailObserver);
      service.setWeather(10);
      service.setWeather(0);

      expect(emailObserver.updateCount).toBe(1);
    });

    it('should send push notification on hot weather', () => {
      service.events.subscribe('hot', pushNotificationObserver);
      service.setWeather(30);
      service.setWeather(32);

      expect(pushNotificationObserver.updateCount).toBe(1);
    });

    it('should detach listeners', () => {
      service.events.unsubscribe('cold', emailObserver);
      service.events.unsubscribe('hot', pushNotificationObserver);
      service.setWeather(0);
      service.setWeather(40);

      expect(emailObserver.updateCount).toBe(1);
      expect(pushNotificationObserver.updateCount).toBe(1);
    });
  });
});
