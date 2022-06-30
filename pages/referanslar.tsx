import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import { GlobalHeader } from '../components/global-header';
import { OpensourceBanner } from '../components/opensource-banner';
import { Footer } from '../components/footer';
import siteConfig from '../content/site.json';
import Helmet from '../components/helmet';

export default function Thanks() {
  return (
    <Box bg='gray.50' minH='100vh'>
      <GlobalHeader />
      <Helmet title={'Referanslar - Yazılımcının Yol Haritası'} />
      <Box mb='60px'>
        <Container maxW={'container.sm'} position='relative'>
          <Box mt='60px'>
            <Flex lex alignItems='center'>
              <Box width='100%'>
                <Heading mb='10px' fontWeight={700}>Teşekkür!</Heading>
                <Text>Bu projenin gerçekleştirilmesinde kullanılan kaynakların üreticilerine teşekkürlerimizle.</Text>
              </Box>
              <Image width='190px'
                alt={''}
                rounded='100%'
                src='https://media.giphy.com/media/l0HUgXEoxsNZjZNq8/giphy.gif?cid=790b76114c74e11ed7ce8d65995b6893524407ed7b7748bc&rid=giphy.gif&ct=g'
                ml='50px'
                d={['none', 'block']}
              />
            </Flex>

            <Box mt='30px'>
              <Heading mb='15px' fontSize='25px' as='h2'>Projeler</Heading>

              <Stack spacing='10px'>
                <Box as={Link} rel='sponsored' href='https://roadmap.sh/' target='_blank' borderWidth={1} borderRadius='5px' p='20px'
                  bg='teal.50'>
                  <Image
                    alt=''
                    w='300px'
                    src='/sponsors/roadmapsh.svg'
                  />
                </Box>
                <Box as={Link} rel='sponsored' href='https://fikrinhayati.com/' target='_blank' borderWidth={1} borderRadius='5px' p='20px'
                  bg='teal.50'>
                  <Image
                    alt=''
                    w='300px'
                    src='/sponsors/fikrinhayati.svg'
                  />
                </Box>
                <Box as={Link} rel='sponsored' href='http://pratikyapayzeka.com/' target='_blank' borderWidth={1} borderRadius='5px' p='20px'
                  bg='teal.50'>
                  <Image
                    alt=''
                    w='300px'
                    src='https://raw.githubusercontent.com/mrabdullahsahin/pratik-yapay-zeka/master/sources/assets/images/logo.png'
                  />
                </Box>
              </Stack>
            </Box>

            <Box mt='40px'>
              <Heading mb='15px' fontSize='25px' as='h2'>Referanslar</Heading>
              <UnorderedList>
                <ListItem mb='5px'><Link color='blue.500' target='_blank' fontWeight={500}
                  href='https://roadmap.sh/'>roadmap.sh</Link></ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Container>
      </Box>
      <OpensourceBanner />
      <Footer />
    </Box>
  );
}
