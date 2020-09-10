
const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'FILTER':
            console.log(action.data.filter)
            state = ''
            return [...state, action.data.filter]
        default:
            return state
    }
}

export const filterChange = (filter) => {
    return {
        type: 'FILTER',
        data: {
            filter: filter
        }
    }
}

export default filterReducer