export const Auto = {
    number: 0,
    res: 1,

    calcul(operation) {
        switch (operation) {
            case 'PLUS':
                this.res++
                break;
            case 'FOIS':
                this.res *= this.number
                break;
            default:
                break;
        }
    },

    getRes() {
        return this.res
    }
}