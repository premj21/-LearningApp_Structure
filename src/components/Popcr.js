import React from 'react'
import { Box ,Image,Text,Link} from '@chakra-ui/react';

const Popcr = ({pic,name, des}) => {
  return (
    <>
    
    <Box
    position={'relative'}
    w={{ base:"300px",md:'200px',lg:"330px"}}
    h={{base:'150px',md:"100px", lg:"170px"}}
    borderRadius={'10px'}
    boxShadow="0px 5px 20px rgba(0,0,0,0.3)"
    transition={'0.3s'}
    padding={{base:'28px 45px',md:"9px 20px",lg:"28px 45px",}}
    _hover={{h:{base:'280px',md:"220px",lg:"280px"}}}
    className="twoone"
    >
    <Box
    position={'relative'}
    transform="translateY(-60px)"
    zIndex={11}
    >
        <Image 
        w='100%'
        borderRadius={'8%'}
        src={pic} alt='nothing'/>
    </Box>
    <Box
    className='onetwo'
    p={{lg:'7px 15px',base:"7px 15px",md:"0"}}
    textAlign={'center'}
    transform='translateY(-250px)'
    opacity={0}
    transition='0.3s'
    >
      <Text fontSize={{md:"1rem",lg:'1.3rem'}} pb='4px' fontWeight='500'>{name}</Text>
      <p  style={{paddingBottom:'4px'}}>{des}</p>
      <Link href='/'
      p={{base:'6px 15px',md:"5px 3px", lg:"6px 16px"}}
      border="1px solid black"
      className='atag'
       style={{textDecoration:'none'}}
       alt='nothing'>Learn More</Link>
    </Box>
    </Box>

    </>
  )
}

export default Popcr
