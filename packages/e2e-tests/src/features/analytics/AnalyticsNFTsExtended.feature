@NFTs-Extended @Analytics @Testnet @Mainnet
Feature: Analytics - Posthog - NFTs - Extended view

  Background:
    Given Wallet is synced

  @LW-7916
  Scenario: Analytics - Extended view - Open NFT
    Given I set up request interception for posthog analytics request(s)
    And I am on NFTs extended page
    Then I validate latest analytics single event "nft | nfts | click"
    And I left click on the NFT with name "Bison Coin" on NFTs page
    And I am on a NFT details on the extended view for NFT with name: "Bison Coin"
    Then I validate latest analytics single event "nft | nfts | nft image | click"
    And I validate that 2 analytics event(s) have been sent
