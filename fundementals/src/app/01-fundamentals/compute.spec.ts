import { compute } from './compute';

describe('Component: Compute component', () => {
    it ('should return zero given negative number', () => {
        const result = compute(-1); 
        expect(result).toBe(0);       
    });
    it ('should return increment given positive number', () => {
        const result = compute(1); 
        expect(result).toBe(2);       
    });
});
    