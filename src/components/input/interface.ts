export interface IInput {
    type: string,
    name: string,
    value: string,
    placeholder: string,
    onChange: (event: string) => void,
}