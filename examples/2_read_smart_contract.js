const { ethers } = require("ethers");

const INFURA_ID = '222bc8dab3ce4f14b501b689ab71bd64'
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${INFURA_ID}`)

const ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns (uint)",
];

const address = '0xaedb23fe0fa0b7ee0fd69606f51388778a41a460' // Contract Address
const contract = new ethers.Contract(address, ABI, provider)

const main = async () => {
    const name = await contract.name()
    const symbol = await contract.symbol()

    console.log(`\nReading from ${address}\n`)
    console.log(`Name: ${name}`)
    console.log(`Symbol: ${symbol}`)

    const balance = await contract.balanceOf('0x4E00919F91523387A7004c242c24d4c340bb561d')

    console.log(`Balance Returned: ${balance}`)
}

main()