import { broadcast, sponsorship, transfer, waitForTx } from '@acryl/acryl-transactions'

export const MASTER_SEED = 'test acc 2'
const API_BASE = 'https://nodestestnet.acrylplatform.com'

const ttx = transfer({ recipient: '3JHj9mVz1URexGe4MHCCEMBm4gJTkhqJnv5', amount: 270000000, feeAssetId: null }, MASTER_SEED)
broadcast(ttx, API_BASE)
