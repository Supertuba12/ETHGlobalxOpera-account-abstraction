/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestUtil, TestUtilInterface } from "../TestUtil";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "paymaster",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "paymasterData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "op",
        type: "tuple",
      },
    ],
    name: "packUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "paymaster",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "paymasterData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "op",
        type: "tuple",
      },
    ],
    name: "prefund",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102e1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80637c12776c1461003b578063929c1b2414610064575b600080fd5b61004e6100493660046101a3565b610085565b60405161005b91906101df565b60405180910390f35b6100776100723660046101a3565b610096565b60405190815260200161005b565b6060610090826100a1565b92915050565b6000610090826100e0565b60603660006100b4610160850185610234565b915091508360208184030360405194506020810185016040528085528082602087013750505050919050565b60006100eb826100fb565b6100f48361012b565b0292915050565b600060e082013561010083013580821415610117575092915050565b61012382488301610165565b949350505050565b6000806101378361017d565b610142576001610145565b60035b60ff1690508260c00135818460a001350284608001350101915050919050565b60008183106101745781610176565b825b9392505050565b60008061019261014084016101208501610282565b6001600160a01b0316141592915050565b6000602082840312156101b557600080fd5b813567ffffffffffffffff8111156101cc57600080fd5b8201610180818503121561017657600080fd5b600060208083528351808285015260005b8181101561020c578581018301518582016040015282016101f0565b8181111561021e576000604083870101525b50601f01601f1916929092016040019392505050565b6000808335601e1984360301811261024b57600080fd5b83018035915067ffffffffffffffff82111561026657600080fd5b60200191503681900382131561027b57600080fd5b9250929050565b60006020828403121561029457600080fd5b81356001600160a01b038116811461017657600080fdfea26469706673582212202f8aee6ac5696390966e9e40c3d373f76e80f53df9f4b52292abe1e76f9b22d464736f6c634300080c0033";

export class TestUtil__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestUtil> {
    return super.deploy(overrides || {}) as Promise<TestUtil>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestUtil {
    return super.attach(address) as TestUtil;
  }
  connect(signer: Signer): TestUtil__factory {
    return super.connect(signer) as TestUtil__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUtilInterface {
    return new utils.Interface(_abi) as TestUtilInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUtil {
    return new Contract(address, _abi, signerOrProvider) as TestUtil;
  }
}
