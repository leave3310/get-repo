import { NameActionTypes } from '@redux/actions/name'

interface NameState {
    name: string
}

const initialState: NameState = {
    name: 'leave3310'
}

const names = (state = initialState, action: NameActionTypes): NameState => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}

export default names