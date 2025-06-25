"use client"

import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useTransitionSettings } from "@/hooks/use-transition-settings"

export function TransitionSettings() {
  const { settings, updateSettings } = useTransitionSettings()

  // Ensure safe values
  const safeDuration = isNaN(settings.duration) ? 0.3 : Math.max(0.1, Math.min(2, settings.duration))
  const safeStagger = isNaN(settings.stagger) ? 0.1 : Math.max(0, Math.min(0.5, settings.stagger))

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-sm font-medium">Duration: {safeDuration.toFixed(1)}s</Label>
        <Slider
          value={[safeDuration]}
          onValueChange={([value]) => updateSettings({ duration: value })}
          max={2}
          min={0.1}
          step={0.1}
          className="mt-2"
        />
      </div>

      <div>
        <Label className="text-sm font-medium">Easing Function</Label>
        <Select value={settings.easing} onValueChange={(value: any) => updateSettings({ easing: value })}>
          <SelectTrigger className="mt-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easeInOut">Ease In Out</SelectItem>
            <SelectItem value="easeOut">Ease Out</SelectItem>
            <SelectItem value="easeIn">Ease In</SelectItem>
            <SelectItem value="bounce">Bounce</SelectItem>
            <SelectItem value="elastic">Elastic</SelectItem>
            <SelectItem value="back">Back</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-medium">Stagger: {safeStagger.toFixed(2)}s</Label>
        <Slider
          value={[safeStagger]}
          onValueChange={([value]) => updateSettings({ stagger: value })}
          max={0.5}
          min={0}
          step={0.05}
          className="mt-2"
        />
      </div>

      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Reduced Motion</Label>
        <Switch
          checked={settings.reducedMotion}
          onCheckedChange={(checked) => updateSettings({ reducedMotion: checked })}
        />
      </div>
    </div>
  )
}
