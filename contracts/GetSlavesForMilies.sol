// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GetSlavesForMilies is ERC721URIStorage, Ownable {
   using Counters for Counters.Counter;
   Counters.Counter private _tokenIds;
    event NFTMinted(uint256);

   constructor() ERC721("NFT", "ENFT") {}

   function mintNFT(address recipient, string memory tokenURI)
       public onlyOwner
       returns (uint256)
   {
       _tokenIds.increment();

       uint256 newItemId = _tokenIds.current();
       _safeMint(recipient, newItemId);
       _setTokenURI(newItemId, tokenURI);
       setApprovalForAll(recipient, true);
       emit NFTMinted(newItemId);

       _tokenIds.increment();
       return newItemId;
   }
}