
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

const Settings = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="weather-alerts" className="font-medium">Weather Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications for extreme weather conditions
                </p>
              </div>
              <Switch id="weather-alerts" defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="planting-reminders" className="font-medium">Planting Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Get reminders for upcoming planting dates
                </p>
              </div>
              <Switch id="planting-reminders" defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="market-alerts" className="font-medium">Market Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications for significant market price changes
                </p>
              </div>
              <Switch id="market-alerts" />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="sustainability-updates" className="font-medium">Sustainability Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Weekly updates on your sustainability metrics
                </p>
              </div>
              <Switch id="sustainability-updates" defaultChecked />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Data Preferences</CardTitle>
            <CardDescription>Control how your data is stored and used</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="offline-mode" className="font-medium">Offline Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Store data locally for offline access
                </p>
              </div>
              <Switch id="offline-mode" defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="data-sharing" className="font-medium">Data Sharing</Label>
                <p className="text-sm text-muted-foreground">
                  Share anonymized data to improve recommendations
                </p>
              </div>
              <Switch id="data-sharing" />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-sync" className="font-medium">Auto Synchronization</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically sync data when online
                </p>
              </div>
              <Switch id="auto-sync" defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Settings;
