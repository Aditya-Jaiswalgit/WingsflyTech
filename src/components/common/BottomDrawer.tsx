import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
import {DrawerOption} from '../../types';
import {colors} from '../../constants/colors';

interface BottomDrawerProps {
  visible: boolean;
  onClose: () => void;
  options: DrawerOption[];
  onOptionSelect: (option: DrawerOption) => void;
}

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const DRAWER_HEIGHT = SCREEN_HEIGHT * 0.6;

const BottomDrawer: React.FC<BottomDrawerProps> = ({
  visible,
  onClose,
  options,
  onOptionSelect,
}) => {
  const translateY = useRef(new Animated.Value(DRAWER_HEIGHT)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return Math.abs(gestureState.dy) > 10;
    },
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 0) {
        translateY.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > DRAWER_HEIGHT * 0.3) {
        closeDrawer();
      } else {
        openDrawer();
      }
    },
  });

  const openDrawer = () => {
    Animated.parallel([
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        tension: 120,
        friction: 8,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: DRAWER_HEIGHT,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
    });
  };

  useEffect(() => {
    if (visible) {
      openDrawer();
    } else {
      translateY.setValue(DRAWER_HEIGHT);
      backdropOpacity.setValue(0);
    }
  }, [visible]);

  const handleOptionPress = (option: DrawerOption) => {
    onOptionSelect(option);
    closeDrawer();
  };

  const getIconEmoji = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      'refresh': '🔄',
      'repeat': '🔁',
      'check': '✅',
      'flag': '🚩',
      'chevron-right': '▶️'
    };
    return iconMap[iconName] || '⚫';
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={closeDrawer}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.backdrop,
            {
              opacity: backdropOpacity,
            },
          ]}>
          <TouchableOpacity
            style={styles.backdropTouchable}
            onPress={closeDrawer}
            activeOpacity={1}
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.drawer,
            {
              transform: [{translateY}],
            },
          ]}
          {...panResponder.panHandlers}>
          <View style={styles.handle} />

          <View style={styles.content}>
            <Text style={styles.title}>Create New</Text>
            <Text style={styles.subtitle}>
              Choose what you'd like to create
            </Text>

            <View style={styles.optionsContainer}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.optionItem,
                    index === options.length - 1 && styles.lastOption,
                  ]}
                  onPress={() => handleOptionPress(option)}>
                  <View style={styles.optionIcon}>
                    <Text style={styles.optionIconText}>{getIconEmoji(option.icon)}</Text>
                  </View>
                  <View style={styles.optionContent}>
                    <Text style={styles.optionTitle}>{option.title}</Text>
                    <Text style={styles.optionSubtitle}>
                      {option.subtitle}
                    </Text>
                  </View>
                  <Text style={styles.chevronIcon}>▶️</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backdropTouchable: {
    flex: 1,
  },
  drawer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 34,
    maxHeight: DRAWER_HEIGHT,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: colors.lightGray,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 24,
  },
  optionsContainer: {
    gap: 0,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  optionIcon: {
    width: 48,
    height: 48,
    backgroundColor: `${colors.primary}15`,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  optionIconText: {
    fontSize: 20,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 4,
  },
  optionSubtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    lineHeight: 20,
  },
  chevronIcon: {
    fontSize: 16,
    color: colors.gray,
  },
});

export default BottomDrawer;