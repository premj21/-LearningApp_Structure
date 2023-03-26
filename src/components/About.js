import React from 'react'
import { Box,Image,Text} from '@chakra-ui/react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import pic from '../pics/ach.png';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import OutT from './OutT';

import striver from '../pics/striver.jpg'; 
import friyansh from '../pics/friyansh.jpg';
import frem from '../pics/Frem.jpg';
import shreyansh from '../pics/shreyansh.jpg';
import franav from '../pics/Franav.jpg';
import fratham from '../pics/Fratham.jpg';
import yashya from '../pics/yashraj.jpg'
import khistya from '../pics/kshitij.jpg';






const About = () => {


  const dt = [
    {
    pic:striver,
    name:'Striver',
    des:'Revolution expert',
    },
     {
    pic:friyansh,
    name:'Priyansh',
    des:'CP expert',
    },
     {
    pic:frem,
    name:'Prem',
    des:'Expert expert',
    },
     {
    pic:franav,
    name:'Pranav',
    des:'Xyzz expert',
    },
      {
    pic:shreyansh,
    name:'Shreyansh',
    des:'Yzyzx expert',
    },
     {
    pic:fratham,
    name:'Pratham',
    des:'Yxxz expert',
    },
     {
    pic:yashya,
    name:'Yash',
    des:'Zyxx expert',
    },
     {
    pic:khistya,
    name:'Kshitij',
    des:'XyzZ expert',
    },
  ]


  return (
   <>
   <Box  w='100%' display={'flex'} flexWrap={'wrap'} alignContent='flex-start'
   alignItems={'center'} justifyContent={'center'} mb='2rem'>
    <Box w={{base:"100", md:"50%"}}>
      <Image src={pic} alt='no pic'/>
    </Box>

    <Box  w={{base:"100", md:"50%"}} display='flex' flexDirection={'column'} mt='1rem' justifyContent={{base:"center",md:"flex-start"}} gap='1rem'  >

      <Text fontSize={{base:'2.8vmax',md:'2.3vmax',lg:'2.8vmax'}} textAlign={{base:"center",md:"flex-start",lg:"flex-start"}} fontWeight='500'>Achievements</Text>

      <Text fontSize={{base:'1.6vmax',md:'1.2vmax',lg:'1.6vmax'}} textAlign={{base:'center',sm:'start'}}>this is nothing but des and i am writting here anything just to fill this completely 
        n i love writting anything hahahah lol bhai little bit more 
      </Text>




<Box display='flex' flexDirection={{base:'column',md:'row'}} gap='1rem' 
alignItems={'center'}
 >
     <Box w={{base:"80%",md:'35%'}}
     borderRadius={'10px'}
    boxShadow="0px 5px 20px rgba(0,0,0,0.3)"
    display='flex'
    flexDir={'column'}
    justifyContent='center'
    alignItems={'center'}
    p='1rem'
    border='10px solid white'
    h='170px'
     >
      <Box m='auto'>
      <VideoCameraFrontIcon  style={{color:'white' ,padding:'1rem' , fontSize: "4rem",   boxShadow:"0px 5px 20px rgba(0,0,0,0.4)" ,background:'#bb4750',borderRadius:'10%'}}  />
      </Box>
       <Text fontWeight={'500'}>400+</Text>
      <p>Courses</p>
     </Box>


      <Box w={{base:"80%",md:'35%'}}
     borderRadius={'10px'}
    boxShadow="0px 5px 20px rgba(0,0,0,0.3)"
    display='flex'
    flexDir={'column'}
    justifyContent='center'
    alignItems={'center'}
    p='1rem'
    border='10px solid white'
    h='170px'
     >
      <Box m='auto'>
      <PeopleAltIcon  style={{color:'white' ,padding:'1rem' , fontSize: "4rem",   boxShadow:"0px 5px 20px rgba(0,0,0,0.4)" ,background:'#8abeda',borderRadius:'10%'}}  />
      </Box>
       <Text fontWeight={'500'}>50,000+</Text>
      <p>Students</p>
     </Box>






 <Box w={{base:"80%",md:'35%'}}
     borderRadius={'10px'}
    boxShadow="0px 5px 20px rgba(0,0,0,0.3)"
    display='flex'
    flexDir={'column'}
    justifyContent='center'
    alignItems={'center'}
    p='1rem'
    border='10px solid white'
     >

      <Box m='auto'>
      <EmojiEventsIcon  style={{color:'white' ,padding:'1rem' , fontSize: "4rem",   boxShadow:"0px 5px 20px rgba(0,0,0,0.4)" ,background:'#283355',borderRadius:'10%'}}  />
      </Box>
       <Text fontWeight={'500'}>20+</Text>
      <p>Awards</p>
     </Box>

    </Box>
   </Box>
   </Box>

   <Box mt="4rem" textAlign={"center"}>
        <Text fontSize={"3xl"} fontWeight="500" m="2rem">
          Meet Our Team
        </Text>
      </Box>


    <Box
      w='100%'
    display={'flex'} 
    flexDirection={{base:'column',md:'row',lg:'row'}}
    justifyContent='center'
    alignItems={'center'}
    alignContent={'center'}
    flexWrap={'wrap'}
    gap={{base:'2rem',md:'2rem',lg:'4rem'}}
    mb='4rem'
    >
      {dt.map((item)=>(
        <OutT name={item.name} des={item.des} pic ={item.pic}/>
      ))}
    </Box>
   </>
  )
}

export default About
