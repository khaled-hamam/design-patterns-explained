import { NotificationService, PubSub, UsersMetricsService, UsersService } from '.';

describe('Mediator Pattern/Example 1', () => {
  it('should fire metrics and notification services on new user', () => {
    jest.spyOn(NotificationService.prototype, 'onNewUser');
    jest.spyOn(UsersMetricsService.prototype, 'onNewUser');

    const emitter = new PubSub();
    const usersService = new UsersService(emitter);
    const notificationService = new NotificationService(emitter);
    const metricsService = new UsersMetricsService(emitter);

    usersService.createUser('fake@email.com', 'fake_password');

    expect(metricsService.onNewUser).toBeCalledTimes(1);
    expect(metricsService.onNewUser).toBeCalledWith('fake@email.com');

    expect(notificationService.onNewUser).toBeCalledTimes(1);
    expect(notificationService.onNewUser).toBeCalledWith('fake@email.com');
  });
});
