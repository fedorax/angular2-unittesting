import { greet } from './greet';
import { getCurrencies } from './getCurrencies';

describe('greet', () => {
    it ('should include the name in the message', () => {
        const result = greet('Pieter');
        expect(result).toContain('Welcome Pieter');
    });

    it ('should check for listed currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});
    