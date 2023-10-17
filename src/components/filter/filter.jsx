import {Label,Div} from './filter.styled'
export const Filter = ({value,onFilter}) => {
    
    return (
        <Label><Div>Find contacts by names</Div>
            <input type="text" name="filter"                
        value={value}
        onChange={(evt)=>onFilter(evt.target.value)}
        ></input>
        </Label>
    )
}