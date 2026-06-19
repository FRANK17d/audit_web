export type SupportNavKey =
  | "dashboard"
  | "requests"
  | "communications"
  | "history"
  | "settings";

export type SupportStatus =
  | "Pendiente"
  | "En revision"
  | "En espera"
  | "Aprobada"
  | "Rechazada"
  | "Respondido";

export type SupportPriority = "Critica" | "Alta" | "Media" | "Baja";

export type ValidationStatus = "Validado" | "Observado" | "Pendiente";

export type SupportMetricTone = "rose" | "amber" | "emerald" | "sky";

export type SupportMetricIcon =
  | "inbox"
  | "review"
  | "approved"
  | "timer"
  | "rejected";

export interface SupportNavItem {
  key: SupportNavKey;
  label: string;
  href: string;
  helper: string;
}

export interface SupportMetric {
  label: string;
  value: string;
  helper: string;
  tone: SupportMetricTone;
  icon: SupportMetricIcon;
}

export interface SupportField {
  label: string;
  value: string;
}

export interface SupportDocument {
  name: string;
  type: string;
  status: ValidationStatus;
  size: string;
}

export interface ExternalCheck {
  label: string;
  description: string;
  status: ValidationStatus;
  source: "SUNAT" | "RENIEC" | "Sistema";
}

export interface SupportTimelineEvent {
  title: string;
  description: string;
  time: string;
  status: SupportStatus;
}

export interface SupportRequest {
  id: string;
  company: string;
  requester: string;
  requesterRole: string;
  ruc: string;
  dni: string;
  email: string;
  phone: string;
  address: string;
  submittedAt: string;
  age: string;
  status: SupportStatus;
  priority: SupportPriority;
  assignedTo: string;
  progress: number;
  pendingItems: string[];
  summary: string;
  companyFields: SupportField[];
  auditorFields: SupportField[];
  documents: SupportDocument[];
  externalChecks: ExternalCheck[];
  timeline: SupportTimelineEvent[];
  observations: string[];
}

export interface SupportMessage {
  id: string;
  company: string;
  subject: string;
  preview: string;
  time: string;
  status: SupportStatus;
  channel: "Correo" | "Panel" | "Sistema";
}

export interface SupportHistoryItem {
  id: string;
  action: string;
  company: string;
  user: string;
  date: string;
  result: SupportStatus;
}

export interface SupportSetting {
  title: string;
  description: string;
  value: string;
}
