pragma solidity 0.6.8;

import "./ERC721.sol";

contract Nft_boost is ERC721 {
    constructor() public ERC721("NFT_booster", "NFT_booster") {
        // _mint(0x1B8A8CBbEB285BE726FC8F5A6d443D33314d66b2, 0);
    }
}
