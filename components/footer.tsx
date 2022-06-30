import { Box, Container, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import siteConfig from '../content/site.json';
import { CustomAd } from './custom-ad';

function NavigationLinks() {
  return (
    <>
      <Stack isInline d={['none', 'none', 'flex']} color='gray.400' fontWeight={600} spacing='30px'>
        <Link _hover={{ color: 'white' }} href='/roadmaps'>Yol Haritaları</Link>
        <Link _hover={{ color: 'white' }} href='/guides'>Kılavuzlar</Link>
        <Link _hover={{ color: 'white' }} href='/about'>Hakkında</Link>
        <Link _hover={{ color: 'white' }} href='/referanslar'>Referanslar</Link>
      </Stack>

      <Stack d={['flex', 'flex', 'none']} color='gray.400' fontWeight={600} spacing={0}>
        <Link py='7px' borderBottomWidth={1} borderBottomColor='gray.800' _hover={{ color: 'white' }}
              href='/roadmaps'>Yol Haritaları</Link>
        <Link py='7px' borderBottomWidth={1} borderBottomColor='gray.800' _hover={{ color: 'white' }}
              href='/guides'>Kılavuzlar</Link>
        <Link py='7px' borderBottomWidth={1} borderBottomColor='gray.800' _hover={{ color: 'white' }}
              href='/referanslar'>Referanslar</Link>
        <Link py='7px' borderBottomWidth={1} borderBottomColor='gray.800' _hover={{ color: 'white' }}
              href='/about'>Hakkında</Link>
      </Stack>
    </>
  );
}

export function Footer() {
  return (
    <Box bg='brand.hero' p={['25px 0', '25px 0', '40px 0']}>
      <Container maxW='container.md'>
        <NavigationLinks />

        <Box mt={['40px', '40px', '50px']} mb='40px' maxW='500px'>
          <Flex spacing={0} alignItems='center' color='gray.400'>
            <Link d='flex' alignItems='center' fontWeight={600} _hover={{ textDecoration: 'none', color: 'white' }}
                  href='/'>
              <Image alt='' h='25px' w='25px' src='/logo.svg' mr='6px' />
              yazilimcininyolharitasi.com
            </Link>
            <Text as='span' mx='7px'>by</Text>
            <Link bg='blue.500' px='6px' py='2px' rounded='4px' color='white' fontWeight={600} fontSize='13px'
                  _hover={{ textDecoration: 'none', bg: 'blue.600' }} href={siteConfig.url.twitter}
                  target='_blank'>@mrabdullahsahin</Link>
          </Flex>

          <Text my='15px' fontSize='14px' color='gray.500'>Yolunuzu seçmenize ve kariyerinizde ilerlemenize yardımcı olmak için topluluk tarafından oluşturulan yol haritaları, makaleler, kaynaklar, kılavuzlar ve içerikler.</Text>

          <Text fontSize='14px' color='gray.500'>
            <Text as='span' mr='10px'>&copy; yazilimcininyolharitasi.com</Text>&middot;
            <Link href='/about' _hover={{ textDecoration: 'none', color: 'white' }} color='gray.400'
                  mx='10px'>SSO</Link>&middot;
            <Link href='/terms' _hover={{ textDecoration: 'none', color: 'white' }} color='gray.400'
                  mx='10px'>Kullanım Şartları</Link>&middot;
            <Link href='/privacy' _hover={{ textDecoration: 'none', color: 'white' }} color='gray.400'
                  mx='10px'>Gizlilik Sözleşmesi</Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
