pragma solidity >=0.5.0 <0.6.0;

contract revolution0x {
    
    constructor() public {
        runeCount = 0;
    }
    
    struct Rune {
        string runeIpfsName;
        string runeIpfsData;
        address runeOwner;
    }
    
    Rune[] public runes; 
    
    mapping(uint256 => address) public runeToOwner;
    mapping(string => Rune) runeNameToRune;
    uint256 public runeCount;
    
    function createRune(string memory _runeName, string memory _runeIpfsData) public {
        uint256 runeId = runes.push(Rune(_runeName, _runeIpfsData, msg.sender)) - 1;
        runeToOwner[runeId] = msg.sender;
        runeNameToRune[_runeName] = runes[runeId];
        runeCount++;
    }

    function getRuneByName(string memory _runeName) public returns(string memory, string memory, address) {
        
    }
    
}