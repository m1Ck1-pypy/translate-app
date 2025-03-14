import { Button, Text } from '@gravity-ui/uikit';
import { useSnapshot } from 'valtio';

import TranslateBox from '@/components/TranslateBox';
import { translateState } from '@/store/translate';

import { Container } from './styles/Container';
import { Header } from './styles/Header';
import { Root } from './styles/Root';

const Home = () => {
  const store = useSnapshot(translateState);

  const handleTranslateText = async () => await store.translateText();

  return (
    <Root>
      <Header>
        <Text variant='display-4'>Yandex Translate</Text>
        <Text variant='body-3' style={{ textAlign: 'center' }}>
          Yandex.Translate — это сервис, который позволяет переводить тексты с одного языка на другой. Он поддерживает
          более 90 языков и может быть использован для перевода текстов из различных источников: сайтов, документов,
          электронных писем и т.д.
        </Text>
      </Header>
      <Container>
        <TranslateBox />
        <Button size='l' view='action' onClick={handleTranslateText} loading={store.loading}>
          Перевести
        </Button>
      </Container>
    </Root>
  );
};

export default Home;
