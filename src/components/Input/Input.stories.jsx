import Input from "./Input";

export default {
    title:"form/Input" , 
    component : Input,
    tags: ['autodocs'],
}

export const Small =()=><Input size='small' value="small input"/>
export const Medium =()=><Input size='medium' value="medium input"/>
export const Large =()=><Input size='large' value="large input"/>
export const Password =()=><Input type='password'value="password input"/>
export const Email =()=><Input type="email" value="email input"/>

