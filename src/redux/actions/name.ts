import { allUser } from '@interfaces/allUser'

interface Name {
    type: 'CHANGE_NAME',
    payload: string
}

interface Loading {
    type: 'LOADING',
    payload: boolean
}

interface List {
    type: 'SET_LIST',
    payload: allUser[] | []
}

interface HasNextPage {
    type: 'HAS_NEXT_PAGE',
    payload: boolean
}

interface Page {
    type: 'SET_PAGE',
    payload: number
}

interface SetError {
    type: 'SET_ERROR',
    payload: Error
}

const setLoading = (loading: boolean): Loading => ({
    type: 'LOADING',
    payload: loading
})

const setList = (allUser: allUser[]): List => ({
    type: 'SET_LIST',
    payload: allUser
})

const setHasNextPage = (hasNextPage: boolean): HasNextPage => ({
    type: 'HAS_NEXT_PAGE',
    payload: hasNextPage
})

const setPage = (page: number): Page => ({
    type: 'SET_PAGE',
    payload: page
})

const setError = (err: Error): SetError => ({
    type: 'SET_ERROR',
    payload: err
})

const setName = (name: string): Name => ({
    type: 'CHANGE_NAME',
    payload: name
})

export {
    setLoading,
    setList,
    setHasNextPage,
    setPage,
    setError,
    setName,
}

export type NameActionTypes = Name | Loading | List | HasNextPage | Page | SetError