import {app, ipcMain} from 'electron'
import { IPC_CHANNELS} from '@shared/ipc_channels'
import type {  AppInfo } from '@shared/aonread_api'

export function registerAppHandlers (): void {
    ipcMain.handle(IPC_CHANNELS.appInfo, (): Appinfo => {
        return {
            name: app.getName(),
            version: app.getVersion(),
            platform: process.platform
        }
    }




)
}