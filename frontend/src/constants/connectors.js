import { InjectedConnector } from '@web3-react/injected-connector';
import { LedgerConnector } from '@web3-react/ledger-connector';

export const injectedConnector = new InjectedConnector({
    supportedChainIds: [1, 3],
});

export const ledgerConnector = new LedgerConnector({
    chainId: 3,
    url: 'https://ropsten.infura.io/v3/374c9feef1a348aa987ad63f052cb8fe',
    pollingInterval: 12000,
});
