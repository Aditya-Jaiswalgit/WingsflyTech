import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Task} from '../../types';
import {colors} from '../../constants/colors';

interface TaskItemProps {
  task: Task;
  onPress: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({task, onPress}) => {
  const getStatusIcon = () => {
    switch (task.status) {
      case 'completed':
        return <Text style={styles.statusIconText}>✅</Text>;
      case 'in-progress':
        return <Text style={styles.statusIconText}>⏱️</Text>;
      default:
        return (
          <View style={styles.pendingIcon}>
            <Text style={styles.statusIconText}>⚪</Text>
          </View>
        );
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'must':
        return colors.red;
      case 'important':
        return colors.orange;
      default:
        return colors.primary;
    }
  };

  const getTaskIconEmoji = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      'people': '👥',
      'self-improvement': '🧘',
      'savings': '💰',
      'directions-walk': '🚶',
      'local-florist': '🌻',
      'palette': '🎨',
      'access-time': '⏰',
      'chevron-right': '▶️'
    };
    return iconMap[iconName] || '⚫';
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.iconContainer, {backgroundColor: task.bgColor}]}>
        <Text style={[styles.taskIconText, {color: task.color}]}>
          {getTaskIconEmoji(task.icon)}
        </Text>
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {task.title}
        </Text>
        
        <View style={styles.metaContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeIconText}>⏰</Text>
            <Text style={styles.timeText}>{task.time}</Text>
          </View>
          
          {task.progress && (
            <Text style={styles.progressText}>{task.progress}</Text>
          )}
        </View>
        
        <View style={styles.tagsContainer}>
          {task.tags.map((tag, index) => (
            <View
              key={index}
              style={[
                styles.tag,
                {
                  backgroundColor: `${getTagColor(tag)}15`,
                  borderColor: getTagColor(tag),
                },
              ]}>
              <Text style={[styles.tagText, {color: getTagColor(tag)}]}>
                {tag}
              </Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.statusContainer}>
        {getStatusIcon()}
        <Text style={styles.chevronText}>▶️</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  taskIconText: {
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 8,
    lineHeight: 22,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  timeIconText: {
    fontSize: 14,
    marginRight: 4,
  },
  timeText: {
    fontSize: 14,
    color: colors.text.secondary,
    marginLeft: 4,
    fontWeight: '500',
  },
  progressText: {
    fontSize: 14,
    color: colors.text.secondary,
    fontWeight: '500',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 4,
    borderWidth: 1,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
  },
  statusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  statusIconText: {
    fontSize: 20,
  },
  chevronText: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 4,
  },
  pendingIcon: {
    marginBottom: 4,
  },
});

export default TaskItem;