import {
  ArrowDownRight,
  ArrowLeftRight,
  ArrowUpRight,
  Bell,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  CreditCard,
  Landmark,
  LayoutDashboard,
  Lock,
  LogOut,
  PiggyBank,
  SquareUser,
  TrendingUp,
  User,
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
  // Profile / settings
  user: User,
  bell: Bell,
  lock: Lock,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  check: CircleCheck,
  logout: LogOut,
  // Misc
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
