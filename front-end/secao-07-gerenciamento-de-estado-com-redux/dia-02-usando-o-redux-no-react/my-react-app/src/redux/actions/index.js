export const actionCreator = (value) => {
    switch (value) {
        case 'incrementar':
         return  ({
                type: 'INCREMENT_COUNTER',
            })
        case 'Decrementar':
            return  ({
                type: 'DECREMENT_COUNTER',
            })
        default:
            return;
    }
}