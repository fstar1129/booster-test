pragma solidity 0.6.8;

import "./ERC721.sol";

contract Nft_1 is ERC721 {

    constructor() public ERC721("NFT_a", "NFT_a") {}
}
