import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

//Importing and configuring our .env file that we use to securely store our environment variables
import dotenv from "dotenv";
dotenv.config();
const pk = process.env['PRIVATE_KEY']
const wall_addy = process.env['WALLET_ADDRESS']
const a_api = process.env['ALCHEMY_API_URL']
// Some quick checks to make sure our .env is working.
if (!pk ||pk == "") {
  console.log("🛑 Private key not found.")
}


if (!a_api|| a_api == "") {
  console.log("🛑 Alchemy API URL not found.")
}

if (!wall_addy || wall_addy == "") {
  console.log("🛑 Wallet Address not found.")
}


const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    pk,
    ethers.getDefaultProvider(a_api),
  ),
);

(async () => {
  try{
    const apps = await sdk.getApps();
    console.log("Your app address is:", apps[0].address);
  }catch(err){
    console.error("failed to get apps from the sdk", err);
    process.exit(1);
  }
})()

export default sdk;