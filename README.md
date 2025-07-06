# WingsFly React Native App

A beautiful task management app recreated from the provided UI design using React Native CLI with TypeScript.

## 🚀 Features

- ✅ Horizontal date picker with smooth selection
- ✅ Today's quote section with animated progress bar
- ✅ Task list with custom icons, tags, and status indicators
- ✅ Floating action button with haptic feedback
- ✅ Bottom drawer modal with slide-up animation
- ✅ Modular component architecture
- ✅ TypeScript support for better type safety
- ✅ Responsive design for various screen sizes

##Screenshots
![Screenshot 2025-07-06 223204](https://github.com/user-attachments/assets/8093bd8a-d3fe-4b21-ac10-bea4c983146e)
![Screenshot 2025-07-06 223327](https://github.com/user-attachments/assets/781a5dde-2002-4dcb-9bf4-a74b997af790)


## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **React Native CLI**
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - Mac only)
- **JDK 11** (for Android development)

## 🛠️ Installation & Setup

### 1. Clone or Create the Project

```bash
# Create new React Native project
npx react-native init WingsFlyApp --template react-native-template-typescript
cd WingsFlyApp

# Or if you have the source code, just navigate to the project directory
cd WingsFlyApp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Additional Libraries

```bash
npm install react-native-vector-icons react-native-reanimated react-native-gesture-handler react-native-svg react-native-linear-gradient
```

### 4. iOS Setup (Mac only)

```bash
cd ios && pod install && cd ..
```

### 5. Android Setup

Add the following to `android/app/build.gradle`:

```gradle
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```

Add vector icons configuration:

```gradle
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'FontAwesome.ttf', 'Ionicons.ttf' ]
]
```

### 6. Link Vector Icons (Android)

Add to `android/app/src/main/java/.../MainApplication.java`:

```java
import com.oblador.vectoricons.VectorIconsPackage;

@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainApplication(),
        new VectorIconsPackage()
    );
}
```

## 🏃‍♂️ Running the App

### Android

```bash
npx react-native run-android
```

### iOS

```bash
npx react-native run-ios
```

### Development Server

```bash
npx react-native start
```

## 📁 Project Structure

```
WingsFlyApp/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── DatePicker.tsx          # Horizontal date picker
│   │   │   ├── TaskItem.tsx            # Individual task component
│   │   │   └── BottomDrawer.tsx        # Animated bottom drawer
│   │   └── screens/
│   │       └── HomeScreen.tsx          # Main home screen
│   ├── constants/
│   │   ├── colors.ts                   # Color palette
│   │   └── data.ts                     # Mock data
│   ├── types/
│   │   └── index.ts                    # TypeScript definitions
│   └── utils/
│       └── helpers.ts                  # Utility functions
├── App.tsx                             # Root component
├── package.json                        # Dependencies
└── README.md                           # This file
```

## 🎯 Key Implementation Details

### Components

1. **DatePicker**: Horizontal scrollable date picker with selected state
2. **TaskItem**: Reusable task component with icons, tags, and status
3. **BottomDrawer**: Animated modal with slide-up animation and gesture handling
4. **HomeScreen**: Main screen orchestrating all components

### Animations

- **Bottom Drawer**: Uses `react-native-reanimated` for smooth slide-up animation
- **Progress Bar**: Animated progress indicator for daily quotes
- **Gesture Handling**: Pan gestures for drawer dismissal

### State Management

- Uses React hooks (`useState`, `useEffect`) for local state management
- Modular data structure with TypeScript interfaces
- Clean separation of concerns

## 🎨 Design System

### Colors

- Primary: #4A5FFF (Blue)
- Secondary: #6B7FFF (Light Blue)
- Background: #F8F9FA (Light Gray)
- Success: #10B981 (Green)
- Warning: #F59E0B (Orange)
- Error: #EF4444 (Red)

### Typography

- Headlines: 18-24px, Bold
- Body: 14-16px, Regular/Medium
- Captions: 12px, Regular

### Spacing

- Consistent 8px grid system
- 16px margins for content
- 12px padding for components

## 🔧 Troubleshooting

### Common Issues

1. **Vector icons not showing**

   ```bash
   # Clean and rebuild
   npx react-native clean
   npx react-native run-android
   ```

2. **Metro bundler issues**

   ```bash
   npx react-native start --reset-cache
   ```

3. **Pod install fails (iOS)**

   ```bash
   cd ios
   pod deintegrate
   pod install
   cd ..
   ```

4. **Build errors**

   ```bash
   # Clear node modules
   rm -rf node_modules
   npm install

   # Clear Metro cache
   npx react-native start --reset-cache
   ```

### Android Specific

- Ensure Android SDK is properly configured
- Check `ANDROID_HOME` environment variable
- Verify emulator is running or device is connected

### iOS Specific

- Ensure Xcode is installed and updated
- Check iOS simulator is available
- Verify development team is set in Xcode

## 🚀 Performance Optimizations

- **React.memo** for component memoization
- **useCallback** for function memoization
- **FlatList** for large lists (if needed)
- **Native driver** for animations
- **Lazy loading** for images

## 🔮 Future Enhancements

- [ ] Dark mode support
- [ ] Haptic feedback
- [ ] Push notifications
- [ ] Data persistence
- [ ] User authentication
- [ ] Task synchronization
- [ ] Calendar integration


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Built using React Native CLI and TypeScript**
