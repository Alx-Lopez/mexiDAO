import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule("0x445B358EdC9E5421d6FFB93eF66907b355203E54");

(async() =>{
  try{
    await bundleDrop.createBatch([
      {
        name: "Eagle",
        description: "This NFT will give you access to mexiDAO!",
        image: readFileSync("scripts/assets/mexicanEagle.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  }catch (error){
    console.error("failed to create the new NFT", error);
  }
})()