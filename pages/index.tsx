import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Link,
} from '@chakra-ui/react';
import { GlobalHeader } from '../components/global-header';
import { Footer } from '../components/footer';
import { OpensourceBanner } from '../components/opensource-banner';
import { DimmedMore } from '../components/dimmed-more';
import { LinksListItem } from '../components/links-list-item';
import { LinksList } from '../components/links-list';
import { HomeRoadmapItem } from '../components/roadmap/home-roadmap-item';
import { getFeaturedRoadmaps, RoadmapType } from '../lib/roadmap';
import { getAllGuides, GuideType } from '../lib/guide';
import siteConfig from '../content/site.json';
import Helmet from '../components/helmet';
import { PageWrapper } from '../components/page-wrapper';

type HomeProps = {
  roadmaps: RoadmapType[];
  guides: GuideType[];
};

export default function Home(props: HomeProps) {
  const { roadmaps, guides } = props;

  return (
    <PageWrapper>
      <GlobalHeader variant={'transparent'} />
      <Helmet title="Yazılımcının Yol Haritası" />
      <Box>
        <Container maxW="container.md" pb="90px">
          <Box py={['23px', '23px', '35px']} color="gray.200">
            <Heading
              color="gray.50"
              fontSize={['22px', '22px', '28px']}
              mb={['8px', '8px', '15px']}
            >
              Merhaba! 👋
            </Heading>
            <Text fontSize={['14px', '14px', '16px']} mb="10px">
              <Text as='cite'>Tek olan yaratıcının adıyla</Text>
              <br />
              <Text fontWeight={500} as="span">
                yazilimcininyolharitasi.com
              </Text>{' '}
              yazılım dünyasında kendini geliştirmek isteyen, nereden başlayacağına karar veremeyenlere yol haritalarını seçmelerine ve öğrenmelerine rehberlik etmeye yardımcı olmak için yol haritaları, kılavuzlar, araçlar ve diğer eğitim içeriklerini oluşturmaya yönelik açık kaynaklı bir projedir.
              <br />
              Bu proje <Link
                textDecoration={'underline'}
                _hover={{ textDecoration: 'none', bg: 'blue.700' }}
                href='https://twitter.com/kamranahmedse'
                target='_blank'>Kamran Ahmed</Link>'in geliştirmiş olduğu <Link
                textDecoration={'underline'}
                _hover={{ textDecoration: 'none', bg: 'blue.700' }}
                href='https://roadmap.sh'
                target='_blank'>roadmap.sh</Link> projesi kullanılarak oluşturulmuştur. Kendilerine ve projeye katkıda bulunan herkese teşekkürlerimizle.
            </Text>
          </Box>
          <SimpleGrid columns={[1, 2, 3]} spacing={['10px', '10px', '15px']}>
            {roadmaps.map((roadmap: RoadmapType, counter: number) => (
              <HomeRoadmapItem
                isUpcoming={roadmap.isUpcoming}
                url={`/${roadmap.id}`}
                key={roadmap.id}
                colorIndex={counter}
                title={roadmap.featuredTitle}
                isCommunity={roadmap.isCommunity}
                subtitle={roadmap.featuredDescription}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box pb="80px" bg="white">
        <Container maxW="container.md" position="relative">
          <Box pt="40px" mb="20px">
            <Heading color="green.500" fontSize="25px" mb="5px">
              Kılavuzlar
            </Heading>
          </Box>

          <LinksList>
            {guides.map((guide) => (
              <LinksListItem
                key={guide.id}
                href={`/guides/${guide.id}`}
                title={guide.title}
                badgeText={guide.isPro ? 'PRO' : ''}
                subtitle={guide.formattedUpdatedAt!}
              />
            ))}
            <DimmedMore href={'/guides'} text="Kılavuzları Görüntüle" />
          </LinksList>
        </Container>
      </Box>

      <OpensourceBanner />
      <Footer />
    </PageWrapper>
  );
}

export async function getStaticProps() {
  return {
    props: {
      roadmaps: getFeaturedRoadmaps(),
      guides: getAllGuides(10),
    },
  };
}
