import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import DatePicker from '../common/DatePicker';
import TaskItem from '../common/TaskItem';
import BottomDrawer from '../common/BottomDrawer';
import {colors} from '../../constants/colors';
import {
  mockTasks,
  mockDates,
  drawerOptions,
  todayQuote,
  todayQuoteProgress,
} from '../../constants/data';
import {Task, DateItem, DrawerOption} from '../../types';

const HomeScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<DateItem | null>(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleDateSelect = (date: DateItem) => {
    setSelectedDate(date);
  };

  const handleTaskPress = (task: Task) => {
    console.log('Task pressed:', task.title);
  };

  const handleAddPress = () => {
    setDrawerVisible(true);
  };

  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };

  const handleOptionSelect = (option: DrawerOption) => {
    console.log('Option selected:', option.title);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>✈️</Text>
          </View>
          <Text style={styles.appName}>WingsFly</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerIconText}>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerIconText}>📅</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerIconText}>❓</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.datePickerContainer}>
        <DatePicker dates={mockDates} onDateSelect={handleDateSelect} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteTitle}>Today's Quote</Text>
          <Text style={styles.quoteText}>"{todayQuote}"</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  {width: `${todayQuoteProgress}%`},
                ]}
              />
            </View>
            <Text style={styles.progressText}>Progress {todayQuoteProgress}%</Text>
          </View>
        </View>

        <View style={styles.taskListContainer}>
          {mockTasks.map((task, index) => (
            <View key={task.id} style={styles.taskItemWrapper}>
              <TaskItem
                task={task}
                onPress={() => handleTaskPress(task)}
              />
              {index < mockTasks.length - 1 && <View style={styles.taskSeparator} />}
            </View>
          ))}
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={handleAddPress}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>

      <BottomDrawer
        visible={drawerVisible}
        onClose={handleDrawerClose}
        options={drawerOptions}
        onOptionSelect={handleOptionSelect}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
    elevation: 2,
    marginTop: 20,
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 32,
    height: 32,
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  logoIcon: {
    fontSize: 16,
    color: colors.white,
  },
  appName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.primary,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    padding: 8,
    marginLeft: 8,
  },
  headerIconText: {
    fontSize: 20,
  },
  datePickerContainer: {
    backgroundColor: colors.white,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  content: {
    flex: 1,
    backgroundColor: colors.background,
  },
  quoteContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 16,
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  quoteTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 12,
    textAlign: 'center',
  },
  quoteText: {
    fontSize: 15,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: colors.lightGray,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: '500',
  },
  taskListContainer: {
    paddingHorizontal: 16,
  },
  taskItemWrapper: {
    // Container for each task item
  },
  taskSeparator: {
    height: 12, // Space between task items
  },
  bottomSpacing: {
    height: 100,
  },
  fab: {
    position: 'absolute',
    bottom: 44,
    right: 24,
    width: 56,
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabIcon: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default HomeScreen;