// SPDX-License-Identifier: GPL-3.0-only

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

/**
 * @title ERC721Mock
 * This mock just provides a public safeMint, mint, and burn functions for testing purposes
 */
contract ERC721Mock is ERC721 {
  constructor() ERC721('ERC721 Mock', 'M721') {}

  function baseURI() public view returns (string memory) {
    return _baseURI();
  }

  function exists(uint256 tokenId) public view returns (bool) {
    return _exists(tokenId);
  }

  function mint(address to, uint256 tokenId) public {
    _mint(to, tokenId);
  }

  function safeMint(address to, uint256 tokenId) public {
    _safeMint(to, tokenId);
  }

  function safeMint(
    address to,
    uint256 tokenId,
    bytes memory _data
  ) public {
    _safeMint(to, tokenId, _data);
  }

  function burn(uint256 tokenId) public {
    _burn(tokenId);
  }
}
