import { Box, HStack } from '@chakra-ui/react'
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import React, { useState } from 'react'

const Navbar = () => {
   const [st,setst] = useState({
    cross:'none',
    line:'set'
   });

       const opnt = {
     initial: {
       x: 0,
       opacity: 0,
     },
     whileInView: {
       x: '-100',
       opacity: 10,
     },
   };
  return (
    <>
    <Box
    display={st.cross}
    position="absolute"
     right='0.5'
    top='3.8rem'
    zIndex={'2'}
    >

    <Box 
    display={'flex'}
    flexDirection='column'
    border={'1px solid white'}
    
    >
      <a 
       style={{padding:'1rem',background:'black',color:'white'}}
      href='./About'>Home</a>
      <a 
        style={{padding:'1rem',background:'black',color:'white'}}
      href='./Course'>Courses</a>
      <a 
         style={{padding:'1rem',background:'black',color:'white'}}
      href='./About'>About</a>
      <a 
    style={{padding:'1rem',background:'black',color:'white'}}
      href='./Contact'>Contact</a>
    </Box>

    </Box>

    <Box  h='5rem'  display='flex' justifyContent={'space-between'} alignItems='center'
     >
    <motion.a  {...opnt}  style={{fontSize:"2.3vmax",fontWeight:"430"}} href='/'>NameProj</motion.a>
 <HStack gap={'4rem'} display={{base:'none',md:'flex' }} >
    <li> <motion.a  {...opnt}transition={{ delay: 0.7 }} style={{fontSize:"1.22vmax"}}  href='./'>Home</motion.a></li>
    <li> <motion.a  {...opnt} transition={{ delay: 0.6 }}style={{fontSize:"1.22vmax"}}  href='./Course'>Course</motion.a></li>
    <li> <motion.a  {...opnt} transition={{ delay: 0.4 }}  style={{fontSize:"1.22vmax"}}  href='./About'>About</motion.a></li>
    <li> <motion.a  {...opnt}transition={{ delay: 0.5 }} style={{fontSize:"1.22vmax"}} href='./Contact'>Contact</motion.a></li>
 </HStack>


 <Box display={{base:'flex',md:'none'}}>
    <Box onClick={()=>setst({line:'none',cross:'set'})}
    display={st.line}
    >
    <FormatListBulletedSharpIcon
    />
    </Box>
    <Box
    onClick={()=>setst({line:'set',cross:'none'})}
    display={st.cross}
    >

    <CloseIcon />
    </Box>

 </Box>
</Box>





{/* {{ base: '24px', md: '40px', lg: '56px' }} */}


    </>
  )
}

export default Navbar
