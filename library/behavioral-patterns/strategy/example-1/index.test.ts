import { EmailNotifier, ErrorNotifier, SlackNotifier } from '.';

describe('Strategy Pattern/Example 1', () => {
  let errorNotifier: ErrorNotifier;
  let slackNotifySpy: jest.SpyInstance;
  let emailNotifySpy: jest.SpyInstance;

  let slackNotifier: SlackNotifier;
  let emailNotifier: EmailNotifier;

  beforeAll(() => {
    slackNotifier = new SlackNotifier('FAKE_API_KEY');
    emailNotifier = new EmailNotifier('fake@email.com');

    slackNotifySpy = jest.spyOn(slackNotifier, 'notify');
    emailNotifySpy = jest.spyOn(emailNotifier, 'notify');
  });

  beforeEach(() => {
    slackNotifySpy.mockReset();
    emailNotifySpy.mockReset();
  });

  it('should notify on slack', () => {
    errorNotifier = new ErrorNotifier(3, 'SlackNotifierError', slackNotifier);

    errorNotifier.registerError();
    errorNotifier.registerError();
    errorNotifier.registerError();

    const expectedCalls = 1;
    const expectedMessage = 'You exceeded your error threshold in SlackNotifierError';

    expect(slackNotifySpy).toBeCalledTimes(expectedCalls);
    expect(emailNotifySpy).toBeCalledTimes(0);
    expect(slackNotifySpy).toBeCalledWith(expectedMessage);
  });

  it('should notify on email', () => {
    errorNotifier = new ErrorNotifier(3, 'EmailNotifierError', emailNotifier);

    errorNotifier.registerError();
    errorNotifier.registerError();
    errorNotifier.registerError();

    const expectedCalls = 1;
    const expectedMessage = 'You exceeded your error threshold in EmailNotifierError';

    expect(emailNotifySpy).toBeCalledTimes(expectedCalls);
    expect(slackNotifySpy).toBeCalledTimes(0);
    expect(emailNotifySpy).toBeCalledWith(expectedMessage);
  });
});
