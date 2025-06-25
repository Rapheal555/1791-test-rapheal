"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useTransitionSettings } from "@/hooks/use-transition-settings"

export function PerformanceSettings() {
  const { settings, updateSettings } = useTransitionSettings()

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-sm font-medium">Performance Mode</Label>
        <Select
          value={settings.performanceMode}
          onValueChange={(value: any) => updateSettings({ performanceMode: value })}
        >
          <SelectTrigger className="mt-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high">High Performance</SelectItem>
            <SelectItem value="balanced">Balanced</SelectItem>
            <SelectItem value="battery">Battery Saver</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Hardware Acceleration</Label>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">GPU Optimization</Label>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Memory Optimization</Label>
          <Switch defaultChecked />
        </div>
      </div>

      <div className="text-xs text-gray-500 dark:text-gray-400">
        Performance settings are automatically adjusted based on device capabilities
      </div>
    </div>
  )
}
