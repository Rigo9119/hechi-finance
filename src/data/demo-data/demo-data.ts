import { type IconName } from "@/components/icon";
import { theme } from "@/theme/tokens";

export type AccountsDemoType = {
  id: string;
  icon: IconName;
  title: string;
  subtitle: string;
  detail?: string;
  value: string;
  valueColor?: string;
};

export type GeneralReportDemoType = {
  id: string;
  title: string;
  value: number;
  icon: IconName;
};

export type RecentTransactionsDemoType = {
  id: string;
  title: string;
  description: string;
  value: string;
  type: "income" | "expense";
  valueColor?: string;
};

export const ACCOUNTS_DEMO: AccountsDemoType[] = [
  {
    id: "1",
    icon: "bank",
    title: "Bancolombia",
    subtitle: "Ahorros",
    detail: "**** 4920",
    value: "COP 45.2M",
  },
  {
    id: "2",
    icon: "credit",
    title: "Nu Colombia",
    subtitle: "Crédito",
    value: "COP 1.2M",
    valueColor: theme.colors.dark.expense,
  },
  {
    id: "3",
    icon: "investment",
    title: "Tyba Inversión",
    subtitle: "Fondo Balanceado",
    value: "COP 101.8M",
  },
];

export const GENERAL_REPORT_DEMO: GeneralReportDemoType[] = [
  {
    id: "1",
    title: "Efectivo disponible",
    value: 4520000,
    icon: "wallet",
  },
  {
    id: "2",
    title: "Cupo Disponible",
    value: 10100000,
    icon: "credit",
  },
  {
    id: "3",
    title: "Cupo Utilizado",
    value: 8100000,
    icon: "credit",
  },
  {
    id: "4",
    title: "Metas de Ahoprro",
    value: 72,
    icon: "savings",
  },
  {
    id: "5",
    title: "Proximo Pago",
    value: 4,
    icon: "calendar",
  },
];

export type DebtCardDemoType = {
  id: string;
  bank: string;
  cardType: string;
  lastFour: string;
  used: number;
  limit: number;
  nextPaymentDate: string;
  minimumPayment: number;
};

export type SavingsAccountDemoType = {
  id: string;
  icon: IconName;
  name: string;
  type: string;
  value: number;
  returnPercent?: number;
};

export type ProfileSettingRowType = {
  id: string;
  icon: IconName;
  label: string;
  value?: string;
};

export const DEBTS_DEMO: DebtCardDemoType[] = [
  {
    id: "1",
    bank: "Nu Colombia",
    cardType: "Crédito",
    lastFour: "7823",
    used: 1200000,
    limit: 5000000,
    nextPaymentDate: "Abr 20",
    minimumPayment: 120000,
  },
  {
    id: "2",
    bank: "Bancolombia",
    cardType: "Visa",
    lastFour: "4512",
    used: 3800000,
    limit: 8000000,
    nextPaymentDate: "Abr 25",
    minimumPayment: 380000,
  },
];

export const SAVINGS_DEMO: SavingsAccountDemoType[] = [
  {
    id: "1",
    icon: "bank",
    name: "Bancolombia",
    type: "Cuenta de Ahorros",
    value: 45200000,
  },
  {
    id: "2",
    icon: "investment",
    name: "Tyba",
    type: "Fondo Balanceado",
    value: 101800000,
    returnPercent: 12.4,
  },
  {
    id: "3",
    icon: "investment",
    name: "Tyba",
    type: "Fondo Conservador",
    value: 38500000,
    returnPercent: 7.8,
  },
];

export const PROFILE_SETTINGS_DEMO: ProfileSettingRowType[] = [
  { id: "1", icon: "bell", label: "Notificaciones", value: "Activas" },
  { id: "2", icon: "lock", label: "Seguridad", value: "PIN activado" },
  { id: "3", icon: "calendar", label: "Fecha de corte", value: "Día 20" },
];

export const CONNECTED_ACCOUNTS_DEMO: ProfileSettingRowType[] = [
  { id: "1", icon: "bank", label: "Bancolombia", value: "Conectado" },
  { id: "2", icon: "credit", label: "Nu Colombia", value: "Conectado" },
  { id: "3", icon: "investment", label: "Tyba", value: "Conectado" },
];

export type AccountTransactionDemoType = RecentTransactionsDemoType & {
  accountId: string;
  date: string;
};

export const ACCOUNT_TRANSACTIONS_DEMO: AccountTransactionDemoType[] = [
  { id: "t1", accountId: "1", title: "Supermercado Éxito", description: "Supermercado", value: "COP 85.000", type: "expense", valueColor: theme.colors.dark.expense, date: "Abr 11" },
  { id: "t2", accountId: "1", title: "Ingreso de Salario", description: "Empleado", value: "COP 4.500.000", type: "income", date: "Abr 1" },
  { id: "t3", accountId: "1", title: "Transferencia a Nu", description: "Pago tarjeta", value: "COP 1.200.000", type: "expense", valueColor: theme.colors.dark.expense, date: "Mar 30" },
  { id: "t4", accountId: "2", title: "Amazon", description: "Compras online", value: "COP 320.000", type: "expense", valueColor: theme.colors.dark.expense, date: "Abr 10" },
  { id: "t5", accountId: "2", title: "Netflix", description: "Suscripción", value: "COP 23.900", type: "expense", valueColor: theme.colors.dark.expense, date: "Abr 5" },
  { id: "t6", accountId: "3", title: "Rendimiento Fondo", description: "Tyba Balanceado", value: "COP 210.000", type: "income", date: "Abr 1" },
];

export const RECENT_TRANSACTIONS_DEMO: RecentTransactionsDemoType[] = [
  {
    id: "1",
    title: "Compra en Tienda",
    description: "Supermercado",
    value: "COP 50.000",
    type: "expense",
    valueColor: theme.colors.dark.expense,
  },
  {
    id: "2",
    title: "Ingreso de Salario",
    description: "Empleado",
    value: "COP 300.000",
    type: "income",
  },
  {
    id: "3",
    title: "Transferencia",
    description: "Bancolombia",
    value: "COP 100.000",
    type: "expense",
    valueColor: theme.colors.dark.expense,
  },
];
