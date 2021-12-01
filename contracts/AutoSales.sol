// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Smart Contract for used auto purchasing
/// @author Jason Cunningham
/// @notice This smart contract allows someone to reserve a test drive for a used automobile
/// @dev Smart contract inherits from Ownable library for access control

contract AutoSales is Ownable {
    // Variables

    address[16] public cars;

    /// @dev Implement state tracking among buyer ETH addresses
    // TODO: Incorporate enum State, struct with events and addbuyer() function.

    // Enum
    enum State {
        Unowned,
        Reserved,
        Sold
    }

    // Structs
    struct Car {
        uint256 carPrice;
        State situation;
        string autoMake;
        string autoModel;
        address payable buyer;
    }

    // mappings
    mapping(uint256 => Car) public carsMapping;

    //Events

    /// @notice Event emitted when a buyer reserves a test drive.
    /// @param carId  Car ETH Identification Number
    /// @param buyer buyer address
    event TestDriveReservation(uint256 indexed carId, address indexed buyer);

    //modifiers

    // Reserving a car
    function reserve(uint256 carId) public returns (uint256) {
        require(carId >= 0 && carId <= 15, "Car Id provided is out of range");

        cars[carId] = msg.sender;
        return carId;
    }

    // Retrieving the cars array
    function getCars() public view returns (address[16] memory) {
        return cars;
    }

    /// @notice add buyer manually
    /// @dev Contract owner should only be allowed to call this function
    function addBuyer() private onlyOwner {
        // TODO: add buyer to array of authorized ETH addresses
        // TODO: Implement event TestDriveReservation
    }
}
