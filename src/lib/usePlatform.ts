"use client";

import { useSyncExternalStore } from "react";
import {
  detectPlatform,
  isExternalUrl,
  storeUrlFor,
  type Platform,
} from "./store-links";

// The device never changes mid-visit, so there is nothing to subscribe to.
const subscribe = () => () => {};
// Server and hydration both render the neutral value; React swaps in the real
// one right after hydration, well before anyone can tap.
const serverSnapshot = (): Platform => "other";

export function usePlatform(): Platform {
  return useSyncExternalStore(subscribe, detectPlatform, serverSnapshot);
}

export function useStoreLink() {
  const platform = usePlatform();
  const url = storeUrlFor(platform);
  return { platform, url, isExternal: isExternalUrl(url) };
}
