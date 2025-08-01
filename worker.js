addEventListener("scheduled", event => {
  event.waitUntil(requestAirdrop());
});

async function requestAirdrop() {
  const wallet = WALLET_ADDRESS;
  const params = [wallet, 1_000_000_000];

  const response = await fetch("https://api.devnet.solana.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "requestAirdrop",
      params
    })
  });

  console.log("Airdrop response:", await response.json());
}
