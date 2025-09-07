import { Image } from 'expo-image'
import { StyleSheet, View } from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import Task from '@/components/Task'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useState } from 'react'

interface ITask {
  id: string
  message: string
  isDone: boolean
}

export default function HomeScreen() {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: '1', isDone: true, message: 'do something' },
    { id: '2', isDone: false, message: 'do something 2' },
  ])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/quan.jpg')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Today's tasks</ThemedText>
        <View style={styles.taskContainer}>
          {tasks.map((task) => (
            <Task isDone={task.isDone} message={task.message} key={task.id} />
          ))}
        </View>
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  taskContainer: {},
})
