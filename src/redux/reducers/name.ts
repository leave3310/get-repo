import { NameActionTypes } from '@redux/actions/name'
import { allUser } from '@interfaces/allUser'

export interface NameState {
    name: string,
    loading: boolean,
    hasNextPage: boolean,
    list: allUser[],
    error: Error | null,
    page: number
}

const initialState: NameState = {
    name: 'leave3310',
    loading: false,
    hasNextPage: true,
    list: [],
    page: 1,
    error: null
}

const names = (state = initialState, action: NameActionTypes): NameState => {
    switch (action.type) {
        case 'LOADING': {
            const loading = action.payload            
            return {
                ...state,
                loading
            }
        }
        case 'SET_LIST': {
            const list = action.payload
            return {
                ...state,
                list
            }
        }
        case 'HAS_NEXT_PAGE': {
            const hasNextPage = action.payload
            return {
                ...state,
                hasNextPage
            }
        }
        case 'SET_PAGE': {
            const page = action.payload
            return {
                ...state,
                page
            }
        }
        case 'SET_ERROR': {
            const error = action.payload
            return {
                ...state,
                error
            }
        }
        case 'CHANGE_NAME': {
            const name = action.payload

            return {
                ...state,
                name
            }
        }
        default:
            return state
    }
}

export default names