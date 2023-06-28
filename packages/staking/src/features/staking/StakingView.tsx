import { Box, Text } from '@pczeglik-iohk/ui';
import { useTranslation } from 'react-i18next';
import { BrowsePools } from '../browse-pools';
import { Overview } from '../overview';
import { Navigation, Page } from './Navigation';

export const StakingView = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box mb={'$56'}>
        <Text.Heading>{t('root.title')}</Text.Heading>
      </Box>
      <Navigation>
        {(activePage) => (
          <Box mt={'$40'}>
            {activePage === Page.overview && <Overview />}
            {activePage === Page.browsePools && <BrowsePools />}
          </Box>
        )}
      </Navigation>
    </>
  );
};
