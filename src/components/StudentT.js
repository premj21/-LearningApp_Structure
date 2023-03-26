import React from 'react'
import { Avatar ,Box,Wrap,WrapItem ,Text} from '@chakra-ui/react'

const StudentT = () => {

    const pic = 'https://m.media-amazon.com/images/M/MV5BMzFkN2U0YTYtNzM0Zi00YTM5LThhMWMtNTBmN2RkY2Y0YjM5XkEyXkFqcGdeQXVyMzQwODQxNTU@._V1_.jpg';

  return (
    <>
    <Box
      w={{ base:"300px",md:'200px',lg:"330px"}}
    h={{base:'150px',md:"100px", lg:"170px"}}
    mb='2rem'
    >
        <Box
        position={'relative'}
        left='35%'
        top='20%'
        width='fit-content'
        boxShadow="0px 5px 15px rgba(0,0,0,0.4)"
        borderRadius={'50%'}
       
    >
<Wrap> 
     <WrapItem>
    <Avatar
    border={'1px solid black'}
     size={{base:"xl",md:"lg",lg:"xl"}}name='Segun Adebayo' src={pic} />
  </WrapItem>
        </Wrap>
    </Box>
    <Box
     position={'relative'}
    w={{ base:"300px",md:'200px',lg:"330px"}}
    h={{base:'150px',md:"100px", lg:"170px"}}
    borderRadius={'10px'}
    boxShadow="0px 5px 20px rgba(0,0,0,0.3)"
    padding={{base:'28px 45px',md:"9px 20px",lg:"28px 45px",}}
    display='flex'
    flexDir={'column'}
    justifyContent='center'
    alignItems={'center'}
    gap='1rem'
    overflowY={'scroll'}
    >
    <Text textAlign={'center'} mt='4rem'>
        this is the testominodjfgldjgflj of the students what they think about this n blah blahl 
        m just filling this nothing else writting anything lol .... this is coool ... !! 
        i think i should write little bit more 
    </Text>
    </Box>

    </Box>


    </>
  )
}

export default StudentT
