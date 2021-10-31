// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract TexTrace is ERC1155 {
    uint256 public constant COTON = 0;
    uint256 public constant POLYESTER = 1;
    uint256 public constant VISCOSE = 2;
    uint256 public constant LINEN = 3;
    uint256 public constant NYLON = 4;

    uint256 private initialSupply = 10**27;

    constructor() ERC1155("https://game.example/api/item/{id}.json") {
        _mint(msg.sender, COTON, initialSupply, "");
        _mint(msg.sender, POLYESTER, initialSupply, "");
        _mint(msg.sender, VISCOSE, initialSupply, "");
        _mint(msg.sender, LINEN, initialSupply, "");
        _mint(msg.sender, NYLON, initialSupply, "");
    }

    function uri(uint256 _tokenId) public view override returns (string memory) {
        return string(
            abi.encodePacked(
                "https://game.example/api/item/",
                Strings.toString(_tokenId),
                ".json"
            )
        );
    }


}