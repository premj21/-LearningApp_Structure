import React from 'react'
import { Box,Text} from '@chakra-ui/react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

const Fqus = ({qus,des}) => {
  return (
    <div>
        <Accordion allowMultiple
       
        >
  <AccordionItem
  borderRadius={'7.5%'}
      boxShadow={'0 50px 50px rgba(0, 0, 0,0.060), 0 07px 50px rgba(0, 0, 0, 0.060)'}
  >
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>

            <Box
            w={{base:"100%",md:"269px",lg:"500px"}}
             as="span" flex='1' textAlign='left'>
                <Text fontSize={'1.3rem'} fontWeight='500'>
              {qus}
                </Text>
            </Box>
            {isExpanded ? (
              <RemoveIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {des}
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
      
    </div>
  )
}

export default Fqus
