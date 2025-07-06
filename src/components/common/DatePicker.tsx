import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';
import {colors} from '../../constants/colors';
import {DateItem} from '../../types';

interface DatePickerProps {
  dates: DateItem[];
  onDateSelect: (date: DateItem) => void;
}

const {width} = Dimensions.get('window');

const DatePicker: React.FC<DatePickerProps> = ({dates, onDateSelect}) => {
  const [selectedDate, setSelectedDate] = useState<number>(
    dates.find(d => d.isSelected)?.date || dates[0].date,
  );

  const handleDateSelect = (date: DateItem) => {
    setSelectedDate(date.date);
    onDateSelect(date);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={styles.scrollView}>
      {dates.map((date, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dateButton,
            selectedDate === date.date && styles.selectedDateButton,
          ]}
          onPress={() => handleDateSelect(date)}>
          <Text
            style={[
              styles.dayText,
              selectedDate === date.date && styles.selectedDayText,
            ]}>
            {date.day}
          </Text>
          <Text
            style={[
              styles.dateText,
              selectedDate === date.date && styles.selectedDateText,
            ]}>
            {date.date}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  container: {
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  dateButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: colors.white,
    minWidth: 50,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  selectedDateButton: {
    backgroundColor: colors.primary,
  },
  dayText: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: '500',
    marginBottom: 2,
  },
  selectedDayText: {
    color: colors.white,
  },
  dateText: {
    fontSize: 16,
    color: colors.text.primary,
    fontWeight: '600',
  },
  selectedDateText: {
    color: colors.white,
  },
});

export default DatePicker;