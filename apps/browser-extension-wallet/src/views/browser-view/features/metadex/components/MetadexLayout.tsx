import React, { ReactElement } from 'react';
import { SectionLayout, Layout } from '@src/views/browser-view/components';
import { SectionTitle } from '@components/Layout/SectionTitle';
import App from '@input-output-hk/metadex-ui';
import { useWalletStore } from '@src/stores';
import { useObservable } from '@lace/common';
// import { walletBalanceTransformer } from '../../../../../api/transformers';
import { isNFT } from '@src/utils/is-nft';

export const MetadexLayout = (): ReactElement => {
  const { inMemoryWallet } = useWalletStore();
  const totalBalance$ = useObservable(inMemoryWallet.balance.utxo.total$);
  const assetsInfo = useObservable(inMemoryWallet.assetInfo$);

  // if (totalBalance$ && totalBalance$.coins) {
  //   console.log(walletBalanceTransformer(BigInt(totalBalance$.coins).toString()));
  // }

  if (totalBalance$ && totalBalance$.assets) {
    for (const [assetId] of totalBalance$.assets) {
      const assetInfo = assetsInfo?.get(assetId);
      // If no assetInfo, assume it's not an NFT until the info is loaded
      if (!isNFT(assetInfo)) console.log(assetInfo);
    }
    console.log(totalBalance$.assets);
  }

  // const transactionHistory = useObservable(inMemoryWallet.transactions.history$);

  // console.log('transactionHistory', transactionHistory);

  return (
    <Layout>
      <SectionLayout>
        <SectionTitle title="Trading" />
        <App />
      </SectionLayout>
    </Layout>
  );
};
