import { contextBridge, ipcRenderer } from 'electron'
import { IPC_CHANNELS } from '@shared/ipc_channels'
import type { AonreadApi } from '@shared/aonread_api'

const api: AonreadApi = {
  getAppInfo: () => ipcRenderer.invoke(IPC_CHANNELS.appInfo)
}

contextBridge.exposeInMainWorld('aonread', api)