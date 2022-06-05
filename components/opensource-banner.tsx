import { Box, Container, Heading, Link, Text } from '@chakra-ui/react';

export function OpensourceBanner() {
  return (
    <Box bg='white' borderTopWidth={1} pt={['45px', '45px', '70px']} pb={['60px', '60px', '90px']} textAlign='center'>
      <Container maxW='container.md'>
        <Heading fontSize={['25px', '25px', '35px']} mb={['10px', '10px', '20px']}>Açık Kaynak</Heading>
        <Text lineHeight='26px' fontSize={['15px', '15px', '16px']} mb='20px'>Yazılımcının Yol Haritasi, açık kaynak bir projedir. Ekosisteme ve yazılım dünyasına katkıda bulunmak için sende destek olabilirsin.</Text>
        <iframe
          src='https://ghbtns.com/github-btn.html?user=mrabdullahsahin&repo=yazilimcininyolharitasi.com&type=star&count=true&size=large'
          frameBorder='0'
          scrolling='0'
          width='170'
          height='30'
          style={{ margin: 'auto', marginBottom: '30px' }}
          title='GitHub'
        />
      </Container>
    </Box>
  );
}
