"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

/**
 * Context that provides whether the user prefers reduced motion.
 * Components can call `useReducedMotion()` to conditionally disable long‑duration animations.
 */
interface MotionContextValue {
  prefersReducedMotion: boolean;
}

const MotionContext = createContext<MotionContextValue>({
  prefersReducedMotion: false,
});

/** Hook to consume the motion preference */
export const useReducedMotion = () => useContext(MotionContext);

/**
 * MotionProvider reads the `prefers-reduced-motion` media query and makes the result
 * available via context. It updates the value if the user changes the system setting.
 */
export const MotionProvider = ({ children }: { children: ReactNode }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Guard for server‑side rendering – `window` is undefined there.
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    // Listen for changes.
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return (
    <MotionContext.Provider value={{ prefersReducedMotion }}>
      {children}
    </MotionContext.Provider>
  );
};
