/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface BaseWalletInterface extends ethers.utils.Interface {
  functions: {
    "entryPoint()": FunctionFragment;
    "nonce()": FunctionFragment;
    "updateEntryPoint(address)": FunctionFragment;
    "validateUserOp(tuple,bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateEntryPoint",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUserOp",
    values: [
      {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGas: BigNumberish;
        verificationGas: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: string;
        paymasterData: BytesLike;
        signature: BytesLike;
      },
      BytesLike,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateEntryPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOp",
    data: BytesLike
  ): Result;

  events: {};
}

export class BaseWallet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BaseWalletInterface;

  functions: {
    entryPoint(overrides?: CallOverrides): Promise<[string]>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateEntryPoint(
      newEntryPoint: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGas: BigNumberish;
        verificationGas: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: string;
        paymasterData: BytesLike;
        signature: BytesLike;
      },
      requestId: BytesLike,
      missingWalletFunds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  entryPoint(overrides?: CallOverrides): Promise<string>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  updateEntryPoint(
    newEntryPoint: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateUserOp(
    userOp: {
      sender: string;
      nonce: BigNumberish;
      initCode: BytesLike;
      callData: BytesLike;
      callGas: BigNumberish;
      verificationGas: BigNumberish;
      preVerificationGas: BigNumberish;
      maxFeePerGas: BigNumberish;
      maxPriorityFeePerGas: BigNumberish;
      paymaster: string;
      paymasterData: BytesLike;
      signature: BytesLike;
    },
    requestId: BytesLike,
    missingWalletFunds: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    entryPoint(overrides?: CallOverrides): Promise<string>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    updateEntryPoint(
      newEntryPoint: string,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGas: BigNumberish;
        verificationGas: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: string;
        paymasterData: BytesLike;
        signature: BytesLike;
      },
      requestId: BytesLike,
      missingWalletFunds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    updateEntryPoint(
      newEntryPoint: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGas: BigNumberish;
        verificationGas: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: string;
        paymasterData: BytesLike;
        signature: BytesLike;
      },
      requestId: BytesLike,
      missingWalletFunds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateEntryPoint(
      newEntryPoint: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateUserOp(
      userOp: {
        sender: string;
        nonce: BigNumberish;
        initCode: BytesLike;
        callData: BytesLike;
        callGas: BigNumberish;
        verificationGas: BigNumberish;
        preVerificationGas: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: string;
        paymasterData: BytesLike;
        signature: BytesLike;
      },
      requestId: BytesLike,
      missingWalletFunds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
