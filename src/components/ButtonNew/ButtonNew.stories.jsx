import ButtonNew from './ButtonNew';


export default {
  component: ButtonNew,
  title: 'ButtonNew',
  tags: ['autodocs'],
};


export const Primary = {
  args: {
    variant :"primary" , 
    children :"Primary Button"
  },
};

export const Secondry = {
  args: {
    variant :"secondry" , 
    children :"Secondry Button"
  },
};

export const Success = {
  args: {
    variant :"success" , 
    children :"Success Button"
  },
};
export const Danger = {
  args: {
    variant :"danger" , 
    children :"Danger Button"
  },
};



// const Template = args => <ButtonNew {...args}/>


// export const Primary = Template.bind({})
// Primary.args ={
//   variant :"primary" , 
//   children :"Primary Button"
// }

// export const Secondry = Template.bind({})
// Secondry.args ={
//   variant :"secondry" , 
//   children :"Secondry Button"
// }

// export const Success = Template.bind({})
// Success.args ={
//   variant :"success" , 
//   children :"Success Button"
// }

// export const Danger = Template.bind({})
// Danger.args ={
//   variant :"danger" , 
//   children :"Danger Button"
// }
// export const Primary =()=> <ButtonNew variant={'primary'}>Primary Button </ButtonNew>

// export const Secondry =()=> <ButtonNew variant={'secondry'}>Secondry Button </ButtonNew>

// export const Success =()=> <ButtonNew variant={'success'}>Success Button </ButtonNew>

// export const Danger =()=> <ButtonNew variant={'danger'}>Danger Button </ButtonNew>

