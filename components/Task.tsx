import { StyleSheet } from 'react-native'
import { ThemedText } from './ThemedText'
import { ThemedView } from './ThemedView'

interface TaskProps {
  message: string
  isDone: boolean
}

const Task = ({ isDone, message }: TaskProps) => {
  return (
    <ThemedView>
      <ThemedText style={isDone ? styles.done : styles.notDone}>
        {message}
      </ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  done: {
    color: 'green',
  },
  notDone: {
    color: 'red',
  },
})

export default Task
