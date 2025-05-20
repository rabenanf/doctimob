export const Validator = () => {
    return {
        isValidEmail : (email: string): boolean => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
    }
}
