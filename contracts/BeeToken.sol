pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BeeToken is ERC20 {
    constructor() ERC20("Bee", "BEE") {
        _mint(0xF5b0ed82a0b3e11567081694cC66c3df133f7C8F, 1_000_000_000_000_000 * 1e18);
    }
}