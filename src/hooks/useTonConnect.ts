import { THEME, TonConnectUI, type WalletsModalState } from "@tonconnect/ui";
import { Address, type Sender, type SenderArguments } from "@ton/core";
import type { Ref } from "vue";

export function useTonConnect(): { tonConnectUI: TonConnectUI } {
  const tonConnectUI = new TonConnectUI({
    manifestUrl:
      "https://raw.githubusercontent.com/dExNight/ProjectConfigurations/main/RaffleContract_v1.0.0/manifest.json",
    buttonRootId: "tonconnect_but",
  });

  tonConnectUI.uiOptions = {
    language: "en",
    uiPreferences: {
      theme: THEME.DARK,
    },
  };

  return {
    tonConnectUI,
  };
}

export function subscribeTonConnectChanges(
  tonConnectUI: TonConnectUI,
  connectionStatus: Ref,
  userWallet: Ref,
  connected_address: Ref
) {
  const unsubscribe = tonConnectUI.onStatusChange((walletAndwalletInfo) => {
    // update state/reactive variables to show updates in the ui
    connectionStatus.value = tonConnectUI.connected;
    userWallet.value = walletAndwalletInfo;

    const raw_address = tonConnectUI.account?.address;

    console.log("Raw address: ", raw_address);
    if (raw_address) {
      connected_address.value = Address.parse(raw_address).toString();
      console.log("Connected address: ", typeof connected_address.value);
    } else {
      connected_address.value = null;
    }
  });

  return { unsubscribe };
}

export function getSenderTonConnect(tonConnectUI: TonConnectUI): {
  sender: Sender;
} {
  return {
    sender: {
      send: async (args: SenderArguments) => {
        tonConnectUI.sendTransaction({
          messages: [
            {
              address: args.to.toString(),
              amount: args.value.toString(),
              payload: args.body?.toBoc().toString("base64"),
            },
          ],
          validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
        });
      },
    },
  };
}
