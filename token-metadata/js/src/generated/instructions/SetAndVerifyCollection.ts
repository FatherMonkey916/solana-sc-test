/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category SetAndVerifyCollection
 * @category generated
 */
const SetAndVerifyCollectionStruct = new beet.BeetArgsStruct<{ instructionDiscriminator: number }>(
  [['instructionDiscriminator', beet.u8]],
  'SetAndVerifyCollectionInstructionArgs',
);
/**
 * Accounts required by the _SetAndVerifyCollection_ instruction
 *
 * @property [_writable_] metadata Metadata account
 * @property [**signer**] collectionAuthority Collection Update authority
 * @property [**signer**] payer Payer
 * @property [] updateAuthority Update Authority of Collection NFT and NFT
 * @property [] collectionMint Mint of the Collection
 * @property [] collection Metadata Account of the Collection
 * @property [] collectionMasterEditionAccount MasterEdition2 Account of the Collection Token
 * @property [] collectionAuthorityRecord (optional) Collection Authority Record PDA
 * @category Instructions
 * @category SetAndVerifyCollection
 * @category generated
 */
export type SetAndVerifyCollectionInstructionAccounts = {
  metadata: web3.PublicKey;
  collectionAuthority: web3.PublicKey;
  payer: web3.PublicKey;
  updateAuthority: web3.PublicKey;
  collectionMint: web3.PublicKey;
  collection: web3.PublicKey;
  collectionMasterEditionAccount: web3.PublicKey;
  collectionAuthorityRecord?: web3.PublicKey;
};

const setAndVerifyCollectionInstructionDiscriminator = 25;

/**
 * Creates a _SetAndVerifyCollection_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 *
 * @category Instructions
 * @category SetAndVerifyCollection
 * @category generated
 */
export function createSetAndVerifyCollectionInstruction(
  accounts: SetAndVerifyCollectionInstructionAccounts,
) {
  const {
    metadata,
    collectionAuthority,
    payer,
    updateAuthority,
    collectionMint,
    collection,
    collectionMasterEditionAccount,
    collectionAuthorityRecord,
  } = accounts;

  const [data] = SetAndVerifyCollectionStruct.serialize({
    instructionDiscriminator: setAndVerifyCollectionInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: collectionAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: updateAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: collectionMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: collection,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: collectionMasterEditionAccount,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (collectionAuthorityRecord != null) {
    keys.push({
      pubkey: collectionAuthorityRecord,
      isWritable: false,
      isSigner: false,
    });
  }

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'),
    keys,
    data,
  });
  return ix;
}
