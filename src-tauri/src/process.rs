use sysinfo::{NetworkExt, NetworksExt, ProcessExt, System, SystemExt, Process};


#[derive(serde::Serialize, Clone, Debug)]

pub struct ProcessInfo {
  pid: String,
  name: String,
  path: String,
}


#[tauri::command]
pub fn list_process() -> Vec<ProcessInfo> {
  let sys = System::new_all();
  let mut processes: Vec<ProcessInfo> = Vec::new();
  for (pid, process) in sys.processes() {
    processes.push(ProcessInfo {
      pid: pid.to_string(),
      name: process.name().to_string(),
      path: process.exe().to_str().unwrap().to_string(),
    });
  }
  return processes;
  
}