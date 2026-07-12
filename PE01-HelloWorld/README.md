# Input
The project is initialized via `npx create-expo-app` using the default SDK 54 template. This setup ensures that the development environment integrates flawlessly with the Expo Go mobile client application.

# Process
React Native components are compiled into native UI elements. The engine renders a single `<View>` component, which acts as the root container bounding three child `<Text>` components that display "Sam Chung", "MSCS", and "STC". A `StyleSheet` object is created via the `StyleSheet.create()` API to pass layout and design properties to these components using the `style` prop (defining `container` and `textItem` configurations).

# Output
Three lines of text are successfully rendered at the absolute center of the viewport over a solid yellow background canvas. The text elements share a `fontSize` property of 20 units and are separated by a vertical margin (`marginVertical`) of 5 units.