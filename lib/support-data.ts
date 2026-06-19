import type {
  SupportHistoryItem,
  SupportMessage,
  SupportMetric,
  SupportNavItem,
  SupportRequest,
  SupportSetting,
} from "@/types/support";

export const supportNavItems: SupportNavItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/soporte/panel",
    helper: "Resumen operativo",
  },
  {
    key: "requests",
    label: "Solicitudes",
    href: "/soporte/solicitudes",
    helper: "Revision y aprobaciones",
  },
  {
    key: "communications",
    label: "Comunicaciones",
    href: "/soporte/comunicaciones",
    helper: "Correos y respuestas",
  },
  {
    key: "history",
    label: "Historial",
    href: "/soporte/historial",
    helper: "Trazabilidad interna",
  },
  {
    key: "settings",
    label: "Configuracion",
    href: "/soporte/configuracion",
    helper: "Reglas de soporte",
  },
];

export const supportMetrics: SupportMetric[] = [
  {
    label: "Pendientes",
    value: "12",
    helper: "3 criticas hoy",
    tone: "rose",
    icon: "inbox",
  },
  {
    label: "En revision",
    value: "7",
    helper: "Promedio 18 min",
    tone: "amber",
    icon: "review",
  },
  {
    label: "Aprobadas",
    value: "28",
    helper: "+12% esta semana",
    tone: "emerald",
    icon: "approved",
  },
  {
    label: "Tiempo medio",
    value: "42m",
    helper: "Meta interna 60m",
    tone: "sky",
    icon: "timer",
  },
];

export const featuredSupportRequest: SupportRequest = {
  id: "REQ-1048",
  company: "Empresa Alfa S.A.",
  requester: "Mariela Campos",
  requesterRole: "Auditor Admin solicitante",
  ruc: "20548796321",
  dni: "46851273",
  email: "mariela.campos@empresa-alfa.com",
  phone: "+51 987 421 305",
  address: "Av. Industrial 248, Lima, Peru",
  submittedAt: "Hoy, 09:15 AM",
  age: "Hace 12 min",
  status: "En revision",
  priority: "Critica",
  assignedTo: "Nos Planet Soporte",
  progress: 72,
  pendingItems: ["Confirmar direccion fiscal", "Validar DNI con RENIEC"],
  summary:
    "Empresa agroindustrial solicita alta inicial para activar un Auditor Admin y continuar con configuracion de empresa.",
  companyFields: [
    { label: "Razon social", value: "Empresa Alfa S.A." },
    { label: "RUC", value: "20548796321" },
    { label: "Direccion", value: "Av. Industrial 248, Lima" },
    { label: "Telefono", value: "+51 987 421 305" },
  ],
  auditorFields: [
    { label: "Nombres", value: "Mariela Campos" },
    { label: "DNI", value: "46851273" },
    { label: "Correo", value: "mariela.campos@empresa-alfa.com" },
    { label: "Telefono", value: "+51 987 421 305" },
  ],
  documents: [
    {
      name: "Ficha RUC",
      type: "PDF",
      status: "Validado",
      size: "428 KB",
    },
    {
      name: "Documento del Auditor Admin",
      type: "PDF",
      status: "Pendiente",
      size: "312 KB",
    },
    {
      name: "Carta de autorizacion",
      type: "DOCX",
      status: "Observado",
      size: "189 KB",
    },
  ],
  externalChecks: [
    {
      label: "RUC activo y habido",
      description: "La empresa figura activa para operaciones comerciales.",
      status: "Validado",
      source: "SUNAT",
    },
    {
      label: "DNI existente",
      description: "Pendiente de confirmar coincidencia exacta de nombres.",
      status: "Pendiente",
      source: "RENIEC",
    },
    {
      label: "Duplicidad",
      description: "No hay solicitudes previas con el mismo RUC.",
      status: "Validado",
      source: "Sistema",
    },
  ],
  timeline: [
    {
      title: "Solicitud registrada",
      description: "Formulario publico enviado con empresa y Auditor Admin.",
      time: "09:15 AM",
      status: "Pendiente",
    },
    {
      title: "Validacion SUNAT completada",
      description: "RUC activo, habido y sin duplicidad interna.",
      time: "09:18 AM",
      status: "Respondido",
    },
    {
      title: "Revision manual iniciada",
      description: "Soporte revisa documentos y datos del solicitante.",
      time: "09:22 AM",
      status: "En revision",
    },
  ],
  observations: [
    "La carta de autorizacion no incluye cargo del representante.",
    "Confirmar que el correo del Auditor Admin pertenece al dominio corporativo.",
  ],
};

export const supportRequests: SupportRequest[] = [
  featuredSupportRequest,
  {
    ...featuredSupportRequest,
    id: "REQ-1047",
    company: "Constructora del Norte",
    requester: "Javier Ruiz",
    requesterRole: "Gerente de calidad",
    ruc: "20657841290",
    dni: "42190388",
    email: "javier.ruiz@constructoranorte.pe",
    phone: "+51 944 128 009",
    address: "Calle Los Cedros 118, Trujillo",
    submittedAt: "Hoy, 08:42 AM",
    age: "Hace 45 min",
    status: "Pendiente",
    priority: "Alta",
    progress: 34,
    pendingItems: ["Validar RUC", "Revisar documentos adjuntos"],
    summary:
      "Solicitud pendiente de validaciones externas para habilitar auditorias ISO 45001.",
  },
  {
    ...featuredSupportRequest,
    id: "REQ-1046",
    company: "Industrial Andina",
    requester: "Lucia Paredes",
    requesterRole: "Responsable SIG",
    ruc: "20411590377",
    dni: "47200145",
    email: "lucia.paredes@andina.pe",
    phone: "+51 955 604 782",
    address: "Zona Industrial Mz. C, Arequipa",
    submittedAt: "Ayer, 04:30 PM",
    age: "Hace 18 h",
    status: "Respondido",
    priority: "Media",
    progress: 100,
    pendingItems: [],
    summary:
      "Informacion adicional respondida. Lista para decision de aprobacion.",
  },
  {
    ...featuredSupportRequest,
    id: "REQ-1045",
    company: "Agroexport Lima Fresh",
    requester: "Carlos Medina",
    requesterRole: "Auditor lider",
    ruc: "20500988741",
    dni: "40987211",
    email: "carlos.medina@limafresh.pe",
    phone: "+51 933 248 100",
    address: "Carretera Panamericana Sur Km 42",
    submittedAt: "Ayer, 01:12 PM",
    age: "Hace 22 h",
    status: "En espera",
    priority: "Baja",
    progress: 58,
    pendingItems: ["Esperando documento actualizado"],
    summary:
      "Soporte solicito carta firmada para continuar con activacion de cuenta.",
  },
];

export const supportMessages: SupportMessage[] = [
  {
    id: "MSG-301",
    company: "Empresa Alfa S.A.",
    subject: "Falta cargo en carta de autorizacion",
    preview:
      "Hola Mariela, necesitamos una carta actualizada con el cargo del representante legal.",
    time: "Hace 5 min",
    status: "En revision",
    channel: "Correo",
  },
  {
    id: "MSG-300",
    company: "Constructora del Norte",
    subject: "RUC enviado a validacion SUNAT",
    preview: "La validacion externa esta en proceso. Te avisaremos al completarse.",
    time: "Hace 28 min",
    status: "Pendiente",
    channel: "Sistema",
  },
  {
    id: "MSG-299",
    company: "Industrial Andina",
    subject: "Informacion adicional recibida",
    preview: "Los documentos adjuntos ya fueron recibidos y pasan a decision final.",
    time: "Ayer, 05:06 PM",
    status: "Respondido",
    channel: "Panel",
  },
];

export const supportHistoryItems: SupportHistoryItem[] = [
  {
    id: "HIS-880",
    action: "Solicitud aprobada y token generado",
    company: "Industrial Andina",
    user: "Soporte Audit",
    date: "Ayer, 05:20 PM",
    result: "Aprobada",
  },
  {
    id: "HIS-879",
    action: "Informacion adicional solicitada",
    company: "Agroexport Lima Fresh",
    user: "Soporte Audit",
    date: "Ayer, 02:40 PM",
    result: "En espera",
  },
  {
    id: "HIS-878",
    action: "Solicitud rechazada por RUC inactivo",
    company: "Servicios Omega",
    user: "Soporte Audit",
    date: "Lun, 11:10 AM",
    result: "Rechazada",
  },
];

export const supportSettings: SupportSetting[] = [
  {
    title: "Token de activacion",
    description: "Vigencia enviada al Auditor Admin cuando soporte aprueba la empresa.",
    value: "3 dias",
  },
  {
    title: "Reenvio tras rechazo",
    description: "Tiempo minimo para que una empresa pueda volver a enviar solicitud.",
    value: "7 dias",
  },
  {
    title: "SLA de revision critica",
    description: "Tiempo objetivo para solicitudes con documentos completos y prioridad critica.",
    value: "60 min",
  },
];

export function getSupportRequestById(id: string) {
  return supportRequests.find((request) => request.id === id) ?? featuredSupportRequest;
}
