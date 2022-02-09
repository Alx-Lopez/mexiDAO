import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule('0x9a230B2c1f48d0d7550e1F07e1aB91B6Dec775AD');

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "mexiDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "PESOETH",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();