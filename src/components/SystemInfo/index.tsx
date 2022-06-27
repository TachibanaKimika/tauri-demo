import React, { useEffect, useState } from 'react'
import { invoke } from '@tauri-apps/api'
import style from './index.module.scss'

export default function SystemInfo() {
  const [processes, setProcesses] = useState<any[]>([])
  useEffect(() => {
    (async () => {
      const res: any[] = await invoke('list_process')
      setProcesses(res)
    })();
  }, [])
  return (
    <div>
      <div className="processWrap">
        {
          processes.map((item: any) => (
            <div className={style.processBlock} key={item.pid}>
              <div className={style.processPid}>{item.pid}</div>
              <div className={style.processName}>{item.name}</div>
              <div className={style.processPath}>{item.path}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
