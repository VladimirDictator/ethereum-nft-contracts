import { NFTStorage, File } from 'nft.storage';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const { NFT_STORAGE_API_KEY } = process.env;

async function storeAsset() {
  const client = new NFTStorage({
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEQ5OEZFQUNFRTk2MTI1MjZCZTRiMmM3NDA2N2Y4OGNmRjk4ODZENTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NTMwMDAwMjAxMywibmFtZSI6IkRpY3RhdG9yIn0.QZioQa2obqZxdkx-_cIxeyUSpa37HfoFZM9msVs8VuQ',
  });
  const metadata = await client.store({
    name: 'ExampleNFT',
    description: 'My ExampleNFT is an awesome artwork!',
    image: new File(
      [await fs.promises.readFile('assets/MyExampleNFT.png')],
      'MyExampleNFT.png',
      { type: 'image/png' }
    ),
  });
  console.log('Metadata stored on Filecoin and IPFS with URL:', metadata.url);
}

storeAsset()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
