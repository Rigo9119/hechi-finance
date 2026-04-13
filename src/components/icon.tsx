import {
  ArrowDownRight,
  ArrowLeftRight,
  ArrowUpRight,
  Calendar,
  CreditCard,
  Landmark,
  LayoutDashboard,
  PiggyBank,
  SquareUser,
  TrendingUp,
  Wallet,
  type LucideProps,
} from "lucide-react-native";

const icons = {
  // Navigation
  home: LayoutDashboard,
  transactions: ArrowLeftRight,
  debts: CreditCard,
  savings: PiggyBank,
  profile: SquareUser,
  // Indicators
  income: ArrowUpRight,
  expense: ArrowDownRight,
  // Accounts
  bank: Landmark,
  wallet: Wallet,
  investment: TrendingUp,
  credit: CreditCard,
  //Msc
  calendar: Calendar,
} as const;

export type IconName = keyof typeof icons;

type IconProps = Omit<LucideProps, "name"> & {
  name: IconName;
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  const LucideIcon = icons[name];
  return <LucideIcon size={size} {...props} />;
}
