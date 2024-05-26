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
        name: "KINGY",
        value: 100,
        img: "https://assets.coingecko.com/coins/images/31366/large/logoCMC.png",
        suspicion: "Verified",
      },
      {
        name: "NOTSCAM",
        value: 200,
        img: "https://cache.tonapi.io/imgproxy/vBLhJV04WOzt5INaZzZyCet6OHZNksap_pm7T4uVftE/rs:fill:200:200:1/g:no/aHR0cHM6Ly9pLmliYi5jby93WmtyQmpQL0JsdWUucG5n.webp",
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
        name: "NOT Voucher",
        img: "https://cache.tonapi.io/imgproxy/URd9Hb2GbDkxfvmq46mobfm75PSZFD7C3wWiG-2JTjM/rs:fill:1500:1500:1/g:no/aHR0cHM6Ly9jZG4uam9pbmNvbW11bml0eS54eXovbmZ0L2JvbmQvMi5wbmc.webp",
        suspicion: "Verified",
      },
      {
        name: "Nutcracker Nikolay II",
        img: "https://i.getgems.io/zM19RMIz166-5br8cMtvoCmhGjBOHBgIg8M7oPpczKI/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYi9jLzY1ODAxNmFiYzYxNjMzOGVjN2VlYzFlNC9pbWcvbnV0cy9uaWtvbGF5XzIucG5n",
        suspicion: "SCAM",
      },
      {
        name: "NOT Voucher",
        img: "https://i.getgems.io/yWqGBNYzsSQT0AVdo3SR9ld8v1z_1MjXUgEuUkPsUls/rs:fill:500:500:1/g:ce/czM6Ly9nZXRnZW1zLXMzL25mdC1jb250ZW50LWNhY2hlL2ltYWdlcy9FUURta2o2NUFiX20wYVphVzhJcEt3NGtZcUlnSVR3X0hSc3RZRWtWUTZOSVlDeVcvYzdmYWVlZTk5NzBhNTUyMQ",
        suspicion: "Verified",
      },
      {
        name: "Notcoin Voucher",
        img: "https://niocton.ru/wp-content/uploads/2024/01/nemoneta.png",
        suspicion: "SCAM",
      },
    ];
  } catch (error) {
    console.error(error);
  }
}
