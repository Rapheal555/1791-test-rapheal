"use client"

import { useState, useEffect } from "react"

interface TransitionSettings {
  duration: number
  easing: "easeInOut" | "easeOut" | "easeIn" | "bounce" | "elastic" | "back"
  stagger: number
  reducedMotion: boolean
  performanceMode: "high" | "balanced" | "battery"
}

interface TransitionSettingsStore {
  settings: TransitionSettings
  updateSettings: (settings: Partial<TransitionSettings>) => void
  resetSettings: () => void
}

const defaultSettings: TransitionSettings = {
  duration: 0.3,
  easing: "easeInOut",
  stagger: 0.1,
  reducedMotion: false,
  performanceMode: "balanced",
}

// Simple state management without Zustand for now
export const useTransitionSettings = (): TransitionSettingsStore => {
  const [settings, setSettings] = useState<TransitionSettings>(defaultSettings)

  // Load settings from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("transition-settings")
      if (saved) {
        const parsedSettings = JSON.parse(saved)
        setSettings({ ...defaultSettings, ...parsedSettings })
      }
    } catch (error) {
      console.warn("Failed to load transition settings:", error)
    }
  }, [])

  const updateSettings = (newSettings: Partial<TransitionSettings>) => {
    const updatedSettings = { ...settings, ...newSettings }
    setSettings(updatedSettings)

    try {
      localStorage.setItem("transition-settings", JSON.stringify(updatedSettings))
    } catch (error) {
      console.warn("Failed to save transition settings:", error)
    }
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
    try {
      localStorage.removeItem("transition-settings")
    } catch (error) {
      console.warn("Failed to reset transition settings:", error)
    }
  }

  return {
    settings,
    updateSettings,
    resetSettings,
  }
}
