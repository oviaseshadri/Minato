import {
    // Provider,
    // Account,
    Contract,
    // json,
    // hash,
    // Calldata,
    // num,
    CallData,
    // RawCalldata,
    // RawArgsObject,
    // cairo,
    // uint256,
    // constants,
    // RawArgsArray,
  } from "starknet";
  import abi from "./abi/abi.json"

//   import compiledSierra_core from "scripts/blogs_core_contract.contract_class.json";


  const core_address = "0x3ff70e99b4d9df032200ec2aa09d028c302b305711b1223f75694c02b69d086";

  async function getCoreContractInstance(value) {
    const myCoreContract = new Contract(abi.abi,
        core_address,
        value);
        myCoreContract.connect(value);
        return myCoreContract;
  }

  export async function post_content(title,article,value) {
    let myContract = await getCoreContractInstance(value)

    const par = CallData.compile({
        title : title,
        content : article
    });

    const res = await myContract.post_content(par, {
        parseRequest: true,
		parseResponse: false,
    })

    console.log(res, " : Tx Hash");
  }

  export async function get_content(address,value) {
    let myContract = await getCoreContractInstance(value)

    const par = CallData.compile({
        address : address
    });

    const res = await myContract.get_content(par, {
        parseRequest: true,
		parseResponse: false,
    })

    console.log(res, " : Tx Hash");
  }