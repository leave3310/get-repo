
interface Name {
    type: 'CHANGE_NAME',
    payload: string
}

export const changeName = (name: string): Name => ({
    type: 'CHANGE_NAME',
    payload: name
})

export type NameActionTypes = Name