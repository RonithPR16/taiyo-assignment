export const getUniqueId = (idLength:number = 10):string => {
    let randomLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*(){}';
    let str=''
    for (let i = 0; i <= idLength; i++){
        const randomIndex = Math.floor(Math.random() * idLength);
        str += randomLetters[randomIndex];
    }
    return str;
}