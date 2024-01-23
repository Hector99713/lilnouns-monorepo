import { task, types } from 'hardhat/config';
import ImageData from '../files/image-data-v1.json';
import { chunkArray } from '../utils';

task('populate-descriptor', 'Populates the descriptor with color palettes and Noun parts')
  .addOptionalParam(
    'nftDescriptor',
    'The `NFTDescriptor` contract address',
    '0x4cF22D8E42240543e7BBf7c4fC972c803d31c401',
    types.string,
  )
  .addOptionalParam(
    'nounsDescriptor',
    'The `NounsDescriptor` contract address',
    '0x0c5b211422f0ffE5a77686aAB82ad7341E925cf0',
    types.string,
  )
  .setAction(async ({ nftDescriptor, nounsDescriptor }, { ethers }) => {
    const descriptorFactory = await ethers.getContractFactory('NounsDescriptor', {
      libraries: {
        NFTDescriptor: nftDescriptor,
      },
    });
    const descriptorContract = descriptorFactory.attach(nounsDescriptor);

    const { bgcolors, palette, images } = ImageData;
    const { bodies, accessories, heads, glasses } = images;

    // Chunk head and accessory population due to high gas usage
    await descriptorContract.addManyBackgrounds(bgcolors);
    await descriptorContract.addManyColorsToPalette(0, palette);
    await descriptorContract.addManyBodies(bodies.map(({ data }) => data));

    const accessoryChunk = chunkArray(accessories, 10);
    for (const chunk of accessoryChunk) {
      await descriptorContract.addManyAccessories(chunk.map(({ data }) => data));
    }

    const headChunk = chunkArray(heads, 10);
    for (const chunk of headChunk) {
      await descriptorContract.addManyHeads(chunk.map(({ data }) => data));
    }

    await descriptorContract.addManyGlasses(glasses.map(({ data }) => data));

    console.log('Descriptor populated with palettes and parts');
  });
