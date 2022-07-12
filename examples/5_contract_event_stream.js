const { ethers } = require("ethers");

const INFURA_ID = '222bc8dab3ce4f14b501b689ab71bd64'
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${INFURA_ID}`)

const ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns (uint)",

    "event MsgVal(uint val)"
];

const address = '0xaedb23fe0fa0b7ee0fd69606f51388778a41a460' // Contract Address
const contract = new ethers.Contract(address, ABI, provider)

const main = async () => {
    // const block = await provider.getBlockNumber()

    // const transferEvents = await contract.queryFilter('Transfer', block - 1, block)
    // console.log(transferEvents)

    const msgValEvents = await contract.queryFilter('MsgVal')
    console.log(msgValEvents)
}

main()