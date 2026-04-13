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

export const RECENT_TRANSACTIONS_DEMO: RecentTransactionsDemoType[] = [
  {
    id: "1",
    title: "Compra en Tienda",
    description: "Supermercado",
    value: "COP 50.000",
    type: "expense",
  },
  {
    id: "2",
    title: "Ingreso de Salario",
    description: "Empleado",
    value: "COP 300.000",
    type: "income",
    valueColor: theme.colors.dark.expense,
  },
  {
    id: "3",
    title: "Transferencia",
    description: "Bancolombia",
    value: "COP 100.000",
    type: "expense",
  },
];
