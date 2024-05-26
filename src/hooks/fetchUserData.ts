const WALLET_BALANCE_ENDPOINT: string = "";
const WALLET_JETTONS_ENDPOINT: string = "";
const WALLET_NFTS_ENDPOINT: string = "";

export interface NftType {
  name: string;
  img: string;
  suspicion: string;
}

export interface JettonType {
  name: string;
  value: number;
  img: string;
  suspicion: string;
}

export async function getBalance(user_address_str: string) {
  try {
    // const response = await fetch(WALLET_BALANCE_ENDPOINT);
    // const data = await response.json();

    // return data["balance"];

    return 1000;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserJettonsList(user_address_str: string) {
  try {
    // const response = await fetch(WALLET_JETTONS_ENDPOINT);
    // const data = await response.json();

    // return data["jettons"];

    return [
      {
        name: "Jetton 1",
        value: 100,
        img: "https://assets.coingecko.com/coins/images/31366/large/logoCMC.png",
        suspicion: "Verified",
      },
      {
        name: "Jetton 2",
        value: 200,
        img: "https://www.kindpng.com/picc/m/642-6429916_fantasy-undead-soldier-hd-png-download.png",
        suspicion: "SCAM",
      },
    ];
  } catch (error) {
    console.error(error);
  }
}

export async function getUserNFTsList(user_address_str: string) {
  try {
    // const response = await fetch(WALLET_NFTS_ENDPOINT);
    // const data = await response.json();

    // return data["nfts"];

    return [
      {
        name: "NFT 1",
        img: "https://www.kindpng.com/picc/m/642-6429916_fantasy-undead-soldier-hd-png-download.png",
        suspicion: "Verified",
      },
      {
        name: "NFT 2",
        img: "https://www.kindpng.com/picc/m/642-6429916_fantasy-undead-soldier-hd-png-download.png",
        suspicion: "SCAM",
      },
      {
        name: "NFT 3",
        img: "https://www.kindpng.com/picc/m/642-6429916_fantasy-undead-soldier-hd-png-download.png",
        suspicion: "Verified",
      },
    ];
  } catch (error) {
    console.error(error);
  }
}
