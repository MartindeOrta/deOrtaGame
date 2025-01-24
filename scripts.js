
web3 =  new Web3(window.ethereum)
var account = 0;
import { Abi } from 'https://martindeorta.github.io/deOrtaGame/MartyrNFT/Abi.js';
import { MartyrNFT } from 'https://martindeorta.github.io/deOrtaGame/MartyrNFT/ContractAddress.js';
                            
const contract = new web3.eth.Contract(Abi, MartyrNFT.contrato);
console.log(Abi)


console.log( MartyrNFT.contrato)
const getMartyr = async (tokenId) =>{ {
    try {
        const martyr = await contract.methods.martyrs(tokenId).call();
        console.log('Martyr:', martyr);
    } catch (error) {
        console.error('Error obteniendo el Martyr:', error);
    }
}}
getMartyr(0)

async function mintMartyr(strength, agility, intelligence, rarity,uri) {
    try {
        await ethereum.request({method: 'eth_requestAccounts'});
        account = await web3.eth.getAccounts();
        console.log(account[0])//cuenta
       await contract.methods.mintMartyr(account[0], strength, agility, intelligence, rarity,uri).send({ from: account[0] });
        console.log('Martyr mintado exitosamente');
    } catch (error) {
        console.error('Error mintando el Martyr:', error);
    }
}

let CrearMartyr = document.getElementById("mintMartyr")
CrearMartyr.addEventListener("click", _ =>{
    let fuerza =document.getElementById("strength").value
    let agility =document.getElementById("agility").value
    let intelligence =document.getElementById("intelligence").value
    let uri =document.getElementById("uri").value
    let raritySelect =document.getElementById("raritySelect")
    let rariryOpcion=raritySelect.options[raritySelect.options.selectedIndex].value  
    console.log( rariryOpcion)
    console.log(fuerza+agility+ intelligence)
    console.log(uri)
    mintMartyr(fuerza,agility,intelligence,rariryOpcion,uri)

})

const connectWallet = async _ =>{
  
    await ethereum.request({method: 'eth_requestAccounts'});
    account = await web3.eth.getAccounts();
    console.log(account)//cuenta
    


    console.log(Abi)


    console.log(MartyrNFT)

    const blockNumber = await web3.eth.getBlockNumber();
    console.log(blockNumber)//blockNumber

    const chainId = await web3.eth.getChainId();
    console.log(chainId)//chainId

    const getBalance = await web3.eth.getBalance(account[0])
    let spamBalance = document.getElementById("balance")
    spamBalance.innerText=parseFloat(getBalance/10000000000000000n)/100;
    console.log(getBalance)
    
    const sign = document.getElementById("sendToken");
    sign.addEventListener("click", async () => {
   
        try{
            const amount = document.getElementById("amount");
            let wei = 100000000000000000*amount.value
            const recipientAddress = document.getElementById("recipientAddress");

            if (!recipientAddress.value || !amount.value) {
                alert('Por favor, complete todos los campos.');
                return;}
          console.log(`cantidad para el envio: ${wei}, direccion para enviar: ${recipientAddress.value}`)
        const transaction = await web3.eth.sendTransaction({
            from: account[0],
            to: recipientAddress.value,
            value: web3.utils.toWei(wei, 'wei')
        });
        alert('envío exitoso' + transaction)
        }catch(error){
            alert('error en el envio' + error)
        }
})
async function sendEther(recipient,amount) {
   

    try {
        const transaction = await web3.eth.sendTransaction({
            from: account[0],
            to: recipient,
            value: web3.utils.toWei(amount, 'ether')
        });
        console.log('Transaction:', transaction);
    } catch (error) {
        console.error('Error sending Ether:', error);
    }
}


}

const conectar = document.getElementById("connectWallet");
conectar.addEventListener("click", _ => connectWallet())
const sign = document.getElementById("sendToken");
sign.addEventListener("click", async () => {
   if (account==0){
    alert('Por favor, conecte la billetera');}
})



