const { ethers } = require("ethers");

const INFURA_ID = '222bc8dab3ce4f14b501b689ab71bd64'
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${INFURA_ID}`)

const account1 = '0x4E00919F91523387A7004c242c24d4c340bb561d' // Your account address 1

const privateKey1 = 'b0c41625003a0fd011cc82077a2307d0e6c8c7ffdb4f23990409b6acae671d4b' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const ABI = [
    "function balanceOf(address) view returns (uint)",
    "function mint() public payable",
];

const address = '0xaedb23fe0fa0b7ee0fd69606f51388778a41a460'
const contract = new ethers.Contract(address, ABI, provider)

const main = async () => {
    const balance = await contract.balanceOf(account1)

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.mint({value: ethers.utils.parseEther("0.01")})
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
}

main()