"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { useTransitionSettings } from "@/hooks/use-transition-settings"
import { useState } from "react"

export function AccessibilitySettings() {
  const { settings, updateSettings } = useTransitionSettings()
  const [contrastMode, setContrastMode] = useState(false)
  const [focusIndicators, setFocusIndicators] = useState(true)
  const [screenReaderOptimized, setScreenReaderOptimized] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Respect Reduced Motion</Label>
        <Switch
          checked={settings.reducedMotion}
          onCheckedChange={(checked) => updateSettings({ reducedMotion: checked })}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">High Contrast Mode</Label>
        <Switch checked={contrastMode} onCheckedChange={setContrastMode} />
      </div>

      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Enhanced Focus Indicators</Label>
        <Switch checked={focusIndicators} onCheckedChange={setFocusIndicators} />
      </div>

      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Screen Reader Optimized</Label>
        <Switch checked={screenReaderOptimized} onCheckedChange={setScreenReaderOptimized} />
      </div>

      <div>
        <Label className="text-sm font-medium">Animation Intensity</Label>
        <Slider defaultValue={[0.8]} max={1} min={0.1} step={0.1} className="mt-2" />
      </div>

      <div className="text-xs text-gray-500 dark:text-gray-400">
        These settings ensure transitions are accessible to all users
      </div>
    </div>
  )
}
