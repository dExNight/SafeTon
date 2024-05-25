import { Address, address } from "@ton/core";

export async function getBalance(user_address_str: string) {
  // GET request using fetch with async/await
  const response = await fetch("https://testapi.jasonwatmore.com/products/2");
  const data = await response.json();
}
