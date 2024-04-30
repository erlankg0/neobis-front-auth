export interface IValid{
    validLength: boolean,
    hasLowercase: boolean,
    hasUppercase: boolean,
    hasNumber: boolean,
    hasSpecialChar: boolean,
}
export interface ISingUp {
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
    handleSetEmail: (email: string) => void,
    handleSetUserName: (username: string) => void,
    handleSetPassword: (password: string) => void,
    handleSetConfirmPassword: (password: string) => void,
    validatePassword: (password: string)=> IValid,
}

