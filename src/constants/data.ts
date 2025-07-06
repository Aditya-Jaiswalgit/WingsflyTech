import {Task, DateItem, DrawerOption} from '../types';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Schedule a meeting with Harshit Sir',
    time: '09:00 AM',
    icon: 'people',
    iconType: 'MaterialIcons',
    tags: ['Habit', 'Must'],
    status: 'completed',
    color: '#4A5FFF',
    bgColor: '#EEF2FF',
  },
  {
    id: '2',
    title: '2.5 Hours Simran and Meditation',
    time: '09:00 AM',
    icon: 'self-improvement',
    iconType: 'MaterialIcons',
    tags: ['Habit', 'Must'],
    status: 'pending',
    color: '#8B5CF6',
    bgColor: '#F3E8FF',
  },
  {
    id: '3',
    title: 'Save 200 Rupees Daily',
    time: '12:00 PM',
    icon: 'savings',
    iconType: 'MaterialIcons',
    tags: ['Habit', 'Must'],
    status: 'in-progress',
    color: '#F59E0B',
    bgColor: '#FEF3C7',
  },
  {
    id: '4',
    title: 'Walk 10k Step Daily',
    time: '07:00 AM',
    icon: 'directions-walk',
    iconType: 'MaterialIcons',
    tags: ['Habit', 'Important'],
    status: 'pending',
    color: '#10B981',
    bgColor: '#D1FAE5',
    progress: '12/31',
  },
  {
    id: '5',
    title: 'Buy Sunflower for Mumma',
    time: '11:00 AM',
    icon: 'local-florist',
    iconType: 'MaterialIcons',
    tags: ['Task', 'Important'],
    status: 'pending',
    color: '#3B82F6',
    bgColor: '#DBEAFE',
    progress: '0/1',
  },
  {
    id: '6',
    title: 'Make Mandala and Colour Daily',
    time: '07:30 PM',
    icon: 'palette',
    iconType: 'MaterialIcons',
    tags: ['Task', 'Important'],
    status: 'pending',
    color: '#EC4899',
    bgColor: '#FCE7F3',
    progress: '12/30',
  },
];

export const mockDates: DateItem[] = [
  {day: 'Sun', date: 15, isSelected: false},
  {day: 'Mon', date: 16, isSelected: false},
  {day: 'Tue', date: 17, isSelected: false},
  {day: 'Wed', date: 18, isSelected: true},
  {day: 'Thu', date: 19, isSelected: false},
  {day: 'Fri', date: 20, isSelected: false},
  {day: 'Sat', date: 21, isSelected: false},
];

export const drawerOptions: DrawerOption[] = [
  {
    id: '1',
    title: 'Habit',
    subtitle: 'Activity that repeats over time it has detailed tracking and statistics.',
    icon: 'refresh',
    iconType: 'MaterialIcons',
  },
  {
    id: '2',
    title: 'Recurring Task',
    subtitle: 'Activity that repeats over time it has detailed tracking and statistics.',
    icon: 'repeat',
    iconType: 'MaterialIcons',
  },
  {
    id: '3',
    title: 'Task',
    subtitle: 'Single instance activity without tracking over time.',
    icon: 'check',
    iconType: 'MaterialIcons',
  },
  {
    id: '4',
    title: 'Goal of the Day',
    subtitle: 'A specific target set for oneself to achieve within a single day.',
    icon: 'flag',
    iconType: 'MaterialIcons',
  },
];

export const todayQuote = "You must do the things, you think you cannot do.";
export const todayQuoteProgress = 65;