// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

contract election
{
    // political parties having initial votes 0;
    uint public party1; // party 1
    uint public party2; // party 2
    uint public party3; // party 3
    uint public party4; // party 4
    uint public party5; // party 5

    // vote setter functions
    // vote setter funciton for shiv party1
    function voteSetterForparty1()public
    {
        party1 += 1;
    }

    // vote setter function for party2
    function voteSetterForparty2() public
    {
        party2 += 1;
    }

    // vote setter function for party3
    function voteSetterForparty3() public
    {
        party3 += 1;
    }

    // vote setter function for party4
    function voteSetterForparty4() public
    {
        party4 += 1;
    }

    // vote setter function for aam aadmi party
    function voteSetterForparty5() public
    {
        party5 += 1;
    }

}
