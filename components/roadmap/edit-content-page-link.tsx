import React from 'react';
import { Box, Button, Divider, Link, Text } from '@chakra-ui/react';

type EditContentPageLinkProps = {
  href: string;
};

export function EditContentPageLink(props: EditContentPageLinkProps) {
  const { href } = props;

  return (
    <Box my='30px'>
      <Divider mb="15px" orientation="horizontal" />
      <Text
        lineHeight="23px"
        fontWeight={500}
        fontSize="14px"
        color="gray.500"
        mb="10px"
      >
        Bu sayfa yapım aşamasındadır. Konuya küçük bir giriş yazarak ve bu konu hakkında daha fazla bilgi edinmek için birkaç bağlantı önererek katkıda bulunabilirsiniz.
      </Text>
      <Button
        size="sm"
        py="20px"
        as={Link}
        href={href}
        target="_blank"
        isFullWidth
        colorScheme={'gray'}
        _hover={{ textDecoration: 'none', bg: 'gray.200' }}
      >
        Bu sayfaya katkıda bulun
      </Button>
    </Box>
  );
}
