export interface Task {
  id: string;
  title: string;
  time: string;
  icon: string;
  iconType: 'MaterialIcons' | 'FontAwesome' | 'Ionicons';
  tags: string[];
  status: 'completed' | 'pending' | 'in-progress';
  progress?: string;
  color: string;
  bgColor: string;
}

export interface DateItem {
  day: string;
  date: number;
  isSelected: boolean;
}

export interface DrawerOption {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  iconType: 'MaterialIcons' | 'FontAwesome' | 'Ionicons';
}