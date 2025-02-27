import { LocalesService } from './locales.service';

describe('LocalesService', () => {
  let service: LocalesService;
  const mockLocale = 'en';
  const mockDocument: Pick<Document, 'cookie'> = {
    cookie: '',
  };

  beforeEach(() => {
    service = new LocalesService(mockLocale, mockDocument as Document);
  });

  it('should return current locale', () => {
    expect(service.currentLocale).toEqual('en');
  });

  it('should set locale cooke', () => {
    service.setLocaleCookie('en');
    expect(mockDocument.cookie).toEqual('bb-locale=en;');
  });
});
