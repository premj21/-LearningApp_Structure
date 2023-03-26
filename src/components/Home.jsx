import { Box , Image,Text,Flex} from '@chakra-ui/react';
import React from 'react'
import { motion } from "framer-motion";
import pic from '../pics/—Pngtree—teaching thinking thinking flat learning_4517540.png';
import Course from './Course';
import Popcr from './Popcr';
import Fqus from './Fqus';
import StudentT from './StudentT';
const Home = () => {


  const dtt = [
    {
      pic: "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "NameCourse",
      des: "Here will be the description of the video",
    },
    {
      pic: "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "NameCourse",
      des: "Here will be the description of the video",
    },
    {
      pic: "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name: "NameCourse",
      des: "Here will be the description of the video",
    },
  ];


  const ptt = [
    {
      qus: "you can put anything here like anyhting  ?     ",
      des: "hellow my name is prem jadhav and i am in 3r yr of college pursuing my Btech degree in Entc and i have been into web since 2nd year and yeah nothing to else hahahahahah this is just randon words ",
    },
    {
      qus: "you can put anything here like anyhting  ?     ",
      des: "hellow my name is prem jadhav and i am in 3r yr of college pursuing my Btech degree in Entc and i have been into web since 2nd year and yeah nothing to else hahahahahah this is just randon words ",
    },
    {
      qus: "you can put anything here like anyhting  ?     ",
      des: "hellow my name is prem jadhav and i am in 3r yr of college pursuing my Btech degree in Entc and i have been into web since 2nd year and yeah nothing to else hahahahahah this is just randon words ",
    },
    {
      qus: "you can put anything here like anyhting  ?     ",
      des: "hellow my name is prem jadhav and i am in 3r yr of college pursuing my Btech degree in Entc and i have been into web since 2nd year and yeah nothing to else hahahahahah this is just randon words ",
    },
    {
      qus: "you can put anything here like anyhting  ?     ",
      des: "hellow my name is prem jadhav and i am in 3r yr of college pursuing my Btech degree in Entc and i have been into web since 2nd year and yeah nothing to else hahahahahah this is just randon words ",
    },
    {
      qus: "you can put anything here like anyhting  ?     ",
      des: "hellow my name is prem jadhav and i am in 3r yr of college pursuing my Btech degree in Entc and i have been into web since 2nd year and yeah nothing to else hahahahahah this is just randon words ",
    },
  ];









   const opnt = {
     initial: {
       x: "-100",
       opacity: 0,
     },
     whileInView: {
       x: 0,
       opacity: 1,
     },
   };


  return (
    <>
      <Box
        display="flex"
        flexDir={{ base: "column", sm: "row" }}
        pt="3.4rem"
        gap="4rem"
      >
        <Box w={{ base: "100%", sm: "50%" }}>
          <Box
            display={"flex"}
            flexDir="column"
            alignItems={{ base: "center", sm: "flex-start" }}
            gap={"2vmax"}
          >
            <motion.header
              {...opnt}
              style={{ fontSize: "2.3vmax", fontWeight: "700" }}
            >
              Grow your skills to <br /> advance your career path
            </motion.header>
            <motion.Text
              {...opnt}
              transition={{ delay: 0.3 }}
              fontSize={"1.5vmax"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              maiores commodi, alias cumque beatae voluptas molestiae
              necessitatibus libero totam error!
            </motion.Text>
            <Box>
              <motion.a
                {...opnt}
                transition={{ delay: 0.5 }}
                style={{ background: "#fe705a", padding: "0.9vmax" }}
                href="/"
              >
                Get Started
              </motion.a>
            </Box>
          </Box>
        </Box>

        <Box
          w={{ base: "100%", sm: "50%" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            className="hell"
            w={{ base: "80%", md: "90%", lg: "75%" }}
            src={pic}
            alt="nothing"
          ></Image>
        </Box>
        <br></br>
      </Box>
      <br></br>

      <Course></Course>
      <Box mt="4rem" textAlign={"center"}>
        <Text fontSize={"3xl"} fontWeight="500" m="2rem">
          Our Popular Courses
        </Text>
      </Box>
      <Flex
        gap={{ base: "5rem", md: "2.3vmax", lg: "4rem" }}
        pt="4rem"
        alignItems="center"
        justifyContent={"center"}
        flexWrap="wrap"
      >
        {dtt.map((item) => (
          <Popcr name={item.name} pic={item.pic} des={item.des} />
        ))}
      </Flex>

      <Box mt="4rem" textAlign={"center"}>
        <Text fontSize={"3xl"} fontWeight="500" m="2rem">
          Frequently Asked Questions
        </Text>
      </Box>

      <Box
        display={"flex"}
        flexWrap="wrap"
        alignItems={"center"}
        justifyContent="center"
        gap={{ base: "0.2rem", md: "1.3rem", lg: "1.4rem" }}
        marginBottom={"100px"}
      >
        {ptt.map((item) => (
          <Fqus qus={item.qus} des={item.des} />
        ))}
      </Box>

      <Box mt="4rem" textAlign={"center"}>
        <Text fontSize={"3xl"} fontWeight="500" mb='1rem'>
          Students Testimonials
        </Text>
      </Box>

      <Box
       h={{base:"300px",md:"200px",lg:"300px"}}

       className='scrbr'
        display={"flex"}
        overflowY="scroll"
        alignItems={"flex-start"}
        justifyContent="flex-start"
        gap={{ base: "6rem", md: "1.3rem", lg: "1.4rem" }}
        marginBottom={"200px"}
      >
        <StudentT />
        <StudentT />
        <StudentT />
        <StudentT />
        <StudentT />

        <StudentT />
      </Box>
    </>
  );
}

export default Home;
