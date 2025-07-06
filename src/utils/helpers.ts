import {Dimensions} from 'react-native';

// Screen dimensions
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// Format time from 24h to 12h format
export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minutes} ${ampm}`;
};

// Get day name from date
export const getDayName = (date: Date): string => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()];
};

// Get formatted date string
export const getFormattedDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

// Generate date range for picker
export const generateDateRange = (startDate: Date, days: number) => {
  const dates = [];
  const currentDate = new Date(startDate);
  
  for (let i = 0; i < days; i++) {
    dates.push({
      day: getDayName(currentDate),
      date: currentDate.getDate(),
      isSelected: i === 3, // Default to 4th item (index 3)
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return dates;
};

// Calculate progress percentage
export const calculateProgress = (current: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((current / total) * 100);
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Debounce function
export const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Throttle function
export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return (...args: any[]) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Generate unique ID
export const generateUniqueId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Check if device is tablet
export const isTablet = (): boolean => {
  return SCREEN_WIDTH >= 768;
};

// Get responsive font size
export const responsiveFontSize = (size: number): number => {
  const scale = SCREEN_WIDTH / 375; // Base on iPhone X width
  return Math.round(size * scale);
};

// Get responsive dimension
export const responsiveDimension = (size: number): number => {
  const scale = SCREEN_WIDTH / 375;
  return Math.round(size * scale);
};

// Haptic feedback (requires react-native-haptic-feedback)
export const triggerHapticFeedback = (type: 'light' | 'medium' | 'heavy' = 'light') => {
  // Implementation would go here if haptic feedback library is added
  console.log(`Haptic feedback: ${type}`);
};

// Convert hex color to rgba
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`
    : hex;
};

// Safe area padding for different devices
export const getSafeAreaPadding = () => {
  // This would typically use react-native-safe-area-context
  return {
    top: 44,
    bottom: 34,
    left: 0,
    right: 0,
  };
};

// Format number with commas
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Get greeting based on time
export const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
};

// Check if string is empty or only whitespace
export const isEmptyString = (str: string): boolean => {
  return !str || str.trim().length === 0;
};

// Capitalize first letter
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Get time ago string
export const getTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;
  
  return date.toLocaleDateString();
};