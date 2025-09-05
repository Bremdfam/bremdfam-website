'use client';
import { CacheProvider } from '@emotion/react';
import { emotionCache } from '@/app/lib/emotionCache';

export default function EmotionProvider({ children }) {
  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}
