pragma solidity 0.6.8;
import "./IERC721.sol";

contract Booster {

    address public nft_A;
    address public nft_B;
    address public nft_C;
    address public nft_Boosterpack;

    constructor(
        address _nft_a,
        address _nft_b,
        address _nft_c,
        address _nft_boosterpack
    ) public {
        nft_A = _nft_a;
        nft_B = _nft_b;
        nft_C = _nft_c;
        nft_Boosterpack = _nft_boosterpack;
    }

    function receiveBoosterPackNFT(
        uint256 _id
    ) public {
        IERC721(nft_Boosterpack).burn(_id);
        IERC721(nft_A).mint(msg.sender, IERC721(nft_A).length());
        IERC721(nft_B).mint(msg.sender, IERC721(nft_B).length());
        IERC721(nft_C).mint(msg.sender, IERC721(nft_C).length());
    }
}
